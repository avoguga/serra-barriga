import styled from 'styled-components';

export const FullScreenWrapper = styled.div<{ background: string }>`
  position: fixed; // Isso vai fixar o modal em relação à viewport
  top: 0;
  left: 0;
  width: 100vw; // 100% da largura da viewport
  height: 100vh; // 100% da altura da viewport
  display: flex;
  flex-direction: column;
  align-items: baseline; // Centraliza verticalmente
  justify-content: baseline; // Centraliza horizontalmente
  background: ${(props) => props.background}; // Fundo escurecido para destaque
  z-index: 1000; // Garante que o modal fique acima de outros elementos
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 20px;
`;

export const StyledImage = styled.img`
  max-width: 90%;
  max-height: 80vh; // Ajuste conforme necessário
`;
export const Description = styled.div`
  color: #e7ebe0;
  font-family: 'FuturaPTBook', sans-serif;
  display: flex;
  font-size: 16px;
  align-items: flex-start; // Alinha os itens ao início do contêiner no eixo transversal
  justify-content: flex-start; // Alinha os itens ao início do contêiner no eixo principal

  padding: 20px 0 0 20px; // Ajuste o preenchimento conforme necessário
  width: 100%; // Assumindo que você quer que o Description ocupe toda a largura disponível
`;

export const LogoContainer = styled.div`
  display: flex;

  align-items: center;
`;
