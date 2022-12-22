import Lottie from "lottie-react";
import scrollDown from "../../../../public/lotties/scrollDown.json";
import "../mainPage.css";

const ScrollDown = () => {
  return (
    <div className="scrollDown">
      <Lottie animationData={scrollDown} loop={true} />
    </div>
  );
};

export default ScrollDown;
