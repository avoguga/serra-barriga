import styled from 'styled-components';
import { Icons } from '../../helpers/icons';

const Button = styled.button`
  display: flex;
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
    width: 51px;
    height: 51px;
    background-color: red;
  }
`;

interface HomeButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  onClick?: () => void;
}

const QrCode = Icons['Scan'];

const HomeButton = ({ children, onClick }: HomeButtonProps) => {
  return (
    <Button onClick={onClick}>
      <QrCode />
      {children}
    </Button>
  );
};

export default HomeButton;
