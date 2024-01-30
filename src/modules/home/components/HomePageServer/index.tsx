import HomePageComp from "../../presentation/HomePageComp";
import { useServerGetPost } from "@/services/hooks/useGetPost";

export default async function HomePageServer() {
  const data = await useServerGetPost();

  return <HomePageComp data={data} isServer />;
}
