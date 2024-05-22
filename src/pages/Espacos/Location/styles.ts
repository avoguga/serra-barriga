import { styled } from 'styled-components';

interface MarkerProps {
  posX: string;
  posY: string;
}

export const View = styled.div`
  background-color: #8aa61e;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Futura PT', sans-serif;
  color: #ffffff;
  h1 {
    font-size: 26px;
    white-space: nowrap;
  }
  p {
    font-size: 18px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-family: 'FuturaPTBook', sans-serif;
  }
`;

export const ImageContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-right: 20px;
`;

export const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  margin: 50px 25px;
`;

export const NavFotter = styled.nav`
  position: fixed;
  width: 100%;
  bottom: 0;
`;

export const InfoText = styled.div`
  background: #8d094a;
  width: 300px;
  height: 29px;
  margin: 15px 0 -40px 0;
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

export const MapContainer = styled.div`
  position: relative;
  img {
    width: 450px;
    height: 408px;
  }

  @media only screen and (width: 360px) and (height: 740px) {
    img {
      width: 420px;
      height: 400px;
    }
  }
`;

export const Marker = styled.div<MarkerProps>`
  position: absolute;
  top: ${(props) => props.posY};
  left: ${(props) => props.posX};
  background: none;
  cursor: pointer;
  width: 150px;
  padding: 8px 16px;
  background: #ffffff;
  color: #67781b;
  font-family: 'FuturaPTDemi', sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
  text-align: center;
  &:after {
    position: absolute;
    content: '';
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    border-width: 5px;
    border-style: solid;
    border-color: #ffffff;
    z-index: 1;
  }
`;
