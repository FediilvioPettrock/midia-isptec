import React from 'react';
import { CenterColumn as StyledCenterColumn, PageTitle } from '../styles/CenterColumn';
import LinkButton from './LinkButton';
import Player from './Player2';
import { useState } from 'react';
import VideoPlayer from './VideoPlayer';
import video from './teste.mp4';

const mediaFiles = [
  { src: 'https://stream.mux.com/S1zlotvu400FxqKdGCIfKMx8GAwQ54qum.m3u8', type: 'video', subtitles: 'path/to/subtitles1.vtt' },
  { src: 'teste.mp3', type: 'audio' },
];

const CenterColumn = () => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const goToNextMedia = () => {
    setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % mediaFiles.length);
  };

  const goToPrevMedia = () => {
    setCurrentMediaIndex((prevIndex) => (prevIndex - 1 + mediaFiles.length) % mediaFiles.length);
  };

  return (
    <StyledCenterColumn>
       <Player
        src={mediaFiles[currentMediaIndex].src}
        type={mediaFiles[currentMediaIndex].type}
        subtitles={mediaFiles[currentMediaIndex].subtitles}
      />
      <div className="media-navigation">
        <button onClick={goToPrevMedia}>Previous</button>
        <button onClick={goToNextMedia}>Next</button>
      </div>
      <PageTitle>Welcome to <span>ISP Media Player</span></PageTitle>
      <p>Your favorite place to watch, listen and read!</p>
      <LinkButton to="/login" text="Log in" color="#F4B400" />
      <LinkButton to="/register" text="Create new account" color="#029b16" />
    </StyledCenterColumn>
  );
};

export default CenterColumn;
