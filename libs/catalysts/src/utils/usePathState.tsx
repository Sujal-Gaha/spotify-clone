import { useLocation } from 'react-router-dom';

export const usePathState = () => {
  const { pathname } = useLocation();

  const isPathHome = pathname === '/';
  const isPathSearch = pathname === '/search';
  const isPathMusic = pathname === '/music';
  const isPathPodcasts = pathname === '/podcasts';
  const isPathPlayist = pathname === '/playlist';
  const isPathPremium = pathname === '/premium';

  return {
    isPathHome,
    isPathSearch,
    isPathMusic,
    isPathPodcasts,
    isPathPlayist,
    isPathPremium,
  } as const;
};
