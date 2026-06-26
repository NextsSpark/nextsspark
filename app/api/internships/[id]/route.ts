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
    const internship = await Opportunity.findOne({
      _id: id,
      category: "internship",
    });

    if (!internship) {
      return NextResponse.json(
        { error: "Internship not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(internship);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch internship" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request, { params }: Params) {
  try {
    await connectDB();

    const { id } = await params;
    const body = await request.json();
    const internship = await Opportunity.findOneAndUpdate(
      {
        _id: id,
        category: "internship",
      },
      {
        ...body,
        category: "internship",
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!internship) {
      return NextResponse.json(
        { error: "Internship not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(internship);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to update internship" },
      { status: 500 }
    );
  }
}

export async function DELETE(_request: Request, { params }: Params) {
  try {
    await connectDB();

    const { id } = await params;
    const internship = await Opportunity.findOneAndDelete({
      _id: id,
      category: "internship",
    });

    if (!internship) {
      return NextResponse.json(
        { error: "Internship not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Internship deleted successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to delete internship" },
      { status: 500 }
    );
  }
}
