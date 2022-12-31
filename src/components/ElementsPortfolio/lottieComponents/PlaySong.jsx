import Lottie from "lottie-react";
import playSong from "../../../../public/lotties/playSong.json";

import "../mainPage.css";

const PlaySong = () => {
  return (
    <>
      <div className="play-song">
        <Lottie animationData={playSong} loop={true} />
      </div>
    </>
  );
};

export default PlaySong;
