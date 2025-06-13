import {PrismaClient} from '../../../generated/prisma';
const prisma = new PrismaClient();

export async function GET(req) {
  try {
    const parts = await prisma.part.findMany();
    return new Response(JSON.stringify(parts), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Server error while fetching parts' }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    const data = await req.json();

    if (data.numLeakageFixtures) {
      data.numLeakageFixtures = parseInt(data.numLeakageFixtures, 10);
    }

    const newPart = await prisma.part.create({
      data,
    });

    return new Response(JSON.stringify(newPart), { status: 201, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    console.error('Error in POST /api/dashboard/parts:', error);
    return new Response(JSON.stringify({ error: 'Server error while adding part' }), { status: 500 });
  }
}