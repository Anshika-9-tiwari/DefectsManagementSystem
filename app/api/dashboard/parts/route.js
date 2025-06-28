
import { PrismaClient } from '../../../generated/prisma';
const prisma = new PrismaClient();

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const partnumber = searchParams.get('partnumber');

    const parts = partnumber
      ? await prisma.part.findMany({ where: { assyPartNo: partnumber } })
      : await prisma.part.findMany();

    return new Response(JSON.stringify(parts), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('GET error:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch parts' }), {
      status: 500,
    });
  }
}

export async function POST(req) {
  try {
    const data = await req.json();

    if (data.numLeakageFixtures) {
      data.numLeakageFixtures = parseInt(data.numLeakageFixtures, 10);
    }

    const newPart = await prisma.part.create({ data });

    return new Response(JSON.stringify(newPart), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('POST error:', error);
    return new Response(
      JSON.stringify({ error: 'Server error while adding part' }),
      { status: 500 }
    );
  }
}
