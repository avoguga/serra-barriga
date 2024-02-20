import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import atalaia from '../../../assets/images/atalaia-de-acaiuba.png';
import FloatingButtonBar from '../../../components/FloatingContainer';
import HomeButton from '../../../components/HomeButton';

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

const AgroupTexts = styled.div`
  margin: 20px 0 30px 0;
  text-align: center;
`;

const AgroupButtons = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: space-around;
  width: 381px;
  max-width: 90%;
  height: 367px;
  background-color: #95b420;
  border-radius: 58px;
  opacity: 1;
  margin: 0 0 40px 0;
`;

const AtalaiaView = () => {
  const navigate = useNavigate();
  return (
    <View>
      <FloatingButtonBar />
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
        <AgroupButtons>
          <HomeButton
            iconType="Info"
            onClick={() => {
              navigate('/atalaia-de-acaiuba/info');
            }}
          >
            INFORMAÇÕES
          </HomeButton>
          <HomeButton
            iconType="Location"
            onClick={() => {
              navigate('/#');
            }}
          >
            LOCALIZAÇÃO
          </HomeButton>
          <HomeButton
            iconType="Video"
            onClick={() => {
              navigate('/#');
            }}
          >
            VÍDEOS
          </HomeButton>
          <HomeButton
            iconType="Img"
            onClick={() => {
              navigate('/#');
            }}
          >
            IMAGENS
          </HomeButton>
          <HomeButton
            iconType="Audio"
            onClick={() => {
              navigate('/#');
            }}
          >
            ÁUDIOS
          </HomeButton>
          <HomeButton
            iconType="Selfie"
            onClick={() => {
              navigate('/#');
            }}
          >
            SELFIE HISTÓRICA
          </HomeButton>
        </AgroupButtons>
      </Content>
    </View>
  );
};

export default AtalaiaView;
