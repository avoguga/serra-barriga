// Libs
import { styled } from 'styled-components';

// Components
import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';

// Assets
import WatermarkImage from '../../assets/background-red.png';
import appSerra from '../../assets/logo.png';
import logoPalmares from '../../assets/icons/palmares.svg';
import logoTikTok from '../../assets/icons/logo-tiktok.svg';
import logoAnajo from '../../assets/icons/logo-anajo.svg';
import logoSubirSerra from '../../assets/icons/logo-vamos-subir-serra.svg';
import logoNucleoZero from '../../assets/icons/logo-nucleo-zero.svg';
import logoParqueMemorial from '../../assets/icons/logo-parque-memorial.svg';

// Others
import packageJson from '../../../package.json';
import BtnDownArrow from '../../components/ScrollButton';
import { useNavigate } from 'react-router-dom';
import FloatingButtonBar from '../../components/FloatingContainer';

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
    text-align: justify;
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
`;

const About = () => {
  const version = packageJson.version;
  const navigate = useNavigate();

  return (
    <WatermarkWrapper watermarkImage={WatermarkImage} watermark={true}>
      <View>
        <FloatingButtonBar backgroundColor="#700238" backBgColor="#4E0026" />
        <Content>
          <BtnDownArrow />
          <img
            src={appSerra}
            alt="Logo do aplicativo Serra da Barriga"
            style={{
              width: '200px',
              height: '70px',
              margin: '140px 0 50px',
            }}
          />

          <h1>PARCERIA</h1>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={logoTikTok}
              alt="Logo do aplicativo Tik Tok."
              style={{
                width: '70%',
                height: '70%',
              }}
            />
          </a>
          <a
            href="https://www.vamossubiraserra.com.br/sobre-anajô"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={logoAnajo}
              alt="Logo do centro de cultura Anajô."
              style={{
                width: '70%',
                height: '70%',
              }}
            />
          </a>
          <a
            href="https://www.vamossubiraserra.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={logoSubirSerra}
              alt="Logo do movimento vamos subir a serra Alagoas."
              style={{
                width: '70%',
                height: '70%',
              }}
            />
          </a>
          <a
            href="https://www.gov.br/palmares/pt-br"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={logoPalmares}
              alt="Logo da fundação cultural Palmares."
              style={{
                width: '70%',
                height: '70%',
              }}
            />
          </a>
          <h1>DESENVOLVIMENTO</h1>
          <a
            href="https://www.instagram.com/nucleozero_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={logoNucleoZero}
              alt="Logo do Núcleo Zero comunicação."
              style={{
                width: '70%',
                height: '70%',
              }}
            />
          </a>
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
              <b
                onClick={() => {
                  navigate(`/about/Ficha`);
                }}
              >
                FICHA TÉCNICA
              </b>
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
