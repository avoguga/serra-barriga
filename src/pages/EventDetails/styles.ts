import styled from 'styled-components';

export const Container = styled.div`
  background-color: #009289;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-height: 250vh;
  align-items: center;
  padding: 7rem 0rem;
`;

export const DetalhesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  max-width: 600px;
  margin: auto;
`;

export const TituloEvento = styled.h2`
  font-size: 20px;
  color: #ffffff;
  letter-spacing: 1px;
  margin-top: 25px;
  margin-bottom: 50px;
  width: 260px;
  text-align: left;
  text-transform: uppercase;
  font-family: 'FuturaPTHeavy', sans-serif;
`;
export const TituloSecaoEvento = styled.h3`
  font-size: 18x;
  color: #ffffff;
  font-family: 'FuturaPT', sans-serif;
  margin-top: 45px;
  font-style: italic;
  margin-bottom: 25px;
  width: 90%;
  opacity: 0.89;
  font-weight: 100;
`;
export const DescricaoEvento = styled.p`
  font-size: 19px;
  color: #ffffff;
  font-family: 'FuturaPTBook', sans-serif;
  font-weight: 100;
  text-align: left;

  width: 90%;

  > span {
    font-style: italic;
    font-family: 'FuturaPT', sans-serif;
  }
`;

export const DataHoraEvento = styled.div`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 75px;
  border: 1px solid #ffffff;
  color: #ffffff;
  margin: 25px 0 25px 0;
  > h2 {
    font-family: 'FuturaPTDemi', sans-serif;
    letter-spacing: 1px;
  }
`;

export const BotaoVoltar = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #026e67;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
