import React, { useEffect, useRef, useState } from "react";
import * as C from './styles';
import { FaPlay, FaPause } from 'react-icons/fa';
import { useAudioContext } from "../../context/audioContext";

interface AudioPlayerProps {
  src: string;  
  colorTheme: 'green' | 'orange';
  styles?: {
    wrapper?: React.CSSProperties;
    progressBarActive?: React.CSSProperties;
  };
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, colorTheme, styles }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { activeAudio, setActiveAudio } = useAudioContext();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener('loadedmetadata', () => {
        if (audio.duration !== Infinity) {
          setDuration(audio.duration);
        }
      });
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener('play', () => setIsPlaying(true));
      audio.addEventListener('pause', () => setIsPlaying(false));
      return () => {
        audio.removeEventListener('play', () => setIsPlaying(true));
        audio.removeEventListener('pause', () => setIsPlaying(false));
      };
    }
  }, []);

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      setActiveAudio(audioRef.current);
    }
  }, [isPlaying, setActiveAudio]);

  useEffect(() => {
    if (activeAudio  !== audioRef.current) {
      audioRef.current?.pause();
      setIsPlaying(false);
    }
  }, [activeAudio]);

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
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const calculateProgress = (): string => (duration ? `${(currentTime / duration) * 100}%` : '0%');

  return (
    <C.PlayerWrapper style={styles?.wrapper}>
      <audio ref={audioRef} src={src} preload="metadata" />
      <C.PlayButton onClick={togglePlayPause} colorTheme={colorTheme}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </C.PlayButton>
      <C.ProgressBarContainer>
        <C.ProgressBarActive width={calculateProgress()} style={styles?.progressBarActive} />
        <C.ProgressBar
          type="range"
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
