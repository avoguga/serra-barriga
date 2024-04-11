import styled from 'styled-components';

export const View = styled.div`
  background-color: #8aa61e;
  font-family: 'Futura PT', sans-serif;
  color: #ffffff;
  height: 100vh;
  h1 {
    font-size: 30px;
  }
  p {
    font-size: 18px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
export const AgroupTexts = styled.div`
  margin: 20px 0 30px 0;
  text-align: center;
  h1 {
    font-family: 'FuturaPTHeavy', sans-serif;
  }
  p {
    font-family: 'FuturaPTBook', sans-serif;
    opacity: 0.87;
    font-size: 17px;
  }
`;

export const InfoText = styled.div`
  background: #8d094a;
  width: 280px;
  height: 29px;
  margin: 0 0 30px;
  border-radius: 58px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    margin-right: 35px;
    font-family: 'FuturaPTBook', sans-serif;
    opacity: 0.9;
  }
`;

export const AgroupVideo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 381px;
  max-width: 60%;
  margin: 0 0 40px 0;
  p {
    margin: 25px 0;
    text-align: left;
    letter-spacing: 0px;
    font-family: 'FuturaPTBook', sans-serif;
    opacity: 0.9;
    font-size: 17px;
  }
  video {
    background: #ffffff;
  }
`;
