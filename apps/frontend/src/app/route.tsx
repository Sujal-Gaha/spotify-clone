import { createBrowserRouter } from 'react-router-dom';
import { SidebarLayout } from './sidebar-layout';
import { AllPage } from '../pages/user/all.page';
import { _FULL_ROUTES } from '@spotify-clone/libs/catalysts';
import { SearchPage } from '../pages/user/search.page';
import { PodcastsPage } from '../pages/user/podcasts.page';
import { PremiumPage } from '../pages/user/premium.page';
import { MusicPage } from '../pages/user/music.page';
import { GenrePage } from '../pages/user/genre.page';

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
    path: _FULL_ROUTES.PODCASTS,
    element: (
      <SidebarLayout>
        <PodcastsPage />
      </SidebarLayout>
    ),
  },
  {
    path: _FULL_ROUTES.MUSIC,
    element: (
      <SidebarLayout>
        <MusicPage />
      </SidebarLayout>
    ),
  },
  {
    path: `${_FULL_ROUTES.GENRE}/:genreId/card/:cardId`,
    element: (
      <SidebarLayout>
        <GenrePage />
      </SidebarLayout>
    ),
  },

  {
    path: _FULL_ROUTES.PREMIUM,
    element: <PremiumPage />,
  },
]);
