// Libs
import { styled } from 'styled-components';

// Components
import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';
import LowArrow from '../../components/LowArrowButton';

// Assets
import WatermarkImage from '../../assets/background-red.png';
import appSerra from '../../assets/icons/app serra.svg';
import logoPalmares from '../../assets/icons/logo-palmares.svg';
import logoTikTok from '../../assets/icons/logo-tiktok.svg';
import logoAnajo from '../../assets/icons/logo-anajo.svg';
import logoSubirSerra from '../../assets/icons/logo-vamos-subir-serra.svg';
import logoNucleoZero from '../../assets/icons/logo-nucleo-zero.svg';
import logoParqueMemorial from '../../assets/icons/logo-parque-memorial.svg';
import logoIphan from '../../assets/icons/logo-iphan.svg';

// Others
import packageJson from '../../../package.json';

const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  margin: 50px 25px;
`;

const View = styled.div`
  font-family: 'Futura PT', sans-serif;
  color: #ffffff;
  background-color: #8d094a;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  h1 {
    font-size: 17px;
    margin: 60px 0 0 0;
  }
  p {
    margin: 0 0 80px;
    line-height: 2;
  }
  span {
    font-size: 16px;
  }
  `;
  
  const Content = styled.div`
    width: 80%;
  `;

const Footer = styled.footer`
  max-width: 90%;
  margin: 90px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    margin: 20px 0;
  }
}
`;


const About = () => {
  const version = packageJson.version;

  return (
    <WatermarkWrapper watermarkImage={WatermarkImage} watermark={true}>
      <View>
        <Nav>
          <LowArrow onClick={() => window.history.back()} isActive={true} />
        </Nav>
        <Content>
          <img
            src={appSerra}
            alt="Logo do aplicativo Serra da Barriga"
            style={{
              width: '165px',
              height: '101px',
              margin: '140px 0 100px',
            }}
          />
          <p>
            ESTE APLICATIVO FOI DESENVOLVIDO PELA <b>ANAJÔ</b> NO PROJETO{' '}
            <b>"VAMOS SUBIR A SERRA"</b>. CONHEÇA MAIS SOBRE ESSA INICIATIVA EM
            PARCERIA COM A FUNDAÇÃO PALMARES.
          </p>
          <h1>PATROCÍNIO</h1>
          <img
            src={logoTikTok}
            alt="Logo do aplicativo Tik Tok."
            style={{
              width: '70%',
              height: '70%',
            }}
          />
          <h1>REALIZAÇÃO</h1>
          <img
            src={logoAnajo}
            alt="Logo do centro de cultura Anajô."
            style={{
              width: '70%',
              height: '70%',
            }}
          />
          <img
            src={logoSubirSerra}
            alt="Logo do movimento vamos subir a serra Alagoas."
            style={{
              width: '70%',
              height: '70%',
            }}
          />
          <img
            src={logoNucleoZero}
            alt="Logo do Núcleo Zero comunicação."
            style={{
              width: '70%',
              height: '70%',
            }}
          />
          <img
            src={logoIphan}
            alt="Logo do Instituto do Patrimônio Histórico e Artistico Nacional."
            style={{
              width: '70%',
              height: '70%',
            }}
          />
          <img
            src={logoPalmares}
            alt="Logo da fundação cultural Palmares."
            style={{
              width: '70%',
              height: '70%',
            }}
          />
        </Content>
        <Footer>
          <img
            src={logoParqueMemorial}
            alt="Logo do Parque Memórial Quilombo dos Palmares."
            style={{
              width: '70%',
              height: '70%',
              margin: '0 0 100px ',
            }}
          />
          <span>
            <u>
              <b>FICHA TÉCNICA</b>
            </u>
          </span>
          <span> © 2024 APP DESENVOLVIDO POR NÚCLEO ZERO</span>
          <span>VERSÃO {version}</span>
        </Footer>
      </View>
    </WatermarkWrapper>
  );
};

export default About;
