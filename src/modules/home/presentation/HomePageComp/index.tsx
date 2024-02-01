import { cva } from "class-variance-authority";
import type { HomePageCompProps } from "./models/types";

const mainClass = cva("flex min-h-[50vh] flex-col items-center justify-centerr  p-24", {
  variants: { isServer: { true: "bg-blue-500", false: "bg-green-500" } },
});

export default function HomePageComp({ data, isServer = false }: HomePageCompProps) {
  return (
    <main className={mainClass({ isServer })}>
      <h1 className="font-bold text-white">Goto BoilerPlate</h1>
      <p className="text-white">{JSON.stringify(data, null, 4)}</p>
    </main>
  );
}
