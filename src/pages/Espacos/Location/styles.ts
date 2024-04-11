import { styled } from 'styled-components';

export const View = styled.div`
  background-color: #8aa61e;
  height: 105vh;
  display: flex;
  justify-content: center;
  align-items: end;
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
  margin: 150px 0 30px 0;
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

export const Here = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #607407;

  width: 202px;
  text-align: center;
  border-radius: 58px;
  height: 41px;
  margin: -50px 0 100px 0;
  p {
    font-family: 'FuturaPTBook', sans-serif;
    font-size: 22px;
    opacity: 0.85;
  }
`;
export const ContentHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) {
    margin-top: 55px;
  }
`;

export const PersonalityTitle = styled.h1`
  font-family: 'FuturaPTHeavy', sans-serif;
  white-space: nowrap;

  font-size: 22px;
`;
export const Subtitle = styled.h4`
  font-family: 'FuturaPTBook', sans-serif;
  text-align: center;
  white-space: nowrap;
  color: #e7ebe0;
`;
