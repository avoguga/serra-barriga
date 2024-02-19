import styled from "styled-components";

export const Container = styled.div `
  background: #009289;
  display: flex;
  flex-direction: column;

  max-height: 250vh;
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
  letter-spacing: 1px;
margin-top:25px ;
margin-bottom: 50px;
width: 260px;
text-align: left;
text-transform: uppercase;
font-family: 'FuturaPTHeavy', sans-serif;
`;
export const TituloSecaoEvento = styled.h3`
  font-size: 18x;
  color: #FFFFFF;
  font-family: 'FuturaPT', sans-serif;
  margin-top: 45px; 
 font-style: italic;
  margin-bottom: 25px;
  width:100%;

`;
export const DescricaoEvento = styled.p`
  font-size: 20px;
  color: #FFFFFF;
  font-family: 'FuturaPT', sans-serif;
  text-align: justify;
  
`;

export const DataHoraEvento = styled.div`
  font-size: 14px;
  display: flex;
  flex-direction: column;
justify-content: center;
align-items: center;
width: 290px;
height: 75px;
border: 1px solid #FFFFFF;
color: #FFFFFF;
margin:25px 0 25px 0 ;
>h2 {
font-family: 'FuturaPTDemi', sans-serif;
letter-spacing: 1px;

}



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

