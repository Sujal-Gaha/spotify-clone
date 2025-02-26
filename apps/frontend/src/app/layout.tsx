import clsx from 'clsx';
import { ReactNode } from 'react';
import { useRightSidebarStore } from '../stores/useRightSidebarStore.flask';
import {
  LeftSidebarContainer,
  HomePageContentChanger,
  RightSidebar,
  AudioController,
} from '@spotify-clone/libs/compounds';
import { Navbar } from '@spotify-clone/libs/crystals/navbar.crystal';
import { usePathState } from '@spotify-clone/libs/catalysts/utils/usePathState';

export const Layout = ({ children }: { children: ReactNode }) => {
  const { isPathPremium } = usePathState();
  const isContentTabsVisible = false;

  const { isRightSidebarOpen } = useRightSidebarStore();

  return (
    <div className={clsx('h-screen flex flex-col', isPathPremium ? 'bg-white' : 'bg-black p-2 gap-2')}>
      {isPathPremium ? (
        children
      ) : (
        <>
          <div className="flex gap-2">
            <LeftSidebarContainer />
            <div
              className={clsx(
                'h-[90vh] bg-sectionColour rounded-lg flex flex-col items-center',
                isRightSidebarOpen ? 'w-[1048px]' : 'w-full'
              )}
            >
              <Navbar />
              {isContentTabsVisible ? <HomePageContentChanger /> : null}
              {children}
            </div>
            {isRightSidebarOpen && <RightSidebar />}
          </div>
          <AudioController />
        </>
      )}
    </div>
  );
};
