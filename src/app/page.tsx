"use client";

import All from "@/components/All";
import { usePathname } from "next/navigation";
import Music from "./music/page";
import Podcasts from "./podcasts/page";

export default function Home() {
  const path = usePathname();

  return (
    <>{path === "/" ? <All /> : path === "/music" ? <Music /> : <Podcasts />}</>
  );
}
