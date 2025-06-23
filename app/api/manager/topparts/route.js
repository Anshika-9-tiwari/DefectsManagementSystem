import { NextResponse } from 'next/server';
import { PrismaClient } from '../../../generated/prisma';

const prisma = new PrismaClient()

export async function POST(req) {
  try {
    const { fromDate, toDate } = await req.json();

    const from = new Date(fromDate);
    const to = new Date(toDate);
    to.setHours(23, 59, 59, 999); // Include the full end of the selected day


    // Query top 10 part numbers based on count in the date range
    const data = await prisma.entry.groupBy({
      by: ['partnumber'],
      _count: {
        partnumber: true,
      },
      where: {
        datetime: {
          gte: new Date(fromDate),
          lte: new Date(toDate),
        },
        defectstatus: 'defect',
      },
      orderBy: {
        _count: {
          partnumber: 'desc',
        },
      },
      take: 10,
    });

    // Format for chart component: { label, y }
    const formatted = data.map(item => ({
      label: item.partnumber,
      y: item._count.partnumber,
    }));

    return NextResponse.json(formatted);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}