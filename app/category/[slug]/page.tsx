"use client";
import PageContainer from "@/components/page-container";
import PageTitle from "@/components/page-title";
import PosList from "@/components/post-list";
import { usePosts } from "@/hooks/usePosts";

type Params = {
  params: {
    slug: string;
  };
};
export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export default function CategoryPage({ params }: Params) {
  const { slug } = params;
  const { data: posts, isFetching, error } = usePosts(slug);
  return (
    <PageContainer>
      <div className="py-10 px-4">
        <PageTitle title={capitalize(slug.replace("-", " "))} />
        {isFetching ? (
          <p className="text-xl text-white">Loading...</p>
        ) : (
          <PosList items={posts} />
        )}
      </div>
    </PageContainer>
  );
}
