import { NextResponse } from 'next/server';
import { PrismaClient } from '../../../generated/prisma';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function GET(request) {
  const users = await prisma.users.findMany();
  return NextResponse.json(users);
}

export async function POST(request) {
  try {
    const data = await request.json();

    // Basic validation
    if (!data.name || !data.username || !data.email || !data.role) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

     // Hash the password
    const hashedPassword = await bcrypt.hash(data.password, 10); // 10 salt rounds


    // Add user to database
    const newUser = await prisma.users.create({
      data: {
        name: data.name,
        username: data.username,
        password: hashedPassword,
        email: data.email,
        role: data.role,
      },
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error('Error in POST /api/dashboard/users:', error);
    return NextResponse.json({ error: 'Failed to add user' }, { status: 500 });
  }
}

