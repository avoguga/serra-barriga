import styled from 'styled-components';

export const VideoScreenContainer = styled.div`
  background-color: #67781b; // Use a cor exata do seu design
  color: white;
  height: 100vh; // Ou ajuste conforme necessário
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: baseline;
`;

export const VideoTitle = styled.h1`
  margin-top: 55px;
  font-family: 'FuturaPTBook', sans-serif;
  font-size: 15px;
  background-color: #313a0a;
  width: 100%;
  text-align: center;
  padding: 5px;
  height: 35px;
`;

export const VideoDetails = styled.div`
  margin-top: 25px;
  display: flex;
  align-items: baseline;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding: 15px;

  p {
    font-family: 'FuturaPTBook', sans-serif;
  }
`;

export const PlayButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  // Estilize o botão de play como no design
`;
export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--square-color);
  border-radius: 50%;
  width: 55px;
  height: 55px;
  position: fixed;
  top: 7%;
  left: 5%;
  z-index: 10;
  cursor: pointer;
`;

export const LogoImage = styled.img`
  width: 200px;
  height: 70px;
  margin-top: 120px;
  margin-bottom: 30px;
`;

export const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
`;

export const SelfieContainer = styled.div`
  background-color: #313a0a;
  width: 150px;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  margin-top: 10px;
`;

export const Icon = styled.img`
  margin-right: 5%;

  width: 45px;
  height: 45px;
`;

export const Text = styled.p`
  font-family: 'FuturaPTDemi', sans-serif;

  font-size: 17px;
  color: white;
  margin-bottom: 0px;
`;
