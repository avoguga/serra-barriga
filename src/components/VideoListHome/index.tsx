import VideoCard from '../VideoCard';
import * as C from './styles';
import { useNavigate } from 'react-router-dom';

// Helper function to extract YouTube thumbnail URL
const getYouTubeThumbnail = (videoUrl: string): string => {
  const videoId = videoUrl.split('/').pop();
  return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : '';
};

const videos = [
  {
    title: 'Scott Allen - Arqueologia',
    duration: '5:18',
    videoSrc: 'https://www.youtube.com/embed/ZjJhkcKzddU',
    interpretation: 'Scott Allen',
    text: 'Entrevista com Scott Allen no Museu de História Natural de Alagoas, sobre os achados arqueológicos na Serra da Barriga',
    
  },
  {
    title: 'Scott Allen - rituais ancestrais',
    duration: '1:12',
    videoSrc: 'https://www.youtube.com/embed/dh_N1J5rP28',
    interpretation: 'Scott Allen',
    text: 'Entrevista com Scott Allen no Museu de História Natural de Alagoas que relata aspectos de rituais funerários dos antigos habitantes da Serra da Barriga.',
    
  },
  {
    title: 'Scott Allen - Atividades lúdicas ancestrais',
    duration: '3:21',
    videoSrc: 'https://www.youtube.com/embed/Luz7FownpLU',
    interpretation: 'Scott Allen',
    text: 'Entrevista com Scott Allen no Museu de História Natural de Alagoas sobre achados arqueológicos na Serra da Barriga que remetem a possíveis atividades lúdicas ancestrais.',
    
  },
  {
    title: 'Scott Allen - prospecção arqueológica para o Quilombo dos Palmares',
    duration: '2:12',
    videoSrc: 'https://www.youtube.com/embed/K0aFlD_dPlc',
    interpretation: 'Scott Allen ',
    text: 'Entrevista com Scott Allen no Museu de História Natural de Alagoas sobre as prospecções arqueológicas no Quilombo dos Palmares.',
    
  },
];

const VideoListHome: React.FC = () => {
  const navigate = useNavigate();
  const handleVideoSelect = (video: {
    videoSrc: string;
    title: string;
    interpretation: string;
    text: string;
  
  }) => {
    navigate('/video-home', { state: video });
  };

  return (
    <C.VideoListContainer>
      {videos.map((video, index) => (
        <VideoCard
          key={index}
          title={video.title}
          duration={video.duration}
          thumbnail={getYouTubeThumbnail(video.videoSrc)}
          videoSrc={video.videoSrc}
          onVideoSelect={() => handleVideoSelect(video)}
        />
      ))}
    </C.VideoListContainer>
  );
};

export default VideoListHome;
