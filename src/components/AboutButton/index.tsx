import styled from 'styled-components';
import { Icons } from '../../helpers/icons';
import WatermarkImageBottom from '../../assets/marcamontanhaparafundoclao.png';

const BackgroundDiv = styled.div`
  position: relative;
  background-image: url(${WatermarkImageBottom});
  background-position: bottom right;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
`;

const Button = styled.button`
  display: flex;
  width: 130px;
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
  font-weight: bold;
  font-family: 'FuturaPT';

  &:focus {
    outline: none;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

interface AboutButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  iconType: keyof typeof Icons;
  onClick?: () => void;
}

const AboutButton = ({ children, onClick, iconType }: AboutButtonProps) => {
  const ButtonIcon = Icons[iconType];

  return (
    <BackgroundDiv>
      <Button onClick={onClick}>
        <ButtonIcon />
        {children}
      </Button>
    </BackgroundDiv>
  );
};

export default AboutButton;
