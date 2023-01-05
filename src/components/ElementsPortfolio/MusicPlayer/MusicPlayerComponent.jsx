import { useState, useRef } from "react";
import song from "./7_MinutosPCh.mp3";
import ControlPanel from "./controls/ControlPanel";
import PlaySong from "../lottieComponents/PlaySong";
import SoundBigScreen from "../lottieComponents/SoundBigScreen";

const MusicPlayerComponent = () => {
  const [percentage, setPercentage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef();

  const play = () => {
    const audio = audioRef.current;
    audio.volume = 0.2;

    if (!isPlaying) {
      setIsPlaying(true);
      audio.play();
    }

    if (isPlaying) {
      setIsPlaying(false);
      audio.pause();
    }
  };

  const getCurrDuration = (e) => {
    const percent = (
      (e.currentTarget.currentTime / e.currentTarget.duration) *
      100
    ).toFixed(2);
    const time = e.currentTarget.currentTime;

    setPercentage(+percent);
    setCurrentTime(time.toFixed(2));
  };

  return (
    <>
      <div className="app-container">
        <audio
          ref={audioRef}
          onTimeUpdate={getCurrDuration}
          autoPlay={false}
          loop={true}
          onLoadedData={(e) => {
            setDuration(e.currentTarget.duration.toFixed(2));
          }}
          src={song}
        ></audio>
        <ControlPanel
          play={play}
          isPlaying={isPlaying}
          duration={duration}
          currentTime={currentTime}
        />
      </div>
      {!isPlaying && <PlaySong />}
      {isPlaying && <SoundBigScreen />}
    </>
  );
};

export default MusicPlayerComponent;
