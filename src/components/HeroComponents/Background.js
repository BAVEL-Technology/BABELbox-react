import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
const Background = (props) => {
  return (
    <div className="grid grid-cols-12 h-full pt-12 z-0">
      <LeftSide />
      <div className="col-span-6 flex flex-col items-center space-y-24">
      </div>
      <RightSide />
    </div>
  );
};

export default Background;
