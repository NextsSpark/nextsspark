import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Opportunity from "@/models/Opportunity";

type Params = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(_request: Request, { params }: Params) {
  try {
    await connectDB();

    const { id } = await params;
    const job = await Opportunity.findOne({
      _id: id,
      category: "job",
    });

    if (!job) {
      return NextResponse.json(
        { error: "Job not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(job);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch job" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request, { params }: Params) {
  try {
    await connectDB();

    const { id } = await params;
    const body = await request.json();
    const job = await Opportunity.findOneAndUpdate(
      {
        _id: id,
        category: "job",
      },
      {
        ...body,
        category: "job",
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!job) {
      return NextResponse.json(
        { error: "Job not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(job);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to update job" },
      { status: 500 }
    );
  }
}

export async function DELETE(_request: Request, { params }: Params) {
  try {
    await connectDB();

    const { id } = await params;
    const job = await Opportunity.findOneAndDelete({
      _id: id,
      category: "job",
    });

    if (!job) {
      return NextResponse.json(
        { error: "Job not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Job deleted successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to delete job" },
      { status: 500 }
    );
  }
}
