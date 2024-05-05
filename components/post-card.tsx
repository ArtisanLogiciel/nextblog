import { PostWithCategory } from "@/types";
import { Eye, MessageCircle } from "lucide-react";
import Image from "next/image"; // Import the Image component from the appropriate package
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

type PostCardProps = {
  post: PostWithCategory;
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`posts/${post?.slug}`}>
      <Card className="flex flex-col justify-between rounded-lg border-2 h-[100%]">
        <CardHeader>
          <div className="aspect-square relative">
            <Image
              src="/img/image.png"
              alt={post.title as string}
              fill
              className="aspect-square object-cover transition-all duration-300 hover:scale-110"
            />
          </div>
          <p className="font-semibold text-lg mt-3">{post.title}</p>
        </CardHeader>
        <CardContent>
          <Badge variant="outline">{post.cat.title}</Badge>
        </CardContent>
        <CardFooter>
          <div className="flex gap-2">
            <div className="flex items-center gap-1">
              <MessageCircle size={20} className="text-slate-500" />
              <p className="text-slate-500">{post.nbComments}</p>
            </div>
            <div className="flex items-center gap-1">
              <Eye size={20} className="text-slate-500" />
              <p className="text-slate-500">{post.views}</p>
              <p className="text-slate-500">by {post.author}</p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
