import Navbar from "@/components/Navbar";
import HomePageContentChanger from "@/components/HomePageContentChanger";
import HomePageContainerAll from "@/components/HomePageContainerAll";

export default function Home() {
  return (
    <div className="w-[1048px] h-full bg-sectionColour rounded-lg flex flex-col items-center">
      <Navbar />
      <HomePageContentChanger />
      <HomePageContainerAll />
    </div>
  );
}
