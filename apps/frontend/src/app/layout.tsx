import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { useRightSidebarStore } from '../stores/useRightSidebarStore';
import LeftSideBarContainer from '../components/LeftSideBar/LeftSideBarContainer';
import HomePageContentChanger from '../components/ContentChanger/ContentChanger';
import RightSideBarContainer from '../components/RightSideBar/RightSideBarContainer';
import AudioControllerContainer from '../components/AudioControllerContainer';
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
            <LeftSideBarContainer />
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
            {isRightSidebarOpen && <RightSideBarContainer />}
          </div>
          <AudioControllerContainer />
        </>
      )}
    </div>
  );
};
