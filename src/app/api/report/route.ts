import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json("Obteniendo informe")
}

export function POST() {
    return NextResponse.json("Creando informe")
}