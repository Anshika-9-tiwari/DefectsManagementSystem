import {PrismaClient} from '../../../../generated/prisma';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function DELETE(request, context) {
  const { id } = context.params;

  try {
    const deletedPart = await prisma.part.delete({
      where: {
        id: Number(id), // convert to int if your DB uses int
      },
    });

    return NextResponse.json({ success: true, deletedPart });
  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete part' },
      { status: 500 }
    );
  }
}