import { useLocation } from 'react-router-dom';
import styled from 'styled-components';


import Sidebar from '../Sidebar';

import LowArrow from '../../../components/LowArrowButton';
import SpaceHeader from '../../../components/SpaceHeader';

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
const VideoContainer = styled.div`
  overflow: hidden;
  padding-top: 56.25%; // Proporção de aspecto de 16:9
  position: relative;
  width: 100%;
`;

const StyledIframe = styled.iframe`
  border: 0;
  height: 100%;
  left: 0;
  position: absolute;

  top: 0;
  width: 100%;
`;
const PlayView = () => {
  const location = useLocation();
  const { url, title, interpretacao, texto, trilha } = location.state || {};
    console.log(location.state);
    
  return (
    <View>
      <Nav>
        <LowArrow onClick={() => window.history.back()} isActive={true} />
      </Nav>
      <NavFotter>
        <Sidebar activeSection='VideosView'/>
      </NavFotter>
      <Content>
      <SpaceHeader/>
      <TitleText>
          <p>Título: {title}</p>
        </TitleText>
        <VideoContainer>
          <StyledIframe
            src={url}
            title={title}
        
          ></StyledIframe>
        </VideoContainer>
  
        <Rodape>
          <p>Interpretação : {interpretacao}</p>
          <p>Texto: {texto}</p>
          <p>Trilha: {trilha}</p>
        </Rodape>
      </Content>
    </View>
  );
};

export default PlayView;
