import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { connectDB } from "@/lib/mongodb";
import Admin from "@/models/Admin";

export async function GET() {
  try {
    await connectDB();

    const existingAdmin = await Admin.findOne({
      email: "admin@nextsspark.com",
    });

    if (existingAdmin) {
      return NextResponse.json({
        message: "Admin already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(
      "Admin@123",
      10
    );

    await Admin.create({
      name: "Super Admin",
      email: "admin@nextsspark.com",
      password: hashedPassword,
      role: "super_admin",
    });

    return NextResponse.json({
      message: "Admin created successfully",
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to create admin",
      },
      {
        status: 500,
      }
    );
  }
}