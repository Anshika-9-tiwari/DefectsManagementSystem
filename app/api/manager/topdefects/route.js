import { NextResponse } from "next/server";
import { PrismaClient } from '../../../generated/prisma';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { fromDate, toDate } = await req.json();

    const from = new Date(fromDate);
    const to = new Date(toDate);
    to.setHours(23, 59, 59, 999); // Include full day

    // Query top 10 defect types
    const entries = await prisma.entry.findMany({
      where: {
        datetime: {
          gte: from,
          lte: to,
        },
        defectstatus: 'defect',
      },
      select: {
        defect: true,
      },
    });

    // Flatten all defects into one array
    const defectCount = {};
    entries.forEach(entry => {
      entry.defect.forEach(defectLabel => {
        if (defectCount[defectLabel]) {
          defectCount[defectLabel]++;
        } else {
          defectCount[defectLabel] = 1;
        }
      });
    });

    // Convert to array and sort
    const sortedDefects = Object.entries(defectCount)
      .map(([label, count]) => ({ label, y: count }))
      .sort((a, b) => b.y - a.y)
      .slice(0, 10); // Top 10

    return NextResponse.json(sortedDefects);
  } catch (error) {
    console.error("Top 10 defect error:", error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}