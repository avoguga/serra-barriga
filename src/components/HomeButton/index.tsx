import styled from 'styled-components';
import { Icons } from '../../helpers/icons';

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
  font-size: 17px;
  font-weight: bold;

  &:focus {
    outline: none;
  }

  svg {
    width: 45px;
    height: 45px;
  }
`;

interface HomeButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  iconType: keyof typeof Icons;
  onClick?: () => void;
}

const HomeButton = ({ children, onClick, iconType }: HomeButtonProps) => {
  const ButtonIcon = Icons[iconType];

  return (
    <Button onClick={onClick}>
      <ButtonIcon />
      {children}
    </Button>
  );
};

export default HomeButton;