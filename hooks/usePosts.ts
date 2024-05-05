import { useQuery } from "react-query";

export const usePosts = (slug: string | null = null) => {
  return useQuery({
    queryKey: "posts",
    queryFn: async () => {
      const response = await fetch(`/api/posts?cat=${slug}`);
      const data = await response.json();
      return data;
    },
  });
};
