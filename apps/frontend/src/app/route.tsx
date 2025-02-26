import { createBrowserRouter, Outlet } from 'react-router-dom';
import { Layout } from './layout';
import { AllPage } from '../pages/user/all.page';
import { _FULL_ROUTES } from '@spotify-clone/libs/catalysts/routes/routes';

export const router = createBrowserRouter([
  {
    path: _FULL_ROUTES.HOME,
    element: (
      <Layout>
        <AllPage />
      </Layout>
    ),
  },
  {
    path: _FULL_ROUTES.SEARCH,
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
  },
  {
    path: _FULL_ROUTES.MUSIC,
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
  },
  {
    path: _FULL_ROUTES.PODCASTS,
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
  },
  {
    path: _FULL_ROUTES.PLAYLIST,
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
  },
]);
