import styled from 'styled-components';

export const FullScreenWrapper = styled.div<{ background: string }>`
  position: fixed; // Isso vai fixar o modal em relação à viewport
  top: 0;
  left: 0;
  width: 100vw; // 100% da largura da viewport
  height: 100vh; // 100% da altura da viewport
  display: flex;
  flex-direction: column;
  align-items: center; // Centraliza verticalmente
  justify-content: baseline; // Centraliza horizontalmente
  background: ${(props) => props.background}; // Fundo escurecido para destaque
  z-index: 1000;
`;

export const ImageContainer = styled.div`
  display: flex;
  margin-left: 30px;
  flex-direction: row;
  justify-content: start; /* Alinha as imagens à esquerda */
  overflow-x: auto;
  overflow-y: hidden;
  align-items: center;
  row-gap: 18;
  height: 50vh;
  &::-webkit-scrollbar {
    display: none;
  }

  padding: 0px;
  scroll-behavior: smooth;
`;
export const StyledImage = styled.img<{ isZoomed: boolean }>`
  background-color: transparent;
  max-width: 100%;
  max-height: 35vh;
  padding: 7px;
  transition: transform 0.3s ease;

  transform: ${({ isZoomed }) => (isZoomed ? 'scale(1.5)' : 'scale(1)')};
  cursor: ${({ isZoomed }) => (isZoomed ? 'zoom-out' : 'zoom-in')};
  z-index: ${({ isZoomed }) => (isZoomed ? '3' : '0')};
`;

export const Description = styled.div`
  color: #e7ebe0;
  font-family: 'FuturaPTBook', sans-serif;
  display: flex;
  font-size: 16px;

  align-items: flex-start; // Alinha os itens ao início do contêiner no eixo transversal
  justify-content: flex-start; // Alinha os itens ao início do contêiner no eixo principal
  background-color: transparent;
  padding: 0px 0 0 20px; // Ajuste o preenchimento conforme necessário
  width: 100%; // Assumindo que você quer que o Description ocupe toda a largura disponível
`;

export const LogoContainer = styled.div`
  display: flex;

  align-items: center;
`;
export const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 108%;
  position: absolute;
  bottom: 45%;
  padding: 0 20px;
`;

export const PrevButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  height: 150px;
  cursor: pointer;
`;

export const NextButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;
