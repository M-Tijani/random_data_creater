import { NextResponse } from "next/server";

import generator from "generate-password";

export async function GET() {
  const password = generator.generate({
    length: 15,
    numbers: true,
    lowercase: true,
    uppercase: true,
  });

  return NextResponse.json(password);
}
