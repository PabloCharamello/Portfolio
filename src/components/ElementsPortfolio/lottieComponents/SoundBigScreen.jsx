import Lottie from "lottie-react";
import soundBigScreen from "../../../../public/lotties/soundBigScreen.json";
import soundBigScreen2 from "../../../../public/lotties/soundBigScreen.json";
import soundBigScreen3 from "../../../../public/lotties/soundBigScreen.json";
import soundBigScreen4 from "../../../../public/lotties/soundBigScreen.json";
import "../mainPage.css";

const SoundBigScreen = () => {
  return (
    <>
      <div className="soundBigScreen1">
        <Lottie animationData={soundBigScreen} loop={true} />
      </div>
      <div className="soundBigScreen2">
        <Lottie animationData={soundBigScreen2} loop={true} />
      </div>
      <div className="soundBigScreen3">
        <Lottie animationData={soundBigScreen3} loop={true} />
      </div>
      <div className="soundBigScreen4">
        <Lottie animationData={soundBigScreen4} loop={true} />
      </div>
    </>
  );
};

export default SoundBigScreen;
