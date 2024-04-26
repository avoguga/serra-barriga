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
  flex-direction: row;
  justify-content: flex-start; /* Alinha as imagens à esquerda */
  overflow-x: auto;
  align-items: center;
  height: 50vh;
  &::-webkit-scrollbar {
    display: none;
  }

  padding: 30px;
`;

export const StyledImage = styled.img`
  background-color: green;
  max-width: 100%; // Defina a largura máxima das imagens para que elas se ajustem ao contêiner
  max-height: 35vh; // Ajuste conforme necessário
  margin: 10px;
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
