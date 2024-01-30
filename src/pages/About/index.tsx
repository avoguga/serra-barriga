import { styled } from 'styled-components';
import appSerra from '../../assets/icons/app serra.svg';
import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';
import WatermarkImage from '../../assets/background-red.png';

const Content = styled.div`
  background-color: #8D094A;
  height: 100vh;
`;

const About = () => {
  return (
    <WatermarkWrapper watermarkImage={WatermarkImage} watermark={true}>
      <Content>
      <img
          src={appSerra}
          alt="Logo do aplicativo Serra da Barriga"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </Content>
    </WatermarkWrapper>
  );
};

export default About;
