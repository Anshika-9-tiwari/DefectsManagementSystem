import { PrimsaClient } from '../../generated/prisma';

const prisma = new PrimsaClient();

export async function POST(req) {
  const { username } = await req.json();

  try {
    const user = await prisma.users.findUnique({
      where: { username },
      select: { role: true },
    });

    if (!user) {
      return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
    }

    return new Response(JSON.stringify({ role: user.role }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
}