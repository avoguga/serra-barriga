import styled from 'styled-components';

export const WebcamContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

export const CharacterImage = styled.img`
  position: absolute;

  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: auto;
  width: 100%;
  z-index: 3;
`;
