import { connectDB } from "@/app/lib/mongodb.js";
import Contact from "@/app/models/contact.js";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email, message } = await request.json();

  try {
    await connectDB();
    await Contact.create({ name, email, message });

    return NextResponse.json({
      msg: "Thank you for your message!",
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      Object.keys(error.errors).forEach((key) => {
        errorList.push(error.errors[key].message);
      });
      return NextResponse.json({ errorList, success: false });
    }

    console.log(error);
  }
}
