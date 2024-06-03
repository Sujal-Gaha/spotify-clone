"use client";

import AudioControllerContainer from "@/components/AudioControllerContainer";
import "./globals.css";
import LeftSideBarContainer from "@/components/LeftSideBar/LeftSideBarContainer";
import RightSideBarContainer from "@/components/RightSideBar/RightSideBarContainer";
import useRightSideBarStore from "@/store/RightSideBarStore";
import HomePageContentChanger from "@/components/HomePageContentChanger";
import clsx from "clsx";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isRightSideBarVisible } = useRightSideBarStore();

  const path = usePathname();

  return (
    <html lang="en">
      <body className="p-2 h-screen flex flex-col gap-2">
        <div className="flex gap-2">
          <LeftSideBarContainer />
          <div
            className={clsx(
              "h-[90vh] bg-sectionColour rounded-lg flex flex-col items-center",
              isRightSideBarVisible ? "w-[1048px]" : "w-full"
            )}
          >
            <Navbar />
            {(() => {
              switch (path) {
                case "/":
                  return <HomePageContentChanger />;
                case "/music":
                  return <HomePageContentChanger />;
                case "/podcasts":
                  return <HomePageContentChanger />;
                default:
                  return null;
              }
            })()}
            {children}
          </div>
          {isRightSideBarVisible && <RightSideBarContainer />}
        </div>
        <AudioControllerContainer />
      </body>
    </html>
  );
}
