import { availableParallelism } from 'node:os';
import { NextResponse } from 'next/server';

const numCPUs = availableParallelism();

export const GET = () => {
  return NextResponse.json({
    numCPUs,
  });
};
