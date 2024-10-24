import { usePathname } from "next/navigation";

export const usePathState = () => {
  const path = usePathname();

  const isPathHome = path === "/";
  const isPathSearch = path === "/search";
  const isPathMusic = path === "/music";
  const isPathPodcasts = path === "/podcasts";
  const isPathPlayist = path === "/playlist";
  const isPathPremium = path === "/premium";

  return {
    isPathHome,
    isPathSearch,
    isPathMusic,
    isPathPodcasts,
    isPathPlayist,
    isPathPremium,
  } as const;
};
