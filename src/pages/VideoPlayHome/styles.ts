import styled from 'styled-components';

export const Background = styled.div`
  display: flex;
  height: 100vh;
  background-color: #d46900;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AppImg = styled.img`
  width: 100%;
  height: 102px;
  margin-top: 20%;
  margin-bottom: 6%;
`;

export const StyledSelfieContainer = styled.div`
  background-color: #b75c01;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 100px;
  border-radius: 50px;
`;

export const VideoIcon = styled.img`
  margin-right: 11%;
  height: 38%;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #b75c01;
  border-radius: 30px;
  width: 55px;
  height: 55px;
  align-self: self-start;
  top: 7%; /* altura que vai parar antes do topo */
  left: 5%;
  position: sticky;
`;

export const BackButtonImage = styled.img`
  width: 17px;
  color: #fff;
`;

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 18%;
  margin-bottom: 10%;
  width: 100%;
  background-color: #753d00;
`;

export const VideoTitle = styled.p`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: white;
  width: 100%;
  height: 30px;
  margin-left: 70%;
  margin-top: 4%;
`;

export const VideoPlayer = styled.iframe`
  width: 100%;
  height: 300px;
`;

export const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-self: start;
  margin-bottom: 20%;
  color: white;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 15px;
  margin-left: 10%;
  font-weight: lighter;
`;

export const TextVideo = styled.p`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: white;
  font-size: 20px;
  font-weight: bold;
`;
