import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
export const GET = async (
  req: Request,
  { params }: { params: { slug: string } }
) => {
  // GET sigle post
  // /api/posts/react-native
  const { slug } = params;

  try {
    const post = await prisma.post.findMany({
      where: {
        slug,
      },
    });
    const viewPost = await prisma.post.update({
      where: {
        slug,
      },
      data: {
        views: {
          increment: 1,
        },
      },
    });

    if (!post) {
      return NextResponse.json(
        { error: "errpr fetching post" },
        { status: 500 }
      );
    }

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "errpr fetching post" }, { status: 500 });
  }
};
