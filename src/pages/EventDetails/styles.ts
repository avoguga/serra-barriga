import styled from "styled-components";

export const Container = styled.div `
  background: #009289;
  display: flex;
  flex-direction: column;

  height: 150vh;
  align-items: center;
  padding: 7rem 1rem;


`

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
  color: #FFFFFF;
  word-wrap: break-word;
margin-top:25px ;

`;
export const DataEvento = styled.div `

`
export const DescricaoEvento = styled.p`
  font-size: 16px;
  color: #FFFFFF;
`;

export const DataHoraEvento = styled.div`
  font-size: 14px;
  display: flex;
  flex-direction: column;
justify-content: center;
align-items: center;
width: 300px;
height: 70px;
border: 1px solid #FFFFFF;
color: #FFFFFF;
margin:25px 0 25px 0 ;


`;

export const BotaoVoltar = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #026E67;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

