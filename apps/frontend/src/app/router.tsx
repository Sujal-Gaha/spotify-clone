import { createBrowserRouter, Outlet } from 'react-router-dom';
import { SidebarLayout } from './sidebar-layout';
import { AllPage } from '../pages/user/all.page';
import { _FULL_ROUTES } from '@spotify-clone/libs/catalysts';
import { SearchPage } from '../pages/user/search.page';
import { PodcastsPage } from '../pages/user/podcasts.page';
import { PremiumPage } from '../pages/user/premium.page';
import { MusicPage } from '../pages/user/music.page';
import { GenrePage } from '../pages/user/genre.page';
import { LoginPage } from '../pages/user/login.page';
import { RegisterPage } from '../pages/user/register.page';
import { ForgotPasswordPage } from '../pages/user/forgot-password.page';

export const router = createBrowserRouter([
  {
    path: '',
    element: (
      <SidebarLayout>
        <Outlet />
      </SidebarLayout>
    ),
    children: [
      {
        path: _FULL_ROUTES.HOME,
        element: <AllPage />,
      },
      {
        path: _FULL_ROUTES.SEARCH,
        element: <SearchPage />,
      },
      {
        path: _FULL_ROUTES.PODCASTS,
        element: <PodcastsPage />,
      },
      {
        path: _FULL_ROUTES.MUSIC,
        element: <MusicPage />,
      },
      {
        path: `${_FULL_ROUTES.GENRE}/:genreId/card/:cardId`,
        element: <GenrePage />,
      },
    ],
  },

  {
    path: _FULL_ROUTES.LOGIN,
    element: <LoginPage />,
  },
  {
    path: _FULL_ROUTES.REGISTER,
    element: <RegisterPage />,
  },
  {
    path: _FULL_ROUTES.FORGOT_PASSWORD,
    element: <ForgotPasswordPage />,
  },

  {
    path: _FULL_ROUTES.PREMIUM,
    element: <PremiumPage />,
  },
]);
