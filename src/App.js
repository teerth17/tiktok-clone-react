import logo from "./logo.svg";
import "./App.css";
import videoMetaData from "./metadata/videos.json";
import Video from "./components/Video";
import React, { useState, useRef } from "react";

function App() {
  const videos = videoMetaData;
  return (
    <div className="app">
      <div className="container">
        {videos.map((video, index) => {
          return (
            <Video
              key={index}
              channel={video.channel}
              url={video.url}
              description={video.description}
              song={video.song}
              likes={video.likes}
              messages={98}
              shares={48}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
