import styled from "styled-components";
import { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -60%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`;

export const AlertContainer = styled.div <{ show: boolean }>`
 animation: ${fadeIn} 0.3s ease-out;
 display: ${({ show }) => (show ? 'flex' : 'none')};
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 300px;
  top: 5%;
  left: 50%;
  
  transform: translateX(-50%);
  min-width: 280px;
  max-width: 80%;
  background-color: #f4f4f4; 
  color: black;
  padding: 20px;
  border: 2px solid #000; 
  border-radius: 10px; 
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0,0,0,0.2); 
  text-align: center;
  opacity: 0.88;
  font-family: 'FuturaPT', sans-serif;
  font-size: 19px;
  
`

export const Button = styled.button`
padding: 10px 20px;
  margin-top: 20px;
  border: none;
  background-color: #67781B; 
  color: white;
  border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;

  cursor: pointer;
  font-size: 16px; 
  &:hover {
    background-color: #5a6e16;
  }
`;