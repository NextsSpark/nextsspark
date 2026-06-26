import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Opportunity from "@/models/Opportunity";

export async function GET(request: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);

    const categoryParam = searchParams.get("category");
    const category: "job" | "internship" | undefined =
      categoryParam === "job" || categoryParam === "internship"
        ? categoryParam
        : undefined;

    const query = category ? { category } : {};

    const opportunities = await Opportunity.find(query).sort({
      createdAt: -1,
    });

    return NextResponse.json(opportunities);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch opportunities" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();

    const opportunity = await Opportunity.create(body);

    return NextResponse.json(opportunity, {
      status: 201,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create opportunity" },
      { status: 500 }
    );
  }
}