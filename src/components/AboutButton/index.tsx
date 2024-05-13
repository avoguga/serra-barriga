import styled from 'styled-components';
import { Icons } from '../../helpers/icons';



const BackgroundImg = styled.div`

`
const ButtonContainer = styled.div`
  position: absolute; // Isso vai posicionar seu botão em relação ao BackgroundImg.
  top: 90%; // Centraliza verticalmente em relação ao BackgroundImg.
  left: 49%; // Centraliza horizontalmente em relação ao BackgroundImg.
  transform: translate(-50%, -50%); // Ajuste fino para centralizar perfeitamente o botão.
  z-index: 1;
  @media only screen and (width:360px) and (height: 740px) {
    top: 87%; 
  left: 48%; 
    
    
  }
  @media only screen and (width:360px) and (height: 640px) {
    top: 93%; 
  left: 48%; 
    
    
  }
  @media only screen and (width:384px) and (height: 640px) {
    top: 93%; 
  left: 48%; 
    
    
  }

  @media only screen and (width: 390px), (height: 844px) {


    top: 92%; 


}
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
  gap: 0;
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
    <BackgroundImg>
      <ButtonContainer>
        <Button onClick={onClick} style={customStyle}>
          <ButtonIcon />
          {children}
        </Button>
      </ButtonContainer>
    </BackgroundImg>

  );

};

export default AboutButton;
