"use client";

import { All } from "@/components/All";
import Music from "./music/page";
import Podcasts from "./podcasts/page";
import { usePathState } from "@/utils/usePathState";

export default function Home() {
  const { isPathHome, isPathMusic } = usePathState();

  return isPathHome ? <All /> : isPathMusic ? <Music /> : <Podcasts />;
}
