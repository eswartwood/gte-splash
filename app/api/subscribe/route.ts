// app/api/subscribe/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();
  const email = String(formData.get("email") || "").trim();

  // TODO: Hook this to your email provider / CRM / Vercel KV
  console.log("New signup:", email);

  // Simple thank-you response (redirect back with a hash)
  return NextResponse.redirect(new URL("/#thanks", req.url), { status: 303 });
}
