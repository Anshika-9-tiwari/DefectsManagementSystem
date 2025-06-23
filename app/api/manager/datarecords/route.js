import {PrismaClient} from '../../../generated/prisma';

const prisma = new PrismaClient()

export async function POST(request) {
  try {
    const { from, to } = await request.json();

    if (!from || !to) {
      return new Response(JSON.stringify({ error: 'Missing date filters' }), { status: 400 });
    }

    const fromDate = new Date(from);
    const toDate = new Date(to);
    toDate.setHours(23, 59, 59, 999); // include full day

    const entries = await prisma.entry.findMany({
      where: {
        datetime: {
          gte: fromDate,
          lte: toDate,
        },
      },
      orderBy: { datetime: 'asc' },
    });

    const parts = await prisma.part.findMany();
    const defects = await prisma.defects.findMany();

    const summary = {};

    for (const entry of entries) {
      const dateObj = new Date(entry.datetime);
      const date = dateObj.toISOString().split('T')[0];
      const month = dateObj.toLocaleString('default', { month: 'long' });
      const partDetail = parts.find(p => p.assyPartNo === entry.partnumber);

      const key = `${date}_${entry.partnumber}`;

      if (!summary[key]) {
        summary[key] = {
          date,
          month,
          inspectionModule: partDetail?.inspectionModule || "n/a",
          partNo: entry.partnumber,
          itemCode: partDetail?.itemCode || "n/a",
          inspQty: 0,
          okQty: 0,
          rejQty: 0,
          defects: Object.fromEntries(defects.map(d => [d.defect, 0])),
        };
      }

      summary[key].inspQty += 1;

      if (entry.defectstatus.toLowerCase() === 'ok') {
        summary[key].okQty += 1;
      } else {
        summary[key].rejQty += 1;
        if (entry.defect && summary[key].defects[entry.defect] !== undefined) {
          summary[key].defects[entry.defect] += 1;
        }

        if (Array.isArray(entry.defect)) {
          for (const d of entry.defect) {
            if (summary[key].defects[d] !== undefined) {
              summary[key].defects[d] += 1;
            }
          }
        } else if (typeof entry.defect === 'string') {
          // fallback for single defect string (backward compatibility)
          if (summary[key].defects[entry.defect] !== undefined) {
            summary[key].defects[entry.defect] += 1;
          }
        }
      }
    }

    return new Response(JSON.stringify(Object.values(summary)), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error generating summary:', error);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
}