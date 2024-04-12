import React, { useEffect, useRef, useState } from "react";
import * as C from './styles';
import { FaPlay, FaPause } from 'react-icons/fa';

interface AudioPlayerProps {
  src: string;  
  colorTheme: 'green' | 'orange';
  styles?: {
    wrapper?: React.CSSProperties;
    progressBarActive?: React.CSSProperties;
  };
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, styles, colorTheme }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener('loadedmetadata', () => {
        setDuration(audio.duration);
      });
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
      audio.addEventListener('play', handlePlay);
      audio.addEventListener('pause', handlePause);
      return () => {
        audio.removeEventListener('play', handlePlay);
        audio.removeEventListener('pause', handlePause);
      };
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener('timeupdate', () => {
        setCurrentTime(audio.currentTime);
      });
    }
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const calculateProgress = () => (duration ? `${(currentTime / duration) * 100}%` : '0%');

  return (
    <C.PlayerWrapper style={styles?.wrapper}>
      <audio ref={audioRef} src={src} preload="metadata" />
      <C.PlayButton onClick={togglePlayPause} colorTheme={colorTheme}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </C.PlayButton>
      <C.ProgressBarContainer>
        <C.ProgressBarActive width={calculateProgress()} style={styles?.progressBarActive} />
        <C.ProgressBar
          value={currentTime}
          max={duration}
          onChange={handleSliderChange}
    colorTheme={colorTheme}
        />
      </C.ProgressBarContainer>
    </C.PlayerWrapper>
  );
};

export default AudioPlayer;
