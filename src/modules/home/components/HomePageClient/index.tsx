"use client";

import { useClientGetPost } from "@/services/hooks/useGetPost";
import HomePageComp from "../../presentation/HomePageComp";

export default function HomePageClient() {
  const { data } = useClientGetPost();
  return <HomePageComp data={data!} />;
}
