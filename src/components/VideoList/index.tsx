import React from 'react';
import { useNavigate } from 'react-router-dom';
import VideoCard from '../VideoCard';
import * as C from './styles';

// Lista de vídeos com os links do YouTube
const videos = [
  {
    title: 'Margareth Menezes Ministra da Cultura do Brasil',
    duration: '1:53',
    thumbnail: 'https://img.youtube.com/vi/sesPGr4BYkM/hqdefault.jpg',
    videoSrc: 'https://www.youtube.com/embed/sesPGr4BYkM',
    interpretation: 'Margareth Menezes',
    text: 'Margareth Menezes fala sobre o Parque Memorial Quilombo dos Palmares',
  },
  {
    title:
      'Handemba Mutana dos Santos - Líder de Responsabilidade Social Corporativa no Brasil - Tiktok',
    duration: '1:20',
    thumbnail: 'https://img.youtube.com/vi/srR3ocr4EcY/hqdefault.jpg',
    videoSrc: 'https://www.youtube.com/embed/srR3ocr4EcY',
    interpretation: 'Handemba Mutana dos Santos',
    text: 'Handemba Mutana dos Santos fala sobre o Parque Memorial Quilombo dos Palmares',
  },
  {
    title: 'João Jorge Rodrigues Presidente da Fundação Cultural Palmares',
    duration: '1:18',
    thumbnail: 'https://img.youtube.com/vi/kEU7XECoaJ4/hqdefault.jpg',
    videoSrc: 'https://www.youtube.com/embed/kEU7XECoaJ4',
    interpretation: 'João Jorge Rodrigues',
    text: 'João Jorge Rodrigues fala da importância do Parque Memorial Quilombo dos Palmares.',
  },
  {
    title: 'Nelson Mendes Diretor',
    duration: '0:45',
    thumbnail: 'https://img.youtube.com/vi/Iku2KVqKVb0/hqdefault.jpg',
    videoSrc: 'https://www.youtube.com/embed/Iku2KVqKVb0',
    interpretation: 'Nelson Mendes Diretor',
    text: 'Nelson Mendes fala do Parque Memorial Quilombo dos Palmares',
  },
  {
    title: 'Flávia Costa - Diretora do DPA',
    duration: '1:48',
    thumbnail: 'https://img.youtube.com/vi/H-0heADzD2Q/hqdefault.jpg',
    videoSrc: 'https://www.youtube.com/embed/H-0heADzD2Q',
    interpretation: 'Flávia Costa',
    text: 'Flávia Costa fala sobre o aparelho cultural Parque Memorial Quilombo dos Palmares sob o olhar do Departamento de Proteção ao Patrimônio Afro brasileiro da Fundação Palmares.',
  },
  {
    title: 'Valdice Gomes',
    duration: '1:06',
    thumbnail: 'https://img.youtube.com/vi/VZqUnoEm758/hqdefault.jpg',
    videoSrc: 'https://www.youtube.com/embed/VZqUnoEm758',
    interpretation: 'Valdice Gomes',
    text: 'Entrevista com Valdice Gomes na Serra da Barriga, sobre o parque Memorial Quilombo dos Palmares',
  },
  {
    title: `Mãe Neide Oya D'Oxum`,
    duration: '2:13',
    thumbnail: 'https://img.youtube.com/vi/2Byj2R0m4n0/hqdefault.jpg',
    videoSrc: 'https://www.youtube.com/embed/2Byj2R0m4n0',
    interpretation: `Mãe Neide Oya D'Oxum`,
    text: 'Entrevista com Mãe Neide na Serra da Barriga sobre ancestralidade',
  },
  {
    title: 'Valdice Gomes',
    duration: '1:11',
    thumbnail: 'https://img.youtube.com/vi/Va6AlND_zCM/hqdefault.jpg',
    videoSrc: 'https://www.youtube.com/embed/Va6AlND_zCM',
    interpretation: 'Valdice Gomes',
    text: 'Valdice Gomes fala sobre o aplicativo e o complemento do sistema de informação implementado na Serra da Barriga',
  },
  {
    title: `Mãe Neide Oya D'Oxum`,
    duration: '2:09',
    thumbnail: 'https://img.youtube.com/vi/-5SvbBB64Y0/hqdefault.jpg',
    videoSrc: 'https://www.youtube.com/embed/-5SvbBB64Y0',
    interpretation: `Mãe Neide Oya D'Oxum`,
    text: 'Entrevista com Mãe Neide na Serra da Barriga, falando sobre a força do Solo Sagrado.',
  },
  // Vídeos adicionais conforme fornecido

  {
    title: 'Espaço Acotirene',
    duration: '1:14',
    thumbnail: 'https://img.youtube.com/vi/17Q_iR_bXvs/hqdefault.jpg',
    videoSrc: 'https://www.youtube.com/embed/17Q_iR_bXvs',
    interpretation: 'Helcias Pereira',
    text: 'Entrevista com Helcias Pereira na Serra da Barriga sobre o Espaço Acotirene.',
  },
  {
    title: 'Muxima de Palmares',
    duration: '0:45',
    thumbnail: 'https://img.youtube.com/vi/Yy5glcnVpb8/hqdefault.jpg',
    videoSrc: 'https://www.youtube.com/embed/Yy5glcnVpb8',
    interpretation: 'Helcias Pereira',
    text: 'Entrevista com Helcias Pereira na Serra da Barriga sobre Muxima de Palmares',
  },
  {
    title: `Mãe Neide Oya D'Oxum`,
    duration: '2:13',
    thumbnail: 'https://img.youtube.com/vi/2Byj2R0m4n0/hqdefault.jpg',
    videoSrc: 'https://www.youtube.com/embed/2Byj2R0m4n0',
    interpretation: 'Mãe Neide',
    text: 'Entrevista com Mãe Neide na Serra da Barriga sobre ancestralidade.',
  },
  {
    title: 'Atalaia de Acaiene',
    duration: '0:42',
    thumbnail: 'https://img.youtube.com/vi/RJNtwzNrdp4/hqdefault.jpg',
    videoSrc: 'https://www.youtube.com/embed/RJNtwzNrdp4',
    interpretation: 'Helcias Pereira',
    text: 'Entrevista com Helcias Pereira na Serra da Barriga sobre Atalaia de Acaiene.',
  },
  {
    title: 'OCAS INDIGENAS',
    duration: '0:47',
    thumbnail: 'https://img.youtube.com/vi/nmCsStmgM5c/hqdefault.jpg',
    videoSrc: 'https://www.youtube.com/embed/nmCsStmgM5c',
    interpretation: 'Helcias Pereira',
    text: 'Entrevista com Helcias Pereira na Serra da Barriga sobre as Ocas .     ',
  },
  {
    title: 'Batucajé ',
    duration: '0:33',
    thumbnail: 'https://img.youtube.com/vi/tyjbheexFYI/hqdefault.jpg',
    videoSrc: 'https://www.youtube.com/embed/tyjbheexFYI',
    interpretation: 'Helcias Pereira',
    text: 'Entrevista com Helcias Pereira na Serra da Barriga sobre o espaço Barucajé.',
  },
  {
    title: 'Atalaia de Acaiuba',
    duration: '1:13',
    thumbnail: 'https://img.youtube.com/vi/ylGU5evOLFE/hqdefault.jpg',
    videoSrc: 'https://www.youtube.com/embed/ylGU5evOLFE',
    interpretation: 'Helcias Pereira',
    text: 'Entrevista com Helcias Pereira na Serra da Barriga sobre Atalaia de Acaiuba.',
  },
  {
    title: 'Helcias - Lagoa encantada do negro',
    duration: '1:21',
    thumbnail: 'https://img.youtube.com/vi/MAgR3SEC8xc/hqdefault.jpg',
    videoSrc: 'https://www.youtube.com/embed/MAgR3SEC8xc',
    interpretation: 'Helcias Pereira',
    text: ' Helcias Pereira fala sobre a Lagoa Encantada dos Negros na Serra da Barriga.',
  },
  {
    title: `Mãe Neide Oya D'Oxum`,
    duration: '2:13',
    thumbnail: 'https://img.youtube.com/vi/2Byj2R0m4n0/hqdefault.jpg',
    videoSrc: 'https://www.youtube.com/embed/2Byj2R0m4n0',
    interpretation: 'Mãe Neide',
    text: 'Entrevista com Mãe Neide na Serra da Barriga sobre ancestralidade.',
  },
  {
    title: 'ONJÓ DE FARINHA',
    duration: '0:43',
    thumbnail: 'https://img.youtube.com/vi/xnTY8AV-ShE/hqdefault.jpg',
    videoSrc: 'https://www.youtube.com/embed/xnTY8AV-ShE',
    interpretation: 'Helcias Pereira',
    text: 'Entrevista com Helcias Pereira na Serra da Barriga sobre Casa de Farinha.',
  },
  {
    title: 'Kúuku Wáana',
    duration: '2:09',
    thumbnail: 'https://img.youtube.com/vi/29uYFwXNhwA/hqdefault.jpg',
    videoSrc: 'https://www.youtube.com/embed/29uYFwXNhwA',
    interpretation: 'Helcias Pereira',
    text: 'Entrevista com Helcias Pereira na Serra da Barriga sobre o espaço Kúuku Wáana.',
  },
  {
    title: 'Atalaia de Toculo',
    duration: '1:05',
    thumbnail: 'https://img.youtube.com/vi/aq3-ERQO6FI/hqdefault.jpg',
    videoSrc: 'https://www.youtube.com/embed/aq3-ERQO6FI',
    interpretation: 'Helcias Pereira',
    text: 'Entrevista com Helcias Pereira na Serra da Barriga, sobre Atalaia de Toculo.',
  },
  {
    title: 'Scott Allen - Arqueologia',
    duration: '5:18',
    thumbnail: 'https://img.youtube.com/vi/ZjJhkcKzddU/hqdefault.jpg',
    videoSrc: 'https://www.youtube.com/embed/ZjJhkcKzddU',
    interpretation: 'Scott Allen',
    text: 'Entrevista com Scott Allen no Museu de História Natural de Alagoas, sobre os achados arqueológicos na Serra da Barriga',
  },
  {
    title: 'Scott Allen - rituais ancestrais',
    duration: '1:12',
    thumbnail: 'https://img.youtube.com/vi/dh_N1J5rP28/hqdefault.jpg',
    videoSrc: 'https://www.youtube.com/embed/dh_N1J5rP28',
    interpretation: 'Scott Allen',
    text: 'Entrevista com Scott Allen no Museu de História Natural de Alagoas que relata aspectos de rituais funerários dos antigos habitantes da Serra da Barriga.',
  },
  {
    title: 'Scott Allen - Atividades lúdicas ancestrais',
    duration: '3:21',
    thumbnail: 'https://img.youtube.com/vi/Luz7FownpLU/hqdefault.jpg',
    videoSrc: 'https://www.youtube.com/embed/Luz7FownpLU',
    interpretation: 'Scott Allen',
    text: 'Entrevista com Scott Allen no Museu de História Natural de Alagoas sobre achados arqueológicos na Serra da Barriga que remetem a possíveis atividades lúdicas ancestrais.',
  },
  {
    title: 'Scott Allen - prospecção arqueológica para o Quilombo dos Palmares',
    duration: '2:12',
    thumbnail: 'https://img.youtube.com/vi/K0aFlD_dPlc/hqdefault.jpg',
    videoSrc: 'https://www.youtube.com/embed/K0aFlD_dPlc',
    interpretation: 'Scott Allen',
    text: 'Entrevista com Scott Allen no Museu de História Natural de Alagoas sobre as prospecções arqueológicas no Quilombo dos Palmares.',
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
