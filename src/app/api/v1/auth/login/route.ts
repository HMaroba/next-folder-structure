
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const { emailAddress, password } = body;

}
