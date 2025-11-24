import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Server-side validation schema
const bookingSchema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().email("Invalid email address").max(255, "Email is too long"),
  phoneNumber: z.string().regex(/^\+?\d{7,15}$/, "Invalid phone number format"),
  reservationTime: z.string().min(1, "Reservation time is required").max(50),
  carModel: z.string().trim().min(1, "Car model is required").max(100),
  pickupLocation: z.string().trim().min(1, "Pickup location is required").max(200),
  pickupDate: z.string().min(1, "Pickup date is required").max(50),
});

// HTML escape function to prevent XSS
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Simple in-memory rate limiting (resets on function cold start)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5; // 5 requests per minute per IP

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  record.count++;
  return true;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting check
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || 
                     req.headers.get("x-real-ip") || 
                     "unknown";
    
    if (!checkRateLimit(clientIp)) {
      console.warn(`Rate limit exceeded for IP: ${clientIp}`);
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const rawData = await req.json();
    
    // Validate input data
    const bookingData = bookingSchema.parse(rawData);
    
    console.log("Processing validated booking request for:", bookingData.email);

    // Escape all user inputs to prevent XSS
    const escapedData = {
      fullName: escapeHtml(bookingData.fullName),
      email: escapeHtml(bookingData.email),
      phoneNumber: escapeHtml(bookingData.phoneNumber),
      reservationTime: escapeHtml(bookingData.reservationTime),
      carModel: escapeHtml(bookingData.carModel),
      pickupLocation: escapeHtml(bookingData.pickupLocation),
      pickupDate: escapeHtml(bookingData.pickupDate),
    };

    // Send email to sales
    const emailResponse = await resend.emails.send({
      from: "Magnicarz Bookings <samuel@magnicarz.com>",
      to: ["sales@magnicarz.com"],
      subject: `New Booking Request - ${escapedData.carModel}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a1a; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">
            New Booking Request
          </h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #d4af37; margin-bottom: 15px;">Customer Information</h3>
            <p><strong>Full Name:</strong> ${escapedData.fullName}</p>
            <p><strong>Email:</strong> ${escapedData.email}</p>
            <p><strong>Phone Number:</strong> ${escapedData.phoneNumber}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #d4af37; margin-bottom: 15px;">Booking Details</h3>
            <p><strong>Car Model:</strong> ${escapedData.carModel}</p>
            <p><strong>Pick-up Location:</strong> ${escapedData.pickupLocation}</p>
            <p><strong>Pick-up Date:</strong> ${escapedData.pickupDate}</p>
            <p><strong>Reservation Time:</strong> ${escapedData.reservationTime}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; color: #666; font-size: 12px;">
            <p>This is an automated message from the Magnicarz booking system.</p>
          </div>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-booking-email function:", error);
    
    // Handle validation errors
    if (error.name === "ZodError") {
      return new Response(
        JSON.stringify({ 
          error: "Invalid booking data", 
          details: error.errors 
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }
    
    return new Response(
      JSON.stringify({ error: "Failed to process booking request" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
