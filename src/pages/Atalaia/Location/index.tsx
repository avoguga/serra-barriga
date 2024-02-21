import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import loc from '../../../assets/icons/localização.svg';
import maps from '../../../assets/images/mapa-atalaia.png';
import Sidebar from '../Sidebar';
import AboutButton from '../../../components/AboutButton';
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
  margin: 150px 0 30px 0;
  text-align: center;
`;

const InfoText = styled.div`
  background: #8d094a;
  width: 329px;
  height: 29px;
  margin: 0 0 -40px 0;
  border-radius: 58px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Here = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #607407;
  opacity: 1;
  width: 202px;
  text-align: center;
  border-radius: 58px;
  height: 41px;
  margin: -50px 0 100px 0;
`;

const AtalaiaLocView = () => {
  const navigate = useNavigate();
  return (
    <View>
      <Nav>
        <LowArrow onClick={() => window.history.back()} isActive={true} />
      </Nav>

      <Content>
        <AgroupTexts>
          <h1>Atalaia de Acaiuba</h1>
          <p>Mirante de acaiuba - lider palmarino</p>
        </AgroupTexts>
        <InfoText>
          <img
            src={loc}
            alt="ícone de Localização"
            style={{
              width: '15px',
              height: '15px',
            }}
          />
          <h2>Localização</h2>
          <div></div>
        </InfoText>
        <img
          src={maps}
          style={{
            maxWidth: '130%',
            width: '568px',
            height: '568px',
          }}
        />
        <Here>Você está aqui</Here>
      </Content>
      <NavFotter>
        <Sidebar />
      </NavFotter>
    </View>
  );
};

export default AtalaiaLocView;
