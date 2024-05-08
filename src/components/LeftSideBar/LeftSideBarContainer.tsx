import LowerSideBar from "./LowerSideBar";
import UpperSideBar from "./UpperSideBar";

const LeftSideBarContainer = () => {
  return (
    <div className="w-[420px] h-[70vh] flex flex-col gap-2">
      <UpperSideBar />
      <LowerSideBar />
    </div>
  );
};

export default LeftSideBarContainer;
