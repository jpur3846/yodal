import { createContext, useState, useContext } from "react";

const AudioContext = createContext({
  currentAudioURL: "",
  setAudioURL: () => {},
  audios: [],
  setAudios: () => {},
  isPlaying: false,
  setIsPlaying: () => {},
});

export function AudioProvider({ children }) {
  const [currentAudioURL, setCurrentAudioURL] = useState("");
  const [audios, setAudios] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <AudioContext.Provider
      value={{
        currentAudioURL,
        setCurrentAudioURL,
        audios,
        setAudios,
        isPlaying,
        setIsPlaying,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export function usePlaying() {
  const { isPlaying, setIsPlaying } = useContext(AudioContext);
  return { isPlaying, setIsPlaying };
}

export function useAudio() {
  const { audios, setAudios } = useContext(AudioContext);
  return { audios, setAudios };
}

export function useCurrentAudio() {
  const { currentAudioURL, setCurrentAudioURL } = useContext(AudioContext);
  return { currentAudioURL, setCurrentAudioURL };
}

export default AudioContext;
