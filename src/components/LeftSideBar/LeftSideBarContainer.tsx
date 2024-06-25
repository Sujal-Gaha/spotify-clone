import LowerSideBar from "./Lower/LowerSideBar";
import UpperSideBar from "./Upper/UpperSideBar";

const LeftSideBarContainer = () => {
  return (
    <div className="w-[420px] h-[90vh] flex flex-col gap-2">
      <UpperSideBar />
      <LowerSideBar />
    </div>
  );
};

export default LeftSideBarContainer;
