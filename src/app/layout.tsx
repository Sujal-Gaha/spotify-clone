"use client";

import AudioControllerContainer from "@/components/AudioControllerContainer";
import "./globals.css";
import LeftSideBarContainer from "@/components/LeftSideBar/LeftSideBarContainer";
import RightSideBarContainer from "@/components/RightSideBar/RightSideBarContainer";
import useRightSideBarStore from "@/store/RightSideBarStore";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isRightSideBarVisible } = useRightSideBarStore();

  return (
    <html lang="en">
      <body className="p-2 h-screen flex flex-col gap-2">
        <div className="flex gap-2">
          <LeftSideBarContainer />
          {children}
          {isRightSideBarVisible && <RightSideBarContainer />}
        </div>
        <AudioControllerContainer />
      </body>
    </html>
  );
}
