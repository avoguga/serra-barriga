import styled from 'styled-components';
import { Icons } from '../../helpers/icons';
import { useNavigate } from 'react-router-dom';

interface FloatingButtonBarProps {
  isVisible?: boolean;
  onClickLeftArrow?: () => void;
  onClickScan?: () => void;
  onClickHome?: () => void;
}

const FloatingBar = styled.div`
  width: 220px;
  height: 64px;
  display: flex;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1000;
  background-color: #586617;
  border-radius: 0px 0px 57px 0px;
`;

const Button = styled.button`
  margin: 5px;

  svg {
    width: 30px;
    height: 30px;
    margin-right: 25px;
  }
`;

const LeftArrowIcon = Icons['LeftArrow'];
const ScanIcon = Icons['Scan'];
const HomeIcon = Icons['Home'];

const FloatingButtonBar = ({
  isVisible = true,
  onClickLeftArrow,
  onClickScan,
  onClickHome,
}: FloatingButtonBarProps) => {
  const navigate = useNavigate();

  if (!isVisible) return null;

  const handleLeftArrowClick = onClickLeftArrow
    ? onClickLeftArrow
    : () => navigate(-1);
  const handleScanClick = onClickScan ? onClickScan : () => navigate('/qrcode');
  const handleHomeClick = onClickHome ? onClickHome : () => navigate('/');

  return (
    <FloatingBar>
      <Button
        style={{
          marginLeft: '25px',
        }}
        onClick={handleLeftArrowClick}
      >
        <LeftArrowIcon />
      </Button>
      <Button onClick={handleScanClick}>
        <ScanIcon />
      </Button>
      <Button onClick={handleHomeClick}>
        <HomeIcon />
      </Button>
    </FloatingBar>
  );
};

export default FloatingButtonBar;
