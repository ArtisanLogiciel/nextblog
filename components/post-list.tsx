"use client";
import { PostWithCategory } from "@/types";
import PostCard from "./post-card";

type PostProps = {
  items: PostWithCategory[];
};
export default function PosList({ items }: PostProps) {
  return (
    <div className="gap-2 mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4">
      {Array.isArray(items) &&
        items.map((posts: PostWithCategory, id: number) => (
          <PostCard key={id} post={posts} />
        ))}
    </div>
  );
}
