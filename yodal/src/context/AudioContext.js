import { createContext, useState, useContext } from "react";

const AudioContext = createContext({
  currentAudioURL: "",
  setAudioURL: () => {},
  audios: [],
  setAudios: () => {},
});

/*
{
  audioURL: "blob:dsfsdfsomething",
  name: ["Wilson Hou", "Jack Purdon", "Raghav Ramanathan", "Jarvis Wang"][Math.floor(Math.random() * 4)],
  description: "I'm feeling kinda blue honestly."
  id: uuid()
}
*/

export function AudioProvider({ children }) {
  const [currentAudioURL, setCurrentAudioURL] = useState("");
  const [audios, setAudios] = useState([]);
  return (
    <AudioContext.Provider
      value={{ currentAudioURL, setCurrentAudioURL, audios, setAudios }}
    >
      {children}
    </AudioContext.Provider>
  );
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
