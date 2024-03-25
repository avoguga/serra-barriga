import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import img from '../../../assets/icons/imagem - branco.svg';
import atalaia from '../../../assets/images/atalaia-de-acaiuba.png';
import Sidebar from '../Sidebar';
import LowArrow from '../../../components/LowArrowButton';

const View = styled.div`
  background-color: #8aa61e;

  color: #ffffff;
  h1 {
    font-size: 30px;
    font-family: 'FuturaPTHeavy', sans-serif;

  }
  p {
    font-size: 17px;
    font-family: 'FuturaPTBook' , sans-serif;
opacity: 0.90;
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
const AgroupImgs = styled.div`
  margin: 20px 0 30px 0;
  text-align: center;
`;

const ImgText = styled.div`
  background: #8d094a;
  width: 300px;
  height: 29px;
  margin: 0 0 30px 0;
  border-radius: 58px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    margin-right: 35px;
  }
`;

const AgroupImg = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  margin: 0 0 100px 0;
  image {
    margin: 5px;
    width: 133px;
    height: 148px;
    background: #ffffff;
  }
`;

const AtalaiaImgView = () => {
  const navigate = useNavigate();
  return (
    <View>
      <Nav>
        <LowArrow onClick={() => navigate('/atalaia-de-acaiuba')} isActive={true} />
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
        <AgroupImgs>
          <h1>Atalaia de Acaiuba</h1>
          <p>Mirante de acaiuba - lider palmarino</p>
        </AgroupImgs>
        <ImgText>
          <img
            src={img}
            alt="ícone de imagens"
            style={{
              width: '25px',
              height: '25px',
              marginLeft:'15px'
            }}
          />
          <h3>Imagens</h3>
          <div></div>
        </ImgText>
        <AgroupImg>
          <image></image>
          <image></image>
          <image></image>
          <image></image>
          <image></image>
          <image></image>
        </AgroupImg>
      </Content>
    </View>
  );
};

export default AtalaiaImgView;
