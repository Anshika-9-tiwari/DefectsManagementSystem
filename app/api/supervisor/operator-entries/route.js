import {PrismaClient} from '../../../generated/prisma';
import { NextResponse } from 'next/server';


const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { partnumber, from, to } = await req.json();

    let where = {
        defectstatus: 'defect',
    };

    if (partnumber && partnumber !== 'All') {
      where.partnumber = partnumber;
    }

    if (from && to) {
      where.datetime = {
        gte: new Date(from),
        lte: new Date(to),
      };
    }

    const entries = await prisma.entry.findMany({
      where,
      orderBy: { datetime: 'asc' },
    });

        const summary = {
      totalChecked: entries.length,
      totalApproved: 0, // Always zero since these are all defects
      totalRejected: entries.length,
      operators: [],
    };

    const operatorMap = {};

    for (const entry of entries) {
      const username = entry.checkername;
      if (!operatorMap[username]) {
        operatorMap[username] = {
          username,
          total: 0,
          approved: 0,
          rejected: 0,
        };
      }

      operatorMap[username].total += 1;
      operatorMap[username].rejected += 1;
    }

    summary.operators = Object.values(operatorMap);


    return NextResponse.json(entries);
  } catch (error) {
    console.error('Error fetching entries:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}