import { PrismaClient } from "../../../generated/prisma";

const prisma = new PrismaClient()

export async function POST(req) {
  const { page = 1, part, defect, from, to } = await req.json();
  const pageSize = 50;

  const where = {};

  if (part && part !== 'All') {
    where.partnumber = part;
  }

  if (defect && defect !== 'All') {
    where.defect = { has: defect };
  }

  if (from && to) {
    where.datetime = {
      gte: new Date(from),
      lte: new Date(to),
    };
  }

  const totalCount = await prisma.entry.count({ where });
  const totalPages = Math.ceil(totalCount / pageSize);

  const entries = await prisma.entry.findMany({
    where,
    skip: (page - 1) * pageSize,
    take: pageSize,
    orderBy: { datetime: 'desc' },
  });

  return new Response(JSON.stringify({ entries, totalPages }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}