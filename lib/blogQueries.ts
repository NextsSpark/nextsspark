import "server-only";

import { isValidObjectId } from "mongoose";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";

export type BlogDocument = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  coverImagePublicId: string;
  content: string;
  category: string;
  tags: string[];
  readingTime: number;
  seoTitle: string;
  seoDescription: string;
  featured: boolean;
  published: boolean;
  publishedAt?: string | null;
  author: string;
  createdAt?: string;
  updatedAt?: string;
};

function serializeBlog(blog: unknown): BlogDocument {
  return JSON.parse(JSON.stringify(blog));
}

export async function getAllBlogs() {
  await connectDB();

  const blogs = await Blog.find().sort({ createdAt: -1 }).lean();

  return blogs.map(serializeBlog);
}

export async function getPublishedBlogs() {
  await connectDB();

  const blogs = await Blog.find({ published: true })
    .sort({ publishedAt: -1, createdAt: -1 })
    .lean();

  return blogs.map(serializeBlog);
}

export async function getFeaturedBlogs(limit = 3) {
  await connectDB();

  const blogs = await Blog.find({
    published: true,
    featured: true,
  })
    .sort({ publishedAt: -1, createdAt: -1 })
    .limit(limit)
    .lean();

  return blogs.map(serializeBlog);
}

export async function getBlogById(id: string) {
  if (!isValidObjectId(id)) return null;

  await connectDB();

  const blog = await Blog.findById(id).lean();

  return blog ? serializeBlog(blog) : null;
}

export async function getPublishedBlogBySlug(slug: string) {
  await connectDB();

  const blog = await Blog.findOne({
    slug,
    published: true,
  }).lean();

  return blog ? serializeBlog(blog) : null;
}
