import { Post } from "@prisma/client";
import { useQuery } from "react-query";

export const getPostBySlug = async (slug: string) => {
  const response = await fetch(`/api/posts/${slug}`);
  const data = await response.json();
  return data as Post;
};

export default function usePost(slug: string) {
  return useQuery({
    queryKey: ["post", slug],
    queryFn: async () => getPostBySlug(slug),
    enabled: !!slug,
  });
}
