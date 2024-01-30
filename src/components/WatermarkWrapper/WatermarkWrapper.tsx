import styled from 'styled-components';
import watermarkImage from '../../assets/marcadaguaverdeescuro.png';

interface WatermarkWrapperProps {
  watermark?: boolean;
  watermarkImage?: string;
  children: React.ReactNode;
}

const WatermarkDiv = styled.div<WatermarkWrapperProps>`
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${(props) => props.watermarkImage});
    background-size: 180% auto;
    background-position: top center;
    background-repeat: no-repeat;
    pointer-events: none;
  }
`;

const WatermarkWrapper = ({
  children,
  watermark,
  watermarkImage,
}: WatermarkWrapperProps) => {
  if (watermark) {
    return (
      <WatermarkDiv watermarkImage={watermarkImage}>{children}</WatermarkDiv>
    );
  }
  return <>{children}</>;
};

export default WatermarkWrapper;
