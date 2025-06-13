import { NextResponse } from "next/server";
import {PrismaClient} from '../../../generated/prisma';

const prisma = new PrismaClient()

// GET: Fetch all defects
export async function GET() {
  try {
    const defects = await prisma.defects.findMany({
      orderBy: { id: 'asc' },
    })
    return NextResponse.json(defects)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch defects' }, { status: 500 })
  }
}

// POST: Add a new defect
export async function POST(request) {
  try {
    const { defectcode, defect } = await request.json()

    if (!defectcode || !defect) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const newDefect = await prisma.defects.create({
      data: {
        defectcode,
        defect,
      },
    })

    return NextResponse.json(newDefect)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add defect' }, { status: 500 })
  }
}

export async function DELETE(req) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')

  if (!id) return new Response('ID is required', { status: 400 })

  await prisma.defects.delete({
    where: { id: parseInt(id) }
  })

  return new Response('Deleted successfully', { status: 200 })
}