// Libs
import { styled } from 'styled-components';

// Components
import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';

// Assets
import WatermarkImage from '../../assets/background-red.png';
import appSerra from '../../assets/icons/app serra.svg';
import logoPalmares from '../../assets/icons/logo-palmares.svg';
import logoTikTok from '../../assets/icons/logo-tiktok.svg';
import logoAnajo from '../../assets/icons/logo-anajo.svg';
import logoSubirSerra from '../../assets/icons/logo-vamos-subir-serra.svg';
import logoNucleoZero from '../../assets/icons/logo-nucleo-zero.svg';

// Others
import packageJson from '../../../package.json';

const Content = styled.div`
  background-color: #8d094a;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  font-family: 'Futura PT', sans-serif;
  color: #ffffff;
  text-align: center;

  h1 {
    width: 242px;
    height: 22px;
    font-size: 17px;
  }
`;

const Footer = styled.footer``;

const About = () => {
  const version = packageJson.version;

  return (
    <WatermarkWrapper watermarkImage={WatermarkImage} watermark={true}>
      <Content>
        <img
          src={appSerra}
          alt="Logo do aplicativo Serra da Barriga"
          style={{
            width: '165px',
            height: '101px',
          }}
        />
        <h1>PATROCINADOR</h1>
        <img src={logoTikTok} alt="Logo do aplicativo Tik Tok." />
        <img src={logoPalmares} alt="Logo da fundação cultural Palmares." />
        <img src={logoAnajo} alt="Logo do centro de cultura Anajô." />
        <img
          src={logoSubirSerra}
          alt="Logo do movimento vamos subir a serra Alagoas."
        />
        <img src={logoNucleoZero} alt="Logo do Núcleo Zero comunicação." />
        <Footer>
          <span> © 2024 APP DESENVOLVIDO POR NÚCLEO ZERO</span>
          <p>VERSÃO {version}</p>
        </Footer>
      </Content>
    </WatermarkWrapper>
  );
};

export default About;
