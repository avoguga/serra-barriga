import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 105vh;
  color: #fff;
`;

export const VideoBackground = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover; // Isso garante que o vídeo cubra toda a tela sem distorção
  z-index: -1;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  width: 55px;
  height: 55px;
  position: fixed; // Alterado de absolute para fixed
  top: 5%;
  left: 5%;
  z-index: 10;
  cursor: pointer;
`;
export const ExpoContainer = styled.div`
  font-family: 'FuturaPTHeavy';
  font-size: 12px;
  color: var(--text-color);

  padding: 1rem;
  border-radius: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  padding-left: 0.4rem;
  padding-right: 1.5rem;
  width: 255px;
  height: 70px;
  margin-top: 75px;
  white-space: nowrap;

  svg {
    width: 75px;
    height: 75px;

    fill: #fff;
  }
`;

export const ExpoTitle = styled.h1`
  font-family: 'FuturaPTDemi', sans-serif;
  font-size: 18px;
  margin-bottom: 15px;
`;

export const ExpoDescription = styled.p`
  font-family: 'FuturaPT', sans-serif;
  font-size: 17px;
  text-align: left;
  padding: 25px;
`;
