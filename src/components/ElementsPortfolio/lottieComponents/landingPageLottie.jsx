import Lottie from "lottie-react";
import landingPage from "../../../../public/lotties/landingPageLottie.json";
import "../mainPage.css";
import { FaArrowAltCircleRight } from "react-icons/fa";

const LandingPageLottie = () => {
  return (
    <>
      <div className="scrollDownLateral">
        <h1 className="scrollDownLateralh1">
          Deslízate en el lateral <FaArrowAltCircleRight className="arrow" />
        </h1>{" "}
      </div>
      <div className="landingPageLottie">
        <Lottie animationData={landingPage} loop={true} />
      </div>
    </>
  );
};

export default LandingPageLottie;
