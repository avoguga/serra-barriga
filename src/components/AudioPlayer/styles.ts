interface PlayButtonProps {
  colorTheme: 'green' | 'orange';
}
import styled from 'styled-components';
interface ProgressBarActiveProps {
  width: string; // Define que 'width' é uma string
}
interface ProgressBarProps {
  colorTheme: 'green' | 'orange';
}
export const PlayerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  flex-direction: row;
  background-color: #753d00;
  width: 119%;

  height: 41px;
`;
export const ProgressBarContainer = styled.div`
  width: 18rem;

  background: #ffffff; // cor de fundo da barra (branca)
  border-radius: 4px;
  position: relative;
  margin-left: 5px;
  z-index: 1;
  height: 1.5px; // ou a altura que você desejar
`;

export const PlayButton = styled.button<ProgressBarProps>`
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;

  margin-left: 55px;

  svg {
    fill: ${(props) =>
      props.colorTheme === 'green' ? '#485600' : '#FFA500'}; // Verde ou Laranja
    width: 17px; // tamanho do ícone
    height: 24px; // tamanho do ícone
  }
`;

export const ProgressBarWrapper = styled.div`
  width: 100%;
  margin: 10px 0;
  position: relative;
`;
export const ProgressBarActive = styled.div<ProgressBarActiveProps>`
  height: 3px;
  border-radius: 4px;
  width: ${(props) => props.width};
  position: absolute;
  top: 0; // Aqui estava faltando a unidade de medida
  left: 0;
  z-index: 2; /* Adicione um z-index maior para garantir que a barra de progresso laranja fique sobreposta */
`;

export const ProgressBar = styled.input.attrs({
  type: 'range',
})<PlayButtonProps>`
  -webkit-appearance: none; // Necessário para personalizar o slider no Chrome/Safari
  width: 100%; // A barra de progresso deve esticar para a largura do container
  height: -5px; // Altura do track do slider
  background: transparent; // Track do slider transparente para ver o ProgressBarContainer
  z-index: 2;
  position: absolute; // Posiciona sobre o ProgressBarContainer
  top: 150%;
  transform: translateY(-50%); // Centraliza verticalmente

  &::-webkit-slider-runnable-track {
    background: transparent;
    border-radius: 4px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 10px; // Aumente o tamanho do thumb para melhor visibilidade
    width: 10px;
    border-radius: 50%;
    background: ${(props) =>
      props.colorTheme === 'green' ? '#485600' : '#FFA500'};
    cursor: pointer;
    margin-top: -4px; // Ajuste baseado na altura do track e do thumb
    position: relative;
  }

  &::-moz-range-track {
    background: transparent;
    border-radius: 4px;
  }

  &::-moz-range-thumb {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: ${(props) =>
      props.colorTheme === 'green' ? '#485600' : '#FFA500'};
    cursor: pointer;
  }
`;

export const ProgressTime = styled.div`
  position: absolute;
  bottom: -25px;
  left: 0;
  right: 0;
  text-align: center;
  color: #fff;
`;
