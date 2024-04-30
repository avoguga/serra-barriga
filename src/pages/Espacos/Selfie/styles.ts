import styled from 'styled-components';

export const Container = styled.div`
  background: '#8AA61E';

  display: 'flex';
  flex-direction: 'column';
  align-items: 'center';

  p {
    font-family: 'FuturaPT', sans-serif;
  }
`;

export const SelfieContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: baseline;
  background: #586617 0% 0% no-repeat padding-box;
  width: 235px;
  height: 60px;
  border-radius: 35px;
  gap: 15px;

  p {
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 0.89;
    font-family: 'FuturaPTDemi', sans-serif;
  }
`;

export const Text = styled.p`
  p {
    font-family: 'FuturePT', sans-serif;
  }
  margin-top: 25px;
  margin-bottom: 20px;
`;

export const ImageContainer = styled.div`
  width: 280px;
  height: 380px;
  border: 3px solid #ffffff;
  margin: 15px 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Footer = styled.div`
  background: #313a0a;
  color: #ffff;
  width: 100vw;
  height: 10.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h4 {
    font-family: 'FuturaPT', sans-serif;
  }
  opacity: 0.89;
`;
