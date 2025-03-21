import styled from 'styled-components';

export const VideoCardContainer = styled.div`
  width: 100%; // Ajuste para o tamanho desejado
  margin-bottom: 20px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const VideoThumbnail = styled.img`
  width: 240px;
  height: auto; // Mantém a proporção da imagem
  cursor: pointer;
  border-radius: 10px;
`;

export const VideoTitle = styled.h3`
  color: #fff;
  font-size: 16px; // Ajuste para o tamanho desejado
  margin-top: 8px;
  text-align: center;
  width: 240px;
`;

export const VideoDuration = styled.span`
  color: #fff;
  font-size: 14px; // Ajuste para o tamanho desejado
  display: block;
  text-align: center;
`;
