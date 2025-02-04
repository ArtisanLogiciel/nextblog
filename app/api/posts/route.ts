import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url);
    const catSlug = searchParams.get("cat");
    const posts = await prisma.post.findMany({
      where: {
        ...(catSlug && catSlug === null && catSlug === "" && { catSlug }),
      },
      include: {
        cat: true,
      },
    });
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Somthing go wrong" }, { status: 500 });
  }
};
