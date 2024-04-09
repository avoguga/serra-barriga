import styled from 'styled-components';

export const Container = styled.div``;

export const PersonalityContainer = styled.div`
  padding: 20px;
  height: 100vh;
  background-color: #8aa61e;
  color: white; /* Texto em branco */
  font-family: 'FuturaPT', sans-serif; /* Fonte legível */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const ContentHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) {
    margin-top: 55px;
  }
`;

export const PersonalityTitle = styled.h1`
  font-family: 'FuturaPTHeavy', sans-serif;
  white-space: nowrap;

  font-size: 22px;
`;
export const Subtitle = styled.h4`
  font-family: 'FuturaPTBook', sans-serif;
  text-align: center;
  white-space: nowrap;
  color: #e7ebe0;
`;
export const PersonalityImage = styled.img`
  width: 260px; // Largura do ícone
  height: 230px; // Altura automática para manter a proporção
  align-self: center; // Centraliza o ícone na coluna
`;
export const PersonalityDescription = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'FuturaPT', sans-serif;
  align-items: center;
  font-size: 1em;
  line-height: 1.6;
  color: white;

  padding: 10px;
`;

export const DescriptionEn = styled.div`
  font-size: 1em; /* Texto em tamanho padrão */
  line-height: 1.6; /* Espaçamento entre linhas para legibilidade */
  margin-bottom: 1em;

  color: #8c111b;
  margin-left: 15px;

  &:last-of-type {
    margin-bottom: 0; /* Remove o espaço extra no último parágrafo */
  }
`;
export const AgroupButtons = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: space-around;

  width: 381px;
  max-width: 100%;
  padding: 15px;
  height: 347px;
  background-color: #95b420;
  border-radius: 58px;
  opacity: 1;
  margin: 0 0 0 0;
`;
