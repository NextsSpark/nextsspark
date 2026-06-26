import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Opportunity from "@/models/Opportunity";

export async function GET() {
  try {
    await connectDB();

    const jobs = await Opportunity.find({ category: "job" }).sort({
      createdAt: -1,
    });

    return NextResponse.json(jobs);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch jobs" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();
    const job = await Opportunity.create({
      ...body,
      category: "job",
    });

    return NextResponse.json(job, { status: 201 });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to create job" },
      { status: 500 }
    );
  }
}
