import { NextRequest, NextResponse } from "next/server";
import { isValidObjectId } from "mongoose";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";

type Params = {
  params: Promise<{
    id: string;
  }>;
};

/* -------------------------------------------------------------------------- */
/*                                    GET                                     */
/* -------------------------------------------------------------------------- */

export async function GET(
  _request: NextRequest,
  { params }: Params
) {
  try {
    await connectDB();

    const { id } = await params;

    const blog = isValidObjectId(id)
      ? await Blog.findById(id)
      : await Blog.findOne({
          slug: id,
        });

    if (!blog) {
      return NextResponse.json(
        {
          error: "Blog not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to fetch blog",
      },
      {
        status: 500,
      }
    );
  }
}

/* -------------------------------------------------------------------------- */
/*                                    PUT                                     */
/* -------------------------------------------------------------------------- */

export async function PUT(
  request: NextRequest,
  { params }: Params
) {
  try {
    await connectDB();

    const { id } = await params;

    const body = await request.json();

    // Check if blog exists
    if (!isValidObjectId(id)) {
      return NextResponse.json(
        {
          error: "Invalid blog id",
        },
        {
          status: 400,
        }
      );
    }

    const existingBlog = await Blog.findById(id);

    if (!existingBlog) {
      return NextResponse.json(
        {
          error: "Blog not found",
        },
        {
          status: 404,
        }
      );
    }

    // Prevent duplicate slug
    const duplicateSlug = await Blog.findOne({
      slug: body.slug,
      _id: { $ne: id },
    });

    if (duplicateSlug) {
      return NextResponse.json(
        {
          error: "Slug already exists",
        },
        {
          status: 400,
        }
      );
    }

    // Preserve publishedAt
    let publishedAt = existingBlog.publishedAt;

    if (!publishedAt && body.published) {
      publishedAt = new Date();
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      {
        ...body,
        publishedAt,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    return NextResponse.json(updatedBlog);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to update blog",
      },
      {
        status: 500,
      }
    );
  }
}

/* -------------------------------------------------------------------------- */
/*                                  DELETE                                    */
/* -------------------------------------------------------------------------- */

export async function DELETE(
  _request: NextRequest,
  { params }: Params
) {
  try {
    await connectDB();

    const { id } = await params;

    if (!isValidObjectId(id)) {
      return NextResponse.json(
        {
          error: "Invalid blog id",
        },
        {
          status: 400,
        }
      );
    }

    const blog = await Blog.findById(id);

    if (!blog) {
      return NextResponse.json(
        {
          error: "Blog not found",
        },
        {
          status: 404,
        }
      );
    }

    await Blog.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to delete blog",
      },
      {
        status: 500,
      }
    );
  }
}
