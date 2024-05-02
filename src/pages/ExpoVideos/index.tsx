import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';

import tiktok from '../../assets/logo.png';
import { Icons } from '../../helpers/icons';
import '@google/model-viewer';



import Video from '../../assets/icons/i_video pagina.png';

import { BackButton } from '../TakeHome';
import { useNavigate } from 'react-router-dom';
import seta from '../../assets/seta voltar e abaixo - branco.svg';


import * as C from './styles';
import VideoList from '../../components/VideoList';



const ExpoVideos = () => {
  const ExpoIcon = Icons['Expo'];

  const navigate = useNavigate();


  return (
    <WatermarkWrapper>
      <div
        style={{
          backgroundColor: '#D66B00',
          height: '100vh',
          width: '100vw',
          display: 'flex',
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
        <BackButton
          onClick={() => {
            navigate(-1);
          }}
        >
          <img src={seta} alt="" />
        </BackButton>
        <C.ExpoContainer>
          <ExpoIcon />
          <h2>EXPOSIÇÃO VIRTUAL</h2>
        </C.ExpoContainer>
        <C.SelfieContainer >
          <C.Icon src={Video} alt="video" />
        

          <C.Text>VÍDEOS</C.Text> 
        
        </C.SelfieContainer> <br />
        <VideoList/>

     </div>
    </WatermarkWrapper>
  );
};

export default ExpoVideos;
