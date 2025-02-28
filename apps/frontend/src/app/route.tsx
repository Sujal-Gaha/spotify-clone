import { createBrowserRouter, Outlet } from 'react-router-dom';
import { SidebarLayout } from './sidebar-layout';
import { AllPage } from '../pages/user/all.page';
import { _FULL_ROUTES } from '@spotify-clone/libs/catalysts';
import { SearchPage } from '../pages/user/search.page';

export const router = createBrowserRouter([
  {
    path: _FULL_ROUTES.HOME,
    element: (
      <SidebarLayout>
        <AllPage />
      </SidebarLayout>
    ),
  },
  {
    path: _FULL_ROUTES.SEARCH,
    element: (
      <SidebarLayout>
        <SearchPage />
      </SidebarLayout>
    ),
  },
  {
    path: _FULL_ROUTES.MUSIC,
    element: (
      <SidebarLayout>
        <Outlet />
      </SidebarLayout>
    ),
  },
  {
    path: _FULL_ROUTES.PODCASTS,
    element: (
      <SidebarLayout>
        <Outlet />
      </SidebarLayout>
    ),
  },
  {
    path: _FULL_ROUTES.PLAYLIST,
    element: (
      <SidebarLayout>
        <Outlet />
      </SidebarLayout>
    ),
  },
]);
