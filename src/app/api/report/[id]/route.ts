import { NextResponse } from "next/server";
import { prisma } from "@/app/libs/prisma";
interface Params {
  params: { id: string };
}

export async function GET(request: Request, { params }: Params) {
    const report = await prisma.report.findFirst({
        where: {
            id: Number(params.id)
        }
    })
  return NextResponse.json(report);
}

export async function PUT(request: Request, { params }: Params){
    const data = await request.json();
    const reportUpdated = await prisma.report.update({
        where: {
            id: Number(params.id)
        },
        data: data
    })
    return NextResponse.json(reportUpdated)
}

export async function DELETE(request: Request, { params }: Params) {
    const reportDeleted = await prisma.report.delete({
        where: {
            id: Number(params.id)
        }
    })
    return NextResponse.json(reportDeleted);
}
