// Libs
import { styled } from 'styled-components';

// Components
import WatermarkWrapper from '../../components/WatermarkWrapper/WatermarkWrapper';
import LowArrow from '../../components/LowArrowButton';

// Assets
import WatermarkImage from '../../assets/background-red.png';
import appSerra from '../../assets/logo.png';

import BtnDownArrow from '../../components/ScrollButton';


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
  justify-content: baseline;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  height: 100vh;
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




const Ficha = () => {
  


  return (
    <WatermarkWrapper watermarkImage={WatermarkImage} watermark={true}>
      <View>
        <Nav>
          <LowArrow onClick={() => window.history.back()} isActive={true} />
        </Nav>
        
        <BtnDownArrow/>
          <img
            src={appSerra}
            alt="Logo do aplicativo Serra da Barriga"
            style={{
              width: '200px',
              height: '70px',
              margin: '140px 0 50px',
            }}
          /> <br /><br />

          <p style={{ fontSize:'20px'}}>Ficha Técnica</p> <br /><br />

          <p>Ficha Técnica</p>
         
         
      </View>
    </WatermarkWrapper>
  );
};

export default Ficha;
