import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();
  console.log(data);
  return new Response(
    JSON.stringify({ msg: "Thank you for your message!" })
  );
}
