import styled from 'styled-components';
import { Icons } from '../../helpers/icons';
import WatermarkImageBottom from '../../assets/marcamontanhaparafundoclao.png';


const BackgroundImg = styled.div`
position: relative;

width: 90vw;
  height: 200px;
margin-right: 28px;
 
  background-image: url(${WatermarkImageBottom});
  background-position: bottom center;
  background-repeat: no-repeat;

  background-size: 140vw;
  background-color: #67781B;
`
const ButtonContainer = styled.div`
  position: absolute; // Isso vai posicionar seu botão em relação ao BackgroundImg.
  top: 55%; // Centraliza verticalmente em relação ao BackgroundImg.
  left: 53%; // Centraliza horizontalmente em relação ao BackgroundImg.
  transform: translate(-50%, -50%); // Ajuste fino para centralizar perfeitamente o botão.
`;

const Button = styled.button`
  display: flex;
  width: 10px;
  flex-direction: column;
  background-color: transparent;
  color: white;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 16px;
 white-space: nowrap;
  margin-left: 38px;
  font-family: 'FuturaPTBook', sans-serif;

  &:focus {
    outline: none;
  }

  svg {
    width: 42px;
    height: 42px;
  }
`;

interface AboutButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  iconType: keyof typeof Icons;
  onClick?: () => void;
  customStyle?: React.CSSProperties;
}

const AboutButton = ({
  children,
  onClick,
  iconType,
  customStyle,
}: AboutButtonProps) => {
  const ButtonIcon = Icons[iconType];

  return (
    <>
  <BackgroundImg>
      <ButtonContainer>
        <Button onClick={onClick} style={customStyle}>
          <ButtonIcon />
          {children}
        </Button>
      </ButtonContainer>
    </BackgroundImg>
    

    </>

  );

};

export default AboutButton;
