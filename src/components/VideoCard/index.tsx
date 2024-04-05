import * as C from './styles'

interface VideoCardProps {
    title: string;
    duration: string;
    thumbnail: string;
    videoSrc: string;
    onVideoSelect: (video: {
      title: string;
      duration: string;
      thumbnail: string;
      videoSrc: string;
    }) => void;
  }
  
  const VideoCard: React.FC<VideoCardProps> = ({
    title,
    duration,
    thumbnail,
    videoSrc,
    onVideoSelect
  }) => {
    return (
      <C.VideoCardContainer onClick={() => onVideoSelect({
        title,
        duration,
        thumbnail,
        videoSrc
      })}>
        <C.VideoThumbnail src={thumbnail} alt={title} />
        <C.VideoTitle>{title}</C.VideoTitle>
        <C.VideoDuration>{duration}</C.VideoDuration>
      </C.VideoCardContainer>
    );
  };
  
  export default VideoCard;
  