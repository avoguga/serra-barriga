import styled from 'styled-components';
import WatermarkImage from '../../assets/marcadaguaverdeescuro.png';

const WatermarkDiv = styled.div`
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${WatermarkImage});
    background-size: 180% auto;
    background-position: top center;
    background-repeat: no-repeat;
    pointer-events: none;
  }
`;

interface WatermarkWrapperProps {
  watermark?: boolean;
  children: React.ReactNode;
}

const WatermarkWrapper = ({ children, watermark }: WatermarkWrapperProps) => {
  if (watermark) {
    return <WatermarkDiv>{children}</WatermarkDiv>;
  }
  return <>{children}</>;
};

export default WatermarkWrapper;
