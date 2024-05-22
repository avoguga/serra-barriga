import styled from 'styled-components';
export const View = styled.div`
  background-color: #8aa61e;
  color: #ffffff;
  display: flex;
  justify-content: center;
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
  > h1 {
    font-size: 22px;
    font-family: 'FuturaPTHeavy', sans-serif;
    white-space: nowrap;
  }
  > p {
    font-family: 'FuturaPTBook', sans-serif;
    white-space: nowrap;
    opacity: 0.85;
  }
`;

export const InfoText = styled.div`
  background: #8d094a;
  width: 290px;
  height: 29px;
  margin: 0 0 30px;
  border-radius: 58px;
  display: flex;
  align-items: center;
  justify-content: baseline;

  > h2 {
    font-family: 'FuturaPTDemi', sans-serif;
    letter-spacing: 1px;
    margin-left: 45px;
  }
`;

export const AgroupText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 381px;
  max-width: 90%;
  background-color: #819b1c;
  padding: 10px;
  border-radius: 58px;
  opacity: 1;
  margin: 0 0 40px 0;
  p {
    max-width: 86%;
    color: #ffffff;
    margin: 30px 0;
    text-align: left;
    letter-spacing: 0.5px;
    font-family: 'FuturaPT', sans-serif;
    text-align: justify;
  }
`;
export const SpanText = styled.span`
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: 'FuturaPTBookOblique', sans-serif;
  text-align: center;
  font-size: 13px;
`;
