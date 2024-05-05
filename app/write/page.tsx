"use client";
import PageContainer from "@/components/page-container";
import PageTitle from "@/components/page-title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useCategorys from "@/hooks/useCategorys";
import { Catergory } from "@prisma/client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function WritePage() {
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const [content, setContent] = useState("");
  const { data: categorys, isFetching } = useCategorys();
  const { data: session } = useSession();
  const router = useRouter();
  const handleSubmit = async () => {
    const response = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
        catSlug,
      }),
    });
    if (response.ok) {
      router.push("/");
    }
  };
  if (!session) {
    return (
      <Button variant={"outline"} onClick={() => signIn()}>
        Login
      </Button>
    );
  }
  return (
    <PageContainer>
      <div className="p-10">
        <PageTitle title="Write a new post" />
        <Input
          className="mb-4"
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        {isFetching ? (
          <div>Loading...</div>
        ) : (
          <Select onValueChange={(value) => setCatSlug(value)}>
            <SelectTrigger>
              <SelectValue placeholder="select category" />
            </SelectTrigger>
            <SelectContent>
              {categorys.map((category: Catergory) => (
                <SelectItem
                  key={category.id}
                  value={category.slug}
                  title={category.title}
                >
                  {category.title}
                </SelectItem>
              ))}
            </SelectContent>
            <ReactQuill
              placeholder="content ...e"
              onChange={setContent}
              className="mt-6"
            />
            <Button className="mt-4" onClick={handleSubmit}>
              Publish
            </Button>
          </Select>
        )}
      </div>
    </PageContainer>
  );
}
