import { PrismaClient } from '../../generated/prisma';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const users = await prisma.users.findMany({
      where: { role: 'user' },
      select: {  username: true },
    });

    return NextResponse.json(users);
  } catch (err) {
    console.error('Failed to fetch usernames:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}