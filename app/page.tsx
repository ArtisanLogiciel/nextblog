"use client";
import PageContainer from "@/components/page-container";
import PosList from "@/components/post-list";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useCategorys from "@/hooks/useCategorys";
import { usePosts } from "@/hooks/usePosts";
import { Catergory } from "@prisma/client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { data: posts, isFetching } = usePosts();
  const { data: categorys } = useCategorys();
  return (
    <PageContainer>
      <div className="py-10 px-4">
        <div
          style={{ backgroundImage: "url(/img/image.png)" }}
          className="rounded-lg aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover lg:w-full"
        >
          <div className="h-full w-full flex flex-col justify-center items-center">
            <div className="sm:max-w-xl max-w-xs bg-secondary/80 rounded-lg">
              <h1 className="font-bold text-3xl sm:text-5xl md:text-black sm:text-white text-center mb-4 dark:text-white">
                How Become a Better Software Engeneier
              </h1>
              <Input
                type="email"
                placeholder="Enter your email"
                className="dark:bg-white"
              />
              <Button size="lg" className="w-full py-6 text-xl mt-4">
                Subsribe to newsletter
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-6 md:flex-row gap-2 justify-center items-center">
          {Array.isArray(categorys) &&
            categorys.map((category: Catergory) => (
              <Button variant="outline" key={category.id} className="m-2">
                <Link href={`/category/${category.slug}`}>
                  {category.title}
                </Link>
              </Button>
            ))}
        </div>
        {!isFetching && <PosList items={posts} />}
      </div>
    </PageContainer>
  );
}
