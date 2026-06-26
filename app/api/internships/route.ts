import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Opportunity from "@/models/Opportunity";

export async function GET() {
  try {
    await connectDB();

    const internships = await Opportunity.find({
      category: "internship",
    }).sort({ createdAt: -1 });

    return NextResponse.json(internships);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch internships" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();
    const internship = await Opportunity.create({
      ...body,
      category: "internship",
    });

    return NextResponse.json(internship, { status: 201 });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to create internship" },
      { status: 500 }
    );
  }
}
