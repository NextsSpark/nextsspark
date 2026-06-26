import { connectDB } from "@/lib/mongodb";
import Opportunity from "@/models/Opportunity";

export async function getOpportunities() {
  await connectDB();

  const opportunities = await Opportunity.find()
    .sort({ createdAt: -1 })
    .lean();

  return JSON.parse(JSON.stringify(opportunities));
}