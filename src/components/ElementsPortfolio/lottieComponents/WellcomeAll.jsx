import Lottie from "lottie-react";
import wellcome from "../../../../public/lotties/wellcome.json";
import "../mainPage.css";

const WellcomeAll = () => {
  return (
    <div className="wellcome-all">
      <Lottie
        animationData={wellcome}
        loop={true}
        className="landingPageLottie"
      />
    </div>
  );
};

export default WellcomeAll;
