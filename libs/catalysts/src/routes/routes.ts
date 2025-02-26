const ADMIN_PATHS = {
  BASE: '/admin',
  DASHBOARD: 'dashboard',
};

const USER_PATHS = {
  BASE: '/',
  SEARCH: 'search',
  MUSIC: 'music',
  PODCASTS: 'podcasts',
  PLAYLIST: 'playlist',
  PREMIUM: 'premium',
};

export const _ROUTER_NESTED_PATHS = {
  ADMIN: {
    BASE: ADMIN_PATHS.BASE,
    DASHBOARD: ADMIN_PATHS.DASHBOARD,
  },
  USER: {
    BASE: USER_PATHS.BASE,
    SEARCH: USER_PATHS.SEARCH,
    MUSIC: USER_PATHS.MUSIC,
    PODCASTS: USER_PATHS.PODCASTS,
    PLAYLIST: USER_PATHS.PLAYLIST,
    PREMIUM: USER_PATHS.PREMIUM,
  },
};

const createFullRoutes = () => {
  return {
    HOME: _ROUTER_NESTED_PATHS.USER.BASE,
    SEARCH: `${_ROUTER_NESTED_PATHS.USER.BASE}/${_ROUTER_NESTED_PATHS.USER.SEARCH}`,
    MUSIC: `${_ROUTER_NESTED_PATHS.USER.BASE}/${_ROUTER_NESTED_PATHS.USER.MUSIC}`,
    PODCASTS: `${_ROUTER_NESTED_PATHS.USER.BASE}/${_ROUTER_NESTED_PATHS.USER.PODCASTS}`,
    PLAYLIST: `${_ROUTER_NESTED_PATHS.USER.BASE}/${_ROUTER_NESTED_PATHS.USER.PLAYLIST}`,
    PREMIUM: `${_ROUTER_NESTED_PATHS.USER.BASE}/${_ROUTER_NESTED_PATHS.USER.PREMIUM}`,
  };
};

export const _FULL_ROUTES = createFullRoutes();
