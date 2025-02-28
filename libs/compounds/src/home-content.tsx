import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';
import { TContentData } from '@spotify-clone/libs/compositions';

const contentData: TContentData[] = [
  {
    id: 0,
    title: 'All',
    path: '/',
  },
  {
    id: 1,
    title: 'Music',
    path: '/music',
  },
  {
    id: 2,
    title: 'Podcasts',
    path: '/podcasts',
  },
];

export const HomePageContentChanger = () => {
  const { pathname } = useLocation();

  return (
    <div className="w-full h-14 flex gap-2 text-white text-sm px-8 font-medium pt-2">
      {contentData.map((content) => (
        <Link
          key={content.id}
          className={clsx(
            'h-8 py-1 px-3 rounded-2xl flex justify-center items-center',
            pathname === content.path
              ? 'bg-white text-appBlack'
              : 'bg-smallerSectionColour text-white hover:bg-hoverSmallerSectionColour ease-in-out duration-500'
          )}
          to={content.path}
        >
          <span>{content.title}</span>
        </Link>
      ))}
    </div>
  );
};
