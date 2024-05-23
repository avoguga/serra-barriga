import { useNavigate, useParams } from 'react-router-dom';

import videos from '../../../assets/icons/i_video pagina.png';
import poster from '../../../assets/images/video-poster.png'

import Sidebar from '../Sidebar';
import LowArrow from '../../../components/LowArrowButton';

import * as C from './styles';
import SpaceHeader from '../../../components/SpaceHeader';

import { EspacoData, getEspacoData } from '../../../helpers/Espacos';

const VideosView = () => {
  const navigate = useNavigate();
  const { figureName } = useParams<{ figureName: string }>();
   
  const figureData: EspacoData | undefined = getEspacoData(figureName ?? ''); 
  if (!figureData) {
    return <p>Espaço não encontrado.</p>;
  }
  
  return (
    <C.View>
      <C.Nav>
        <LowArrow onClick={() => navigate(`/historical-figure/${figureName}`)} isActive={true} />
      </C.Nav>
      <C.NavFotter>
        <Sidebar activeSection='VideosView' />
      </C.NavFotter>
      <C.Content>
        <SpaceHeader/>
        <C.InfoText>
          <img
            src={videos}
            alt="ícone de videos"
            style={{
              width: '35px',
              height: '35px',
              marginLeft:'10px'
            }}
          />
          <h2>Vídeos</h2>
          <div></div>
        </C.InfoText>
        <C.AgroupVideo>
          {figureData.videos ? (
            figureData.videos.map((video, index) => (
              <div key={index} onClick={() => navigate(`/historical-figure/${figureName}/VideosView/PlayView`, {
                state: {
                  ...video, // Mantém todas as outras propriedades do vídeo
                  url: video.url.replace('watch?v=', 'embed/'), // Converte a URL para o formato de incorporação
                },
              })}>
                <img
                  src={poster} 
                  alt={`Thumbnail do vídeo ${video.title}`}
                  style={{ cursor: 'pointer', width: '100%', height: 'auto', background:'#FFFF' }}
                />
                <p>{video.title}</p> {/* Exibindo o título do vídeo */}
              </div>
            ))
          ) : (
            <p>Nenhum vídeo disponível.</p>
          )}
        </C.AgroupVideo>
      </C.Content>
    </C.View>
  );
};

export default VideosView;
