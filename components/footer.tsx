import { CATEGORYS } from "@/utils/categorys";
import Link from "next/link";
import PageContainer from "./page-container";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="p-4 mt-4 border-t">
      <PageContainer>
        <div className="flex items-center justify-center m-4">
          <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-blue-600">
            NextBlog
          </h1>
        </div>
        <div className="flex gap-2 justify-between flex-col md:flex-row">
          {CATEGORYS.map((category) => {
            return (
              <Button variant="ghost" key={category.id}>
                <Link href={`/category/${category.slug}`} key={category.id}>
                  {category.name}
                </Link>
              </Button>
            );
          })}
          <Button variant="ghost">
            <Link href="/write">Write a Post</Link>
          </Button>
        </div>
      </PageContainer>
    </footer>
  );
}
