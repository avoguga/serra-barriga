import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AudioContextType {
  activeAudio: HTMLAudioElement | null;
  setActiveAudio: (audio: HTMLAudioElement | null) => void;
}
interface AudioProviderProps {
  children: ReactNode;
}
const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const useAudioContext = () => {
  const context = useContext(AudioContext);
  if (!context) throw new Error("useAudioContext must be used within an AudioProvider");
  return context;
}

export const AudioProvider: React.FC<AudioProviderProps> = ({ children }) => {
  const [activeAudio, setActiveAudio] = useState<HTMLAudioElement | null>(null);

  return (
    <AudioContext.Provider value={{ activeAudio, setActiveAudio }}>
      {children}
    </AudioContext.Provider>
  );
};
