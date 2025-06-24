import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const url = new URL(request.url)
  const id = url.pathname.split('/').pop()
  if (!id || isNaN(Number(id))) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 })
  }

  const post = await prisma.post.findUnique({
    where: { id: Number(id) },
  })
  return post
    ? NextResponse.json(post)
    : NextResponse.json({ error: 'Not found' }, { status: 404 })
}

export async function PUT(request: Request) {
  const url = new URL(request.url)
  const id = url.pathname.split('/').pop()
  if (!id || isNaN(Number(id))) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 })
  }

  const body = await request.json()
  const updated = await prisma.post.update({
    where: { id: Number(id) },
    data: {
      title: body.title,
      content: body.content,
    },
  })
  return NextResponse.json(updated)
}

export async function DELETE(request: Request) {
  const url = new URL(request.url)
  const id = url.pathname.split('/').pop()
  if (!id || isNaN(Number(id))) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 })
  }

  await prisma.post.delete({
    where: { id: Number(id) },
  })
  return NextResponse.json({ success: true })
}