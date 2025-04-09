import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    const logs = await prisma.log.findMany()
    console.log(logs)
    return new Response(JSON.stringify(logs), { status: 200 });
  } catch (err) {
    if (err instanceof Error) throw new Error(err.message)
  }
}