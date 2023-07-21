import { NextResponse } from "next/server";
import { availableParallelism } from "node:os";

const numCPUs = availableParallelism();

export const GET = () => {
  return NextResponse.json({
    numCPUs,
  });
};
