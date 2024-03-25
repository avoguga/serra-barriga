import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import atalaia from '../../../assets/images/atalaia-de-acaiuba.png';
import Sidebar from '../Sidebar';

import LowArrow from '../../../components/LowArrowButton';

const View = styled.div`
  background-color: #85a01d;
  
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
  >h1 {
  
    font-family: 'FuturaPTHeavy', sans-serif;
  }
  >p {
    font-family: 'FuturaPTBook', sans-serif;
    opacity: 0.85;

  }
`;

const TitleText = styled.div`
  margin: 40px 0 0 0;
  background: #7a9600;
  width: 100%;
  height: 41px;
  align-items: center;
  justify-content: center;
  display: flex;
  p {
    font-family: 'FuturaPTBook' , sans-serif;
    opacity: 0.87;
    font-size: 17px;
  }
`;

const Rodape = styled.div`
  width: 70%;
  height: 70%;
  margin: 20px 0 150px 0;
  p {
    font-family: 'FuturaPTBook' , sans-serif;
    opacity: 0.87;
    font-size: 17px;
  }
`;

const AtalaiaVideosPlayView = () => {
  const location = useLocation();
  const { videoUrl, videoTitle, interpretacao, texto, trilha } =
    location.state || {};
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
        <TitleText>
          <p>Título: {videoTitle}</p>
        </TitleText>
        <iframe src={videoUrl} width="100%"  height="242px"></iframe>
        <Rodape>
          <p>Interpretação: {interpretacao}</p>
          <p>Texto: {texto}</p>
          <p>Trilha: {trilha}</p>
        </Rodape>
      </Content>
    </View>
  );
};

export default AtalaiaVideosPlayView;
