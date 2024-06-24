import React, { useRef, useState, useEffect } from 'react';
import './VideoPlayer.css';
import video from './teste.mp4';

const VideoPlayer = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);
  const [showControls, setShowControls] = useState(true);
  const [currentTime, setCurrentTime] = useState('00:00');
  const [duration, setDuration] = useState('00:00');
  const [isPlaying, setIsPlaying] = useState(false);

  const formatTime = (time) => {
    let seconds = Math.floor(time % 60),
      minutes = Math.floor(time / 60) % 60,
      hours = Math.floor(time / 3600);

    seconds = seconds < 10 ? `0${seconds}` : seconds;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    hours = hours < 10 ? `0${hours}` : hours;

    if (hours === 0) {
      return `${minutes}:${seconds}`;
    }
    return `${hours}:${minutes}:${seconds}`;
  };

  useEffect(() => {
    const hideControls = () => {
      if (!videoRef.current.paused) {
        setShowControls(false);
      }
    };

    const timer = setTimeout(hideControls, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [isPlaying]);

  const handleMouseMove = () => {
    setShowControls(true);
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
      audioRef.current.pause();
    } else {
      videoRef.current.play();
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleReproduzirVideo = () => {
    videoRef.current.style.display = 'block';
    audioRef.current.style.display = 'none';
    audioRef.current.volume = 0;
    videoRef.current.play();
  };

  const handleReproduzirAudio = () => {
    videoRef.current.style.display = 'none';
    audioRef.current.style.display = 'block';
    audioRef.current.play();
  };

  const handleReproduzirAmbos = () => {
    videoRef.current.style.display = 'block';
    audioRef.current.style.display = 'block';
    videoRef.current.play();
    audioRef.current.volume = 1;
  };

  const handleTimeUpdate = () => {
    const currentTime = videoRef.current.currentTime;
    setCurrentTime(formatTime(currentTime));
    const percent = (currentTime / videoRef.current.duration) * 100;
    progressBarRef.current.style.width = `${percent}%`;
  };

  const handleLoadedData = () => {
    setDuration(formatTime(videoRef.current.duration));
  };

  const handleVolumeChange = (e) => {
    videoRef.current.volume = e.target.value;
    audioRef.current.volume = e.target.value;
  };

  return (
    <div className={`container ${showControls ? 'show-controls' : ''}`} onMouseMove={handleMouseMove} ref={containerRef}>
      <div className="wrapper">
        <div className="video-timeline">
          <div className="progress-area">
            <span>{currentTime}</span>
            <div className="progress-bar" ref={progressBarRef}></div>
          </div>
        </div>
        <ul className="video-controls">
          <li className="options left">
            <button className="volume">
              <i className="fa-solid fa-volume-high"></i>
            </button>
            <input type="range" min="0" max="1" step="any" onChange={handleVolumeChange} />
            <div className="video-timer">
              <p className="current-time">{currentTime}</p>
              <p className="separator">/</p>
              <p className="video-duration">{duration}</p>
            </div>
          </li>
          <li className="options center">
            <button className="skip-backward">
              <i className="fas fa-backward"></i>
            </button>
            <button className="play-pause" onClick={handlePlayPause}>
              <i className={`fas fa-${isPlaying ? 'pause' : 'play'}`}></i>
            </button>
            <button className="skip-forward">
              <i className="fas fa-forward"></i>
            </button>
            <button onClick={handleReproduzirVideo}>
              <i className="fas fa-film"></i>
            </button>
            <button onClick={handleReproduzirAudio}>
              <i className="fas fa-headphones"></i>
            </button>
            <div id="controles">
              <button onClick={handleReproduzirAmbos}>Ambos</button>
            </div>
          </li>
        </ul>
      </div>
      <video src={video} height="500" ref={videoRef} onTimeUpdate={handleTimeUpdate} onLoadedData={handleLoadedData}></video>
      <audio id="audio" src="./Audio.MP3" ref={audioRef}></audio>
    </div>
  );
};

export default VideoPlayer;
