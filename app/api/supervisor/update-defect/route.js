import { PrismaClient } from '../../../generated/prisma';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { id, defect } = await req.json();

    if (!id || !Array.isArray(defect)) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }

    await prisma.entry.update({
      where: { id: Number(id) },
      data: {
        defect,
        defectstatus: defect.length > 0 ? 'defect' : 'ok',
      },
    });

    return NextResponse.json({ message: 'Defect updated successfully' });
  } catch (error) {
    console.error('Failed to update defect:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}