import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/send-email";

export async function POST(request: NextRequest) {
  const { email, name, message } = await request.json();

  try {
    await sendEmail({
      from: process.env.MY_EMAIL || "",        // remetente definido na env
      to: "pedrohl.m@hotmail.com",             // seu email destinatário
      subject: `Message from ${name} (${email})`,
      text: message,
    });
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
