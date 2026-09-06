import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/contact-schema";
import { isRateLimited } from "@/lib/rate-limit";
import { sendContactNotification } from "@/lib/mailer";

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in a few minutes." },
      { status: 429 }
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const result = contactFormSchema.safeParse(payload);
  if (!result.success) {
    return NextResponse.json(
      { error: "Please check your submission and try again.", issues: result.error.flatten() },
      { status: 422 }
    );
  }

  if (result.data.website) {
    return NextResponse.json({ success: true });
  }

  try {
    await sendContactNotification(result.data);
  } catch (error) {
    console.error("[contact] Failed to send notification email", error);
    return NextResponse.json(
      { error: "We couldn't send your message right now. Please try again shortly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
