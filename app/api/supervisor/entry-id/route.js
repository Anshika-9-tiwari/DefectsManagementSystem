import {PrismaClient} from '../../../../generated/prisma';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient()

export async function GET(req, { params }) {
  try {
    const id = Number(params.id);
    const entry = await prisma.entry.findUnique({
      where: { id },
    });

    if (!entry) {
      return NextResponse.json({ error: 'Entry not found' }, { status: 404 });
    }

    return NextResponse.json(entry);
  } catch (error) {
    console.error('Failed to fetch entry by ID:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}