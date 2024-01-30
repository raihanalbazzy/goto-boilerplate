import React from "react";

import HomePageServer from "@/modules/home/components/HomePageServer";
import HomePageClient from "@/modules/home/components/HomePageClient";

export default function HomePage() {
  return (
    <>
      <HomePageClient />
      <HomePageServer />
    </>
  );
}
