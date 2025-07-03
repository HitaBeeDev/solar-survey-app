import { NextResponse } from "next/server";

export async function POST(req: Request): Promise<NextResponse> {
  const body = await req.json();

  const requiredFields = [
    "propertyType",
    "roofDirection",
    "roofAge",
    "electricityUsage",
    "interestedInOther",
  ];

  for (const field of requiredFields) {
    if (!body[field]) {
      return NextResponse.json({ error: `Missing: ${field}` }, { status: 400 });
    }
  }

  const result = Math.random() < 0.5 ? "yes" : "no";

  return NextResponse.json({ result });
}
