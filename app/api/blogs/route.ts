import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";

export async function GET() {
  try {
    await connectDB();

    const blogs = await Blog.find().sort({
      createdAt: -1,
    });

    return NextResponse.json(blogs);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to fetch blogs",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();

    // Check duplicate slug
    const existingBlog = await Blog.findOne({
      slug: body.slug,
    });

    if (existingBlog) {
      return NextResponse.json(
        {
          error: "Slug already exists",
        },
        {
          status: 400,
        }
      );
    }

    const blog = await Blog.create({
      ...body,

      publishedAt: body.published
        ? new Date()
        : null,
    });

    return NextResponse.json(blog, {
      status: 201,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to create blog",
      },
      {
        status: 500,
      }
    );
  }
}