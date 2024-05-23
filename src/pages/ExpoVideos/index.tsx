import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';

import tiktok from '../../assets/logo.png';
import { Icons } from '../../helpers/icons';
import '@google/model-viewer';



import Video from '../../assets/icons/i_video pagina.png';


import { useNavigate } from 'react-router-dom';
import seta from '../../assets/seta voltar e abaixo - branco.svg';


import * as C from './styles';

import VideoListHome from '../../components/VideoListHome';



const ExpoVideosHome = () => {
  const ExpoIcon = Icons['Expo'];

  const navigate = useNavigate();


  return (
    <WatermarkWrapper>
      <div
        style={{
          backgroundColor: 'rgb(214, 107, 0)',
          height: '200vh',
          width: '100vw',
          display: 'flex',
          justifyContent:'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img
          src={tiktok}
          alt="tiktok"
          style={{
            width: '200px',
            height: '70px',
            marginTop: '50px',
            marginBottom: '60px',
          }}
        />
        <C.BackButton
          onClick={() => {
            navigate(-1);
          }}
        >
          <img src={seta} alt="" />
        </C.BackButton>
        <C.ExpoContainer>
          <ExpoIcon />
          <h2>EXPOSIÇÃO VIRTUAL</h2>
        </C.ExpoContainer>
        <C.SelfieContainer >
          <C.Icon src={Video} alt="video" />
        

          <C.Text>VÍDEOS</C.Text> 
        
        </C.SelfieContainer> <br />
    
        <VideoListHome/>

     </div>
    </WatermarkWrapper>
  );
};

export default ExpoVideosHome;
