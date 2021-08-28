import React, { useState } from "react";
import RecordButton from "./RecordButton/RecordButton";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core/";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Post = () => {
  const [audioURL, setAudioURL] = useState("");

  const createAudioUrl = (blobURL) => {
    setAudioURL(blobURL);
  };

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <RecordButton setAudioURL={createAudioUrl}></RecordButton>)
      <audio src={audioURL} controls="controls" />
    </Card>
  );
};

export default Post;
