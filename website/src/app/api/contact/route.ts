import { NextResponse } from "next/server";
import { z } from "zod";
import { createContactSubmission } from "@/services/contact.service";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(5, "Message must be at least 5 characters long"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validation = contactSchema.safeParse(body);

    if (!validation.success) {
      const firstError = validation.error.issues[0]?.message || "Invalid contact input";
      return NextResponse.json(
        { success: false, error: firstError, details: validation.error.issues },
        { status: 400 }
      );
    }

    const contact = await createContactSubmission(validation.data);

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully!",
        data: contact,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to submit contact message. Please try again later.",
      },
      { status: 500 }
    );
  }
}
