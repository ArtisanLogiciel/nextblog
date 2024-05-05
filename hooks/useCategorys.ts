import { useQuery } from "react-query";

export default function useCategorys() {
  return useQuery({
    queryKey: "categorys",
    queryFn: async () => {
      const res = await fetch("/api/categorys");
      return res.json();
    },
  });
}
