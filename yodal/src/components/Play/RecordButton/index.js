import React, { useState } from "react";
import MicRecorder from "mic-recorder-to-mp3";

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

const RecordButton = ({ setAudioURL }) => {
  const [recordState, setRecordState] = useState({
    isRecording: false,
    blobURL: "",
    isBlocked: false,
  });

  const startRecording = () => {
    if (recordState.isBlocked) {
      console.log("Permission Denied");
    } else {
      Mp3Recorder.start()
        .then(() => {
          setRecordState({ isRecording: true });
        })
        .catch(e => console.error(e));
    }
  };

  const stopRecording = () => {
    Mp3Recorder.stop()
      .getMp3()
      .then(([buffer, blob]) => {
        console.log(blob);
        console.log(buffer);
        const blobURL = URL.createObjectURL(blob);
        setAudioURL(blobURL);
        console.log(blobURL);
        setRecordState({ blobURL, isRecording: false });
        console.log(blobURL);
      })
      .catch(e => console.log(e));
  };
  console.log(recordState);

  return (
    <div>
      <header>
        <button onClick={startRecording} disabled={recordState.isRecording}>
          Record
        </button>
        <button onClick={stopRecording} disabled={!recordState.isRecording}>
          Stop
        </button>
      </header>
    </div>
  );
};

export default RecordButton;
