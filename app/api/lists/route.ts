import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const lists = await prisma.list.findMany({
    include: { User: true },
    orderBy: { createdAt: 'desc' },
  })
  return NextResponse.json(lists)
}

export async function POST(req: Request) {
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

  return NextResponse.json(list)
}