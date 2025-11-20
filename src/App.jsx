import { useEffect, useRef, useState } from "react";

import bgMusic from "./audio/dark_fantasy.mp3";

import HomePage from "./pages/HomePage";
import HeroPage from "./pages/HeroPage";

const App = () => {
  const [openSystem, setOpenSystem] = useState(false);
  const [isPlay, setIsPlay] = useState(null);
  const [isSound, setIsSound] = useState(true);
  const musicRef = useRef(null);

  useEffect(() => {
    if (musicRef.current) {
      musicRef.current.loop = true;
      musicRef.current.volume = 0.3;
      if (isPlay) {
        musicRef.current.play();
      } else {
        musicRef.current.pause();
      }
    }
  }, [isPlay]);

  function toggleMusic() {
    setIsPlay(!isPlay);
  }
  function homeMusic() {
    setIsPlay(true);
    setOpenSystem(true);
  }

  function toggleSound() {
    setIsSound(!isSound);
  }

  return (
    <main>
      {openSystem ? (
        <HeroPage
          isPlay={isPlay}
          toggleMusic={toggleMusic}
          toggleSound={toggleSound}
          isSound={isSound}
        />
      ) : (
        <HomePage setOpenSystem={setOpenSystem} homeMusic={homeMusic} />
      )}
      <audio ref={musicRef} src={bgMusic} />
    </main>
  );
};

export default App;
