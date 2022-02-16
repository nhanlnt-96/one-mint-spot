import React from "react";
import {Player, BigPlayButton, LoadingSpinner} from "video-react";

import "../../../../node_modules/video-react/dist/video-react.css";

export const VideoPlayer = ({
                              videoUrl,
                              imgIntro
                            }) => {
  return (
    <Player
      playsInline
      poster={imgIntro}
      src={videoUrl}
      width="100%"
      height="100%"
    >
      <BigPlayButton position="center"/>
      <LoadingSpinner/>
    </Player>
  );
};