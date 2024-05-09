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
      <body className="p-2 h-screen flex gap-2">
        <LeftSideBarContainer />
        {children}
        <RightSideBarContainer />
      </body>
    </html>
  );
}
