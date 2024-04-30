import styled from 'styled-components';
import { Icons } from '../../helpers/icons';

const Button = styled.button<{active?: boolean}>`
  display: flex;
  width: 120px;

  flex-direction: column;
  white-space: nowrap;
  background-color: transparent;
  color: white;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  cursor: pointer;
  font-size: 16px;
 font-family:'FuturaPTDemi';

  &:focus {
    outline: none;
  }

  svg { 
  
  width: 67px;
  height: 67px;
  fill: ${props => props.active ? '#7A9600' : 'currentColor'} 
  
 
  }
`;

interface HomeButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  iconType: keyof typeof Icons;
  onClick?: () => void;
  active?: boolean;
}

const HomeButton = ({ children, onClick, iconType,active }: HomeButtonProps) => {
  const ButtonIcon = Icons[iconType];

  return (
    <Button onClick={onClick} active={active} >
      <ButtonIcon />
      {children}
    </Button>
  );
};

export default HomeButton;
