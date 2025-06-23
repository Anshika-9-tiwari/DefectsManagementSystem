import {PrismaClient} from '../../../generated/prisma';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient()

export async function POST(req) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: 'Missing entry ID' }, { status: 400 });
    }

    await prisma.entry.update({
      where: { id: Number(id) },
      data: {
        defectstatus: 'ok',
        defect: ['None'],
      },
    });

    return NextResponse.json({ message: 'Updated successfully' });
  } catch (error) {
    console.error('Delete failed:', error);
    return NextResponse.json({ error: 'Failed to delete entry' }, { status: 500 });
  }
}