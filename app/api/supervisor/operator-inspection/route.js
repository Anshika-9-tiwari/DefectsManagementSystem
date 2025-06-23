import { PrismaClient } from '../../../generated/prisma';

const prisma = new PrismaClient()

export async function POST(req) {
  try {
    const { from, to } = await req.json();
    if (!from || !to) {
      return new Response(JSON.stringify({ error: 'Missing date filters' }), { status: 400 });
    }

    const fromDate = new Date(from);
    const toDate = new Date(to);
    toDate.setHours(23, 59, 59, 999);

    // Get all users with role 'user'
    const users = await prisma.users.findMany({ where: { role: 'user' } });

    // Get all entries in date range
    const entries = await prisma.entry.findMany({
      where: {
        datetime: {
          gte: fromDate,
          lte: toDate,
        },
      },
    });

    let totalChecked = entries.length;
    let totalApproved = entries.filter(e => e.defectstatus.toLowerCase() === 'ok').length;
    let totalRejected = totalChecked - totalApproved;

    // Operator-wise grouping
    const operatorSummary = users.map(user => {
      const userEntries = entries.filter(e => e.checkername === user.username);
      const approved = userEntries.filter(e => e.defectstatus.toLowerCase() === 'ok').length;
      const rejected = userEntries.length - approved;

      return {
        username: user.username,
        total: userEntries.length,
        approved,
        rejected,
      };
    });

    return new Response(JSON.stringify({
      totalChecked,
      totalApproved,
      totalRejected,
      operators: operatorSummary
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
}