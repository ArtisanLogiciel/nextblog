import { CATEGORYS } from "@/utils/categorys";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";

export default function ResponsiveMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon className="h-6 w-6 md:hidden" />
      </SheetTrigger>

      <div className="flex flex-co gap-4">
        <SheetContent className="flex flex-col" side={"left"}>
          {/* Add your content here */}
          <SheetClose asChild>
            <Button variant="ghost">
              <Link href="/write">Write a Post</Link>
            </Button>
          </SheetClose>
          <p>Catergory</p>
          {CATEGORYS.map((category) => (
            <SheetClose key={category.id} asChild>
              <Link href={`/category/${category.slug}`} key={category.id}>
                <Button variant="ghost">{category.name}</Button>
              </Link>
            </SheetClose>
          ))}
        </SheetContent>
      </div>
    </Sheet>
  );
}
