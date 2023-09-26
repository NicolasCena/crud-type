import { NextResponse } from "next/server";
import { prisma } from "@/app/libs/prisma";

export async function GET() {
    const medicReports = await prisma.report.findMany();
    return NextResponse.json(medicReports)
}

export async function POST(request: Request) {
    const data = await request.json();
    const newReport = await prisma.report.create({
        data,
    });
    return NextResponse.json(newReport)
}