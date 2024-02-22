import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import info from '../../../assets/icons/infobranco.svg';
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
  bottom: 0;`
  ;

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

const AgroupText = styled.div`
  display: flex;
  justify-content: center;
  width: 381px;
  max-width: 90%;
  background-color: #819b1c;
  border-radius: 58px;
  opacity: 1;
  margin: 0 0 40px 0;
  p {
    max-width: 80%;
    margin: 30px 0;
    text-align: left;
    letter-spacing: 0px;
  }
`;

const AtalaiaInfoView = () => {
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
            src={info}
            alt="ícone de informação"
            style={{
              width: '15px',
              height: '15px',
            }}
          />
          <h2>Informações</h2>
          <div></div>
        </InfoText>
        <AgroupText>
          <p>
            Protegidos pela densa mata atlântica, os quilombolas usavam tática
            de guerrilha avançada, surpreendendo e derrotando dezenas de
            expedições portuguesas e holandesas ao longo de décadas. Sitiando a
            Serra da Barriga, as tropas somente conseguiram romper e adentrar o
            reduto palmarino usando armamento pesado – canhões e escopetas.
            Aqui, a história registra o maior número de homens, mulheres e
            crianças mortos e degolados em combates. Esse genocídio aconteceu na
            madrugada do dia 6 de fevereiro de 1694. <br />
            <br /> <i>ACAIUBA´S LOOKOUT <br />
            <br /> Protected by the dense Atlantic forest, the Palmarinos
            employed guerrilla tactics, surprising and defeating dozens of
            Portugueses and Dutch expeditions for decades. The Portugueses
            troops were able to break and entre the Palmarino stronghold only by
            besieging the Serra da Barriga and by using cannons and muskets.
            Here, history records the largest number of mem, women and children
            killed in battle. This genocide happened during the early hours of
            February 6, 1694.</i> 
          </p>
        </AgroupText>
      </Content>
    </View>
  );
};

export default AtalaiaInfoView;
