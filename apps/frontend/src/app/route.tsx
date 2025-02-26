import { createBrowserRouter } from 'react-router-dom';
import PlaylistBar from '../components/PlaylistBar';
import { homeAllContent } from '@spotify-clone/libs/inerts/home-all-content';
import { Card } from '../components/ui/card';
import Footer from '../components/Footer';
import { Layout } from './layout';

const AllPage = () => {
  return (
    <div className="flex flex-col overflow-y-auto px-5 w-full pt-2 no-scrollbar">
      <PlaylistBar />
      <div className="h-full w-full pt-0 pb-6 flex flex-col gap-8 ">
        {homeAllContent.map((allContent) => {
          return (
            <div key={allContent.id} className="flex flex-col gap-2">
              <div className="w-full flex justify-between items-center px-2">
                <p className="text-2xl text-white font-semibold">
                  {allContent.mainTitle}
                </p>
                <p className="text-sm text-lessFocusColour font-semibold hover:underline hover:text-white ease-in-out duration-200 cursor-pointer">
                  Show all
                </p>
              </div>
              <div className="h-[282px] flex">
                {allContent.content.map((cardContent) => {
                  return (
                    <Card
                      key={cardContent._id}
                      card={cardContent}
                      href={`/genre/${allContent.id}/card/${cardContent._id}`}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
        <Footer />
      </div>
    </div>
  );
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <AllPage />
      </Layout>
    ),
  },
  {
    path: '/about',
    element: <div>About</div>,
  },
]);
