import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface BookingEmailRequest {
  fullName: string;
  email: string;
  phoneNumber: string;
  reservationTime: string;
  carModel: string;
  pickupLocation: string;
  pickupDate: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const bookingData: BookingEmailRequest = await req.json();
    
    console.log("Processing booking request:", bookingData);

    // Send email to sales
    const emailResponse = await resend.emails.send({
      from: "Magnicarz Bookings <onboarding@resend.dev>",
      to: ["sales@magnicarz.com"],
      subject: `New Booking Request - ${bookingData.carModel}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a1a; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">
            New Booking Request
          </h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #d4af37; margin-bottom: 15px;">Customer Information</h3>
            <p><strong>Full Name:</strong> ${bookingData.fullName}</p>
            <p><strong>Email:</strong> ${bookingData.email}</p>
            <p><strong>Phone Number:</strong> ${bookingData.phoneNumber}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #d4af37; margin-bottom: 15px;">Booking Details</h3>
            <p><strong>Car Model:</strong> ${bookingData.carModel}</p>
            <p><strong>Pick-up Location:</strong> ${bookingData.pickupLocation}</p>
            <p><strong>Pick-up Date:</strong> ${bookingData.pickupDate}</p>
            <p><strong>Reservation Time:</strong> ${bookingData.reservationTime}</p>
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
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
