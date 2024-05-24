import styled from 'styled-components';

export const Container = styled.div`
  background-color: #8aa61e;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  height: auto;
`;

export const SelfieContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: baseline;
  background: #586617 0% 0% no-repeat padding-box;
  width: 235px;
  height: 60px;
  border-radius: 35px;
  gap: 15px;
  margin-bottom: 10px;

  img {
    width: 55px;
    height: 55px;
    margin-left: 10px;
  }
  h3 {
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
  width: 280px;
  text-align: center;
  font-size: 16px;
  font-weight: normal;
  letter-spacing: 0.8px;
  color: rgba(255, 255, 255, 0.6);
  font-family: 'FuturaPT', sans-serif;
`;

export const ImageContainer = styled.div`
  width: 300px;
  height: 380px;
  border: 3px solid #ffffff;
  margin: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
