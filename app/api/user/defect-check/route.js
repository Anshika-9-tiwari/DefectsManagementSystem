import { PrismaClient } from "../../../generated/prisma";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json(); // App Router API uses Request object
    const { verifiername, checkername, partnumber, defectstatus, defect } = body;

    await prisma.entry.create({
      data: {
        verifiername,
        checkername,
        partnumber,
        defectstatus,
        defect,
      },
    });

    return new Response(JSON.stringify({ message: 'Entry passed' }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Internal server error', error: error.message }), {
      status: 500,
    });
  }
}