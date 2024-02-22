import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import videos from '../../../assets/icons/video.svg';
import poster from '../../../assets/images/video-poster.png'
import atalaia from '../../../assets/images/atalaia-de-acaiuba.png';
import Sidebar from '../Sidebar';
import LowArrow from '../../../components/LowArrowButton';

const View = styled.div`
  background-color: #8aa61e;
  font-family: 'Futura PT', sans-serif;
  color: #ffffff;
  h1 {
    font-size: 34px;
  }
  p {
    font-size: 18px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  margin: 50px 25px;
`;

const NavFotter = styled.nav`
  position: fixed;
  width: 100%;
  bottom: 0;
`;
const AgroupTexts = styled.div`
  margin: 20px 0 30px 0;
  text-align: center;
`;

const InfoText = styled.div`
  background: #8d094a;
  width: 329px;
  height: 29px;
  margin: 0 0 30px 0;
  border-radius: 58px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const AgroupVideo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 381px;
  max-width: 60%;
  margin: 0 0 40px 0;
  p {
    margin: 30px 0;
    text-align: left;
    letter-spacing: 0px;
  }
  video {
    background: #ffffff;
  }
`;

const AtalaiaVideosView = () => {
  const navigate = useNavigate();
  return (
    <View>
      <Nav>
        <LowArrow onClick={() => window.history.back()} isActive={true} />
      </Nav>
      <NavFotter>
        <Sidebar />
      </NavFotter>
      <Content>
        <img
          src={atalaia}
          alt="Ilustração do mirante de acaiuba"
          style={{
            width: '350px',
            height: '232px',
            margin: '100px 0 0 0',
          }}
        />
        <AgroupTexts>
          <h1>Atalaia de Acaiuba</h1>
          <p>Mirante de acaiuba - lider palmarino</p>
        </AgroupTexts>
        <InfoText>
          <img
            src={videos}
            alt="ícone de videos"
            style={{
              width: '15px',
              height: '15px',
            }}
          />
          <h2>Vídeos</h2>
          <div></div>
        </InfoText>
        <AgroupVideo>
          <video
            onClick={() => {
              navigate('/atalaia-de-acaiuba/videos/playvideos', {
                state: {
                  videoUrl:
                    'https://www.youtube.com/embed/-gpUMX17BkY?si=OFOfz9MXcmdKuGH8',
                  videoTitle: 'GroundBass',
                  interpretacao: 'GroundBass',
                  texto: 'GroundBass',
                  trilha: 'Groundbass',
                },
              });
            }}
            poster={poster}
          ></video>
          <p>Descrição: Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio blanditiis saepe sequi.</p>
          <video
            onClick={() => {
              navigate('/atalaia-de-acaiuba/videos/playvideos', {
                state: {
                  videoUrl:
                    'https://www.youtube.com/embed/SdsKKXy57hw',
                  videoTitle: 'Phaxe',
                  interpretacao: 'Universo',
                  texto: 'Universo',
                  trilha: 'Phaxe',
                },
              });
            }}
            poster={poster}
          ></video>
          <p>Descrição: Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio blanditiis saepe sequi.</p>
          <video
            onClick={() => {
              navigate('/atalaia-de-acaiuba/videos/playvideos', {
                state: {
                  videoUrl:
                    'https://www.youtube.com/embed/gdsUKphmB3Y',
                  videoTitle: 'NFL',
                  interpretacao: 'Snoop',
                  texto: 'Kendrick',
                  trilha: 'Pepsi',
                },
              });
            }}
            poster={poster}
          ></video>
          <p>Descrição: Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio blanditiis saepe sequi.</p>
        </AgroupVideo>
      </Content>
    </View>
  );
};

export default AtalaiaVideosView;