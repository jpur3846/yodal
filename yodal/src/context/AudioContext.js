import { createContext, useState, useContext } from "react";

const AudioContext = createContext({
  audioURL: "",
  setAudioURL: () => {},
});

export function AudioProvider({ children }) {
  const [audioURL, setAudioURL] = useState("");
  return (
    <AudioContext.Provider value={{ audioURL, setAudioURL }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const { audioURL, setAudioURL } = useContext(AudioContext);
  return { audioURL, setAudioURL };
}

export default AudioContext;

// export function ModalProvider({ children }) {
//   const [isOpen, setIsOpen] = React.useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     <ModalContext.Provider value={{ isOpen, toggle }}>
//       {children}
//     </ModalContext.Provider>
//   );
// }

// export default ModalContext;
