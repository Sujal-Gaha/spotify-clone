import { createContext, useState, useContext } from "react";
import { Howl } from "howler";

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = (src) => {
    if (audio) {
      audio.stop();
    }
    const newAudio = new Howl({ src });
    setAudio(newAudio);
    newAudio.play();
    setIsPlaying(true);
  };

  const stopAudio = () => {
    if (audio) {
      audio.stop();
      setIsPlaying(false);
    }
  };

  return (
    <AudioContext.Provider value={{ playAudio, stopAudio, isPlaying }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);
