import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import loc from '../../../assets/icons/localização.svg';
import maps from '../../../assets/images/mapa-atalaia.png';
import Sidebar from '../Sidebar';

import LowArrow from '../../../components/LowArrowButton';

const View = styled.div`
  background-color: #8aa61e;
  font-family: 'Futura PT', sans-serif;
  color: #ffffff;
  h1 {
    font-size: 30px;
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
  h1{
    font-family: 'FuturaPTHeavy', sans-serif;

  }
  p {
    font-family: 'FuturaPTBook' , sans-serif;
    opacity: 0.87;
    font-size: 17px;
  }
`;

const InfoText = styled.div`
  background: #8d094a;
  width: 300px;
  height: 29px;
  margin: 0 0 -40px 0;
  border-radius: 58px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    margin-right: 25px;
    opacity: 0.95;
    letter-spacing: 1px;
  }
`;

const Here = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #607407;
 
  width: 202px;
  text-align: center;
  border-radius: 58px;
  height: 41px;
  margin: -50px 0 100px 0;
   p{
  font-family: 'FuturaPTBook' , sans-serif;
  font-size: 22px;
   opacity: 0.85;
  }

`;

const AtalaiaLocView = () => {
  const navigate = useNavigate();
  return (
    <View>
      <Nav>
        <LowArrow onClick={() => navigate('/atalaia-de-acaiuba')} isActive={true} />
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
              width: '25px',
              height: '25px',
            }}
          />
          <h3>Localização</h3>
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
        <Here> <p> Você está aqui</p></Here>
      </Content>
      <NavFotter>
        <Sidebar />
      </NavFotter>
    </View>
  );
};

export default AtalaiaLocView;
