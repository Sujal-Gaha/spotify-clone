"use client";

import AudioControllerContainer from "@/components/AudioControllerContainer";
import "./globals.css";
import LeftSideBarContainer from "@/components/LeftSideBar/LeftSideBarContainer";
import RightSideBarContainer from "@/components/RightSideBar/RightSideBarContainer";
import useRightSideBarStore from "@/stores/RightSideBarStore";
import HomePageContentChanger from "@/components/ContentChanger/ContentChanger";
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
      <body
        className={clsx(
          "h-screen flex flex-col",
          path === "/premium" ? "bg-white" : "bg-black p-2 gap-2"
        )}
      >
        {path === "/premium" ? (
          <>{children}</>
        ) : (
          <>
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
          </>
        )}
      </body>
    </html>
  );
}
