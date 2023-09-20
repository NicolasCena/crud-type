import { NextResponse } from "next/server";

interface Params {
  params: { id: string };
}

export function GET(request: Request, { params }: Params) {
  return NextResponse.json("Obteniendo informe medico " + params.id);
}
