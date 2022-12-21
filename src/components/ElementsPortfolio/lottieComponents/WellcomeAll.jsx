import Lottie from "lottie-react";
import Wellcome from "../../../../public/lotties/Wellcome.json";
import "../mainPage.css";

const WellcomeAll = () => {
  return (
    <div className="wellcome-all">
      <Lottie
        animationData={Wellcome}
        loop={true}
        className="landingPageLottie"
      />
    </div>
  );
};

export default WellcomeAll;
