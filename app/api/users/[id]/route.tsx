import { NextRequest, NextResponse } from 'next/server';
import schema from '../schema';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface Props{
    params :{
        id: string
    }
}

export async function GET(request: NextRequest, { params: { id } }: Props) {
    const user = await prisma.user.findUnique({
        where: { id: parseInt(id) },
    });

    if (!user) {
        return NextResponse.json({ message: "User not found!" }, { status: 404 });
    }

    return NextResponse.json(user);
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
    const body = await request.json();
    const validation = schema.safeParse(body);

    if (!validation.success) {
        return NextResponse.json({ status: 400 });
    }

    const user = await prisma.user.update({
        where: { id: parseInt(id) },
        data: body,
    });

    if (!user) {
        return NextResponse.json({ message: "User not found!" }, { status: 404 });
    }

    return NextResponse.json({ message: `Updated id: ${id}`, data: user });
}

export async function DELETE(request: NextRequest, { params: { id } }: Props) {
    const user = await prisma.user.delete({
        where: { id: parseInt(id) },
    });

    if (!user) {
        return NextResponse.json({ message: "User not found!" }, { status: 404 });
    }

    return NextResponse.json({ message: `Deleted id: ${id}` });
}
