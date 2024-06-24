// src/components/Player.js
import React, { useRef, useState } from 'react';
import './Player.css';
import video from './teste.mp4';
import video1 from './teste1.mp4';
//import video2 from './teste1.mp4';
// import audio1 from './audio1.mp3';
// import audio2 from './audio2.mp3';
import { FaPlay } from "react-icons/fa";
import { IoPlayBack } from "react-icons/io5";
import { IoPlayForward } from "react-icons/io5";
import { FaPause } from "react-icons/fa";
import { BsFullscreen } from "react-icons/bs";
import { ImVolumeMute2 } from "react-icons/im";
import { ImVolumeMedium } from "react-icons/im";
import { FaVideoSlash } from "react-icons/fa";import { FaVideo } from "react-icons/fa";
import { RiSurroundSoundFill } from "react-icons/ri";
import { IoPlaySkipBack } from "react-icons/io5";
import { IoPlaySkipForward } from "react-icons/io5";

const Player = ({ src, type, subtitles }) => {
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const mediaList = type === 'video' ? [video, video1] : [];

  const togglePlay = () => {
    const player = playerRef.current;
    if (isPlaying) {
      player.pause();
    } else {
      player.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
    playerRef.current.volume = event.target.value;
  };

  const skip = (seconds) => {
    playerRef.current.currentTime += seconds;
  };

  const toggleFullScreen = () => {
    if (!isFullScreen) {
      playerRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setIsFullScreen(!isFullScreen);
  };

  const toggleAudio = () => {
    const player = playerRef.current;
    player.muted = audioEnabled;
    setAudioEnabled(!audioEnabled);
  };

  const toggleVideo = () => {
    setVideoEnabled(!videoEnabled);
  };

  const enableBoth = () => {
    const player = playerRef.current;
    player.muted = false;
    setAudioEnabled(true);
    setVideoEnabled(true);
  };

  const handleProgressChange = (event) => {
    const player = playerRef.current;
    const newProgress = event.target.value;
    player.currentTime = (player.duration / 100) * newProgress;
    setProgress(newProgress);
  };

  const updateProgress = () => {
    const player = playerRef.current;
    const newProgress = (player.currentTime / player.duration) * 100;
    setProgress(newProgress);
  };

  const nextMedia = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaList.length);
    setIsPlaying(false);
    setProgress(0);
  };

  const prevMedia = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + mediaList.length) % mediaList.length);
    setIsPlaying(false);
    setProgress(0);
  };

  return (
    <div className="player-container">
      <div className="player">
        {type === 'video' ? (
          <video
            ref={playerRef}
            src={mediaList[currentIndex]}
            className="player-media"
            style={{ display: videoEnabled ? 'block' : 'none' }}
            onTimeUpdate={updateProgress}
          ></video>
        ) : (
          <audio ref={playerRef} src={src} className="player-media" onTimeUpdate={updateProgress} />
        )}
      </div>
      <div className="controls">
        <div className='progress-space'>
          <input className='progress-item' type="range" min="0" max="100" value={progress} onChange={handleProgressChange} />
        </div>
        <div className='controls-space'>
          <div>
            <button onClick={togglePlay}>{isPlaying ? <FaPause /> : <FaPlay />}</button>
            <button onClick={prevMedia}><IoPlaySkipBack /></button>
            <button onClick={() => skip(-10)}><IoPlayBack /></button>
            <button onClick={() => skip(10)}><IoPlayForward /></button>
            <button onClick={nextMedia}><IoPlaySkipForward /></button>
          </div>
          <div>
            <input type="range" min="0" max="1" step="0.1" value={volume} onChange={handleVolumeChange} />
            <button onClick={toggleAudio}>{audioEnabled ? <ImVolumeMedium /> : <ImVolumeMute2 />}</button>
            <button onClick={toggleVideo}>{videoEnabled ? <FaVideo /> : <FaVideoSlash /> }</button>
            <button onClick={enableBoth}><RiSurroundSoundFill /></button>
            <button onClick={toggleFullScreen}>{isFullScreen ? 'Exit Fullscreen' : <BsFullscreen />}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
