import AudioController from "@/components/AudioController";
import "./globals.css";
import LeftSideBarContainer from "@/components/LeftSideBar/LeftSideBarContainer";
import RightSideBarContainer from "@/components/RightSideBar/RightSideBarContainer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="p-2 h-screen flex flex-col gap-2">
        <div className="flex gap-2">
          <LeftSideBarContainer />
          {children}
          <RightSideBarContainer />
        </div>
        <div>
          <AudioController />
        </div>
      </body>
    </html>
  );
}
