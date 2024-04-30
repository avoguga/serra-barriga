// styles.ts
import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  height: 100vh;
  background-color: #d46900;
  flex-direction: column;
  align-items: center;
  justify-content: baseline;
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
  background-color: #b75c01;
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

export const VideoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 70%;
  margin-top: 6%;
  background-color: #d46900;
`;

export const VideoButton = styled.button`
  background-color: aliceblue; // Example color, adjust as needed
  height: 220px;
  width: 100%;
  margin-bottom: 4%;
  // Repeat for video2 and video3 with different colors
`;

export const Text = styled.p`
  font-family: 'FuturaPTDemi', sans-serif;

  font-size: 17px;
  color: white;
  margin-bottom: 0px;
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
