import React, { useEffect, useRef, useState } from "react";
import * as  C from './styles'
import { FaPlay, FaPause } from 'react-icons/fa';
import nattan from '../../assets/nattan.mp3'

const AudioPlayer: React.FC = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        // Assegura-se de que audioRef.current não é nulo antes de acessar .duration
        setDuration(audioRef.current?.duration ?? 0);
    }, [audioRef]);

    useEffect(() => {
        // Verifica se o áudio está tocando
        const handlePlay = () => setIsPlaying(true);
        const handlePause = () => setIsPlaying(false);

        if (audioRef.current) {
            audioRef.current.addEventListener('play', handlePlay);
            audioRef.current.addEventListener('pause', handlePause);
        }

        // Remove os event listeners no cleanup
        return () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener('play', handlePlay);
                audioRef.current.removeEventListener('pause', handlePause);
            }
        };
    }, []);

    useEffect(() => {
        // Atualiza o estado de currentTime quando o evento onTimeUpdate ocorrer
        const audio = audioRef.current;

        const setAudioTime = () => setCurrentTime(audio?.currentTime ?? 0);

        audio?.addEventListener('timeupdate', setAudioTime);

        return () => {
            audio?.removeEventListener('timeupdate', setAudioTime);
        };
    }, []);

    const togglePlayPause = () => {
        // Assegura-se de que audioRef.current não é nulo antes de chamar métodos .play() ou .pause()
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const calculateProgress = () => {
        if (duration) {
            return (currentTime / duration) * 100 + '%';
        }
        return '0%';
    };

    return (
        <C.PlayerWrapper>
            <audio
                ref={audioRef}
                src={nattan}
                preload="metadata"
            />
            <C.PlayButton onClick={togglePlayPause}>
                {isPlaying ? <FaPause /> : <FaPlay />}
            </C.PlayButton>
            <C.ProgressBarContainer>
                <C.ProgressBarActive width={calculateProgress()} />
                <C.ProgressBar
                    type="range"
                    value={currentTime}
                    max={duration}
                    onChange={(e) => {
                        const time = Number(e.target.value);
                        // Verifica se audioRef.current não é nulo antes de definir o currentTime
                        if (audioRef.current) {
                            audioRef.current.currentTime = time;
                        }
                        setCurrentTime(time);
                    }}
                />
            </C.ProgressBarContainer>
            {/* Outros elementos do player */}
        </C.PlayerWrapper>
    );
};

export default AudioPlayer;
