import React from 'react';
import { useNavigate } from 'react-router-dom';
import VideoCard from '../VideoCard';
import * as C from './styles';

// Lista de vídeos com os links do YouTube
const videos = [
  {
    title: 'Margareth Menezes Ministra da Cultura do Brasil'    ,
    duration: '1:53',
    thumbnail: 'https://img.youtube.com/vi/sesPGr4BYkM/hqdefault.jpg',
    videoSrc: 'https://www.youtube.com/embed/sesPGr4BYkM',
    interpretation: 'Margareth Menezes',
    text: 'Margareth Menezes fala sobre o Parque Memorial Quilombo dos Palmares',

  },
  {
    title: 'João Jorge Rodrigues Presidente da Fundação Cultural Palmares',
    duration: '1:18',
    thumbnail: 'https://img.youtube.com/vi/kEU7XECoaJ4/hqdefault.jpg',
    videoSrc: 'https://www.youtube.com/embed/kEU7XECoaJ4',
    interpretation: 'João Jorge Rodrigues  ',
    text:' João Jorge Rodrigues fala da importância do Parque Memorial Quilombo dos Palmares.',

  },
  {
    title: 'Nelson Mendes Diretor',
    duration: '0:45', // Insira a duração do terceiro vídeo, se disponível
    thumbnail: 'https://img.youtube.com/vi/Iku2KVqKVb0/hqdefault.jpg',
    videoSrc: 'https://www.youtube.com/embed/Iku2KVqKVb0',
    interpretation: 'Nelson Mendes Diretor',
    text: 'Nelson Mendes fala do Parque Memorial Quilombo dos Palmares',

  },
  {
    title: 'Flávia Costa - Diretora do DPA',
    duration: '1:48', // Insira a duração do quarto vídeo, se disponível
    thumbnail: 'https://img.youtube.com/vi/H-0heADzD2Q/hqdefault.jpg',
    videoSrc: 'https://www.youtube.com/embed/H-0heADzD2Q',
    interpretation: 'Flávia Costa',
    text: 'Flávia Costa fala sobre o aparelho cultural Parque Memorial Quilombo dos Palmares sob o olhar do Departamento de Proteção ao Patrimônio Afro brasileiro da Fundação Palmares.',

  },
  {
    title: 'Valdice Gomes',
    duration: '1:06', // Insira a duração do quinto vídeo, se disponível
    thumbnail: 'https://img.youtube.com/vi/VZqUnoEm758/hqdefault.jpg',
    videoSrc: 'https://www.youtube.com/embed/VZqUnoEm758',
    interpretation: 'Valdice Gomes',
    text: 'Entrevista com Valdice Gomes na Serra da Barriga, sobre o parque Memorial Quilombo dos Palmares',

  },
  {
    title: `Mãe Neide Oya D'Oxum`,
    duration: '2:13', // Insira a duração do sexto vídeo, se disponível
    thumbnail: 'https://img.youtube.com/vi/2Byj2R0m4n0/hqdefault.jpg',
    videoSrc: 'https://www.youtube.com/embed/2Byj2R0m4n0',
    interpretation: `Mãe Neide Oya D'Oxum`,
    text: 'Entrevista com Mãe Neide na Serra da Barriga sobre ancestralidade',

  },
  {
    title: 'Valdice Gomes',
    duration: '1:11', // Insira a duração do sétimo vídeo, se disponível
    thumbnail: 'https://img.youtube.com/vi/Va6AlND_zCM/hqdefault.jpg',
    videoSrc: 'https://www.youtube.com/embed/Va6AlND_zCM',
    interpretation: 'Valdice Gomes',
    text: 'Valdice Gomes fala sobre o aplicativo e o complemento do sistema de informação implementado na Serra da Barriga',

  },
  {
    title: `Mãe Neide Oya D'Oxum`,
    duration: '2:09', // Insira a duração do oitavo vídeo, se disponível
    thumbnail: 'https://img.youtube.com/vi/-5SvbBB64Y0/hqdefault.jpg',
    videoSrc: 'https://www.youtube.com/embed/-5SvbBB64Y0',
    interpretation: `Mãe Neide Oya D'Oxum`,
    text: 'Entrevista com Mãe Neide na Serra da Barriga, falando sobre a força do Solo Sagrado.',

  },
];

const VideoList: React.FC = () => {
  const navigate = useNavigate();

  const handleVideoSelect = (video: {
    videoSrc: string;
    title: string;
    interpretation: string;
    text: string;
   
  }) => {
    navigate('/video', { state: video });
  };

  return (
    <C.VideoListContainer>
      {videos.map((video, index) => (
        <VideoCard
          key={index}
          title={video.title}
          duration={video.duration}
          thumbnail={video.thumbnail}
          videoSrc={video.videoSrc}
          onVideoSelect={() => handleVideoSelect(video)}
        />
      ))}
    </C.VideoListContainer>
  );
};

export default VideoList;
