import styled from 'styled-components';

export const Container = styled.div``;

export const PersonalityContainer = styled.div`
  padding: 25px;
  height: 100vh;
  background-color: #ffffff; /* Cor de fundo similar à imagem */
  color: white; /* Texto em branco */
  font-family: 'FuturaPT', sans-serif; /* Fonte legível */
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 768px) {
    padding: 10px; /* Menos padding em dispositivos menores */
  }
`;

export const PersonalityTitle = styled.h1`
  font-size: 3em; /* Título grande */
  margin-bottom: 0.5em;
  font-weight: bold;
  flex: 1;

  /* Espaçamento abaixo do título */
`;
export const PersonalityImage = styled.img`
  width: 100px; // Largura do ícone
  height: auto; // Altura automática para manter a proporção
  align-self: center; // Centraliza o ícone na coluna
  filter: invert(1);
`;
export const PersonalityDescription = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'FuturaPT', sans-serif;
  align-items: center;
  font-size: 1em;
  line-height: 1.6;
  color: white;
  background-color: #8c111b;
  padding: 10px;
`;

export const DescriptionEn = styled.div`
  font-size: 1em; /* Texto em tamanho padrão */
  line-height: 1.6; /* Espaçamento entre linhas para legibilidade */
  margin-bottom: 1em;
  background-color: #ffffff;
  color: #8c111b;
  margin-left: 15px;

  &:last-of-type {
    margin-bottom: 0; /* Remove o espaço extra no último parágrafo */
  }
`;
export const BorderContainer = styled.div`
  border: 1px solid #d3d3d3;
`;
