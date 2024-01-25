import styled from 'styled-components';
import watermarkImage from '../../assets/marcadaguaverdeescuro.png';

const WatermarkDiv = styled.div`
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${watermarkImage});
    background-size: 180% auto;
    background-position: top center;
    background-repeat: no-repeat;
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
