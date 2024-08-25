import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
    try {
        const data = await prisma.user.findMany();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ status: 500 });
    }
}


// Start of Selection
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        if (!body.name || !body.email || !body.followers || !body.isActive ) {
            return NextResponse.json( { status: 400 });
        }
        // Assuming you want to create a new user
        const newUser = await prisma.user.create({
            data: {
                name: body.name,
                email: body.email,
                followers: body.followers,
                isActive: body.isActive,
            },
        });
        return NextResponse.json(newUser);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
