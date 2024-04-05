
import VideoCard from '../VideoCard';
import * as C from './styles'
import video1 from  '../../assets/Captura de tela 2024-04-05 161754.png'
import exemplo from  '../../assets/exemplo.mp4'
import { useNavigate } from 'react-router-dom';



const videos = [
    {
      title: 'Titulo do vídeo 1',
      duration: '1:41',
      thumbnail: video1,
      videoSrc: exemplo,
      interpretation: 'Nome do intérprete',
      text: 'Descrição do vídeo',
      trilha:'exemplo'
    },
   
  ];
  
  const VideoList: React.FC = () => {
    const navigate = useNavigate();
    const handleVideoSelect = (video: {
        videoSrc: string;
        title: string;
        interpretation: string;
        text: string;
        trilha: string;
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