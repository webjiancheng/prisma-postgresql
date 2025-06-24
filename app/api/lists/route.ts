import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const lists = await prisma.list.findMany({
      include: { User: true },
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json(lists)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch lists' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { title, description, userId } = body

    if (!title || !userId) {
      return NextResponse.json({ error: 'Title and userId are required' }, { status: 400 })
    }

    const list = await prisma.list.create({
      data: {
        title,
        description,
        userId: Number(userId),
      },
    })

    return NextResponse.json(list, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create list' }, { status: 500 })
  }
}