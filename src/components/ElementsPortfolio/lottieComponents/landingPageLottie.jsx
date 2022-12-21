import Lottie from "lottie-react";
import landingPage from "../../../../public/lotties/landingPageLottie.json";
import "../mainPage.css";

const LandingPageLottie = () => {
  return (
    <div className="landingPageLottie">
      <Lottie animationData={landingPage} loop={true} />
    </div>
  );
};

export default LandingPageLottie;
