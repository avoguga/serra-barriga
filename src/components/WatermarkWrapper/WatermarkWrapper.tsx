import styled from 'styled-components';

interface WatermarkWrapperProps {
  watermark?: boolean;
  watermarkImage?: string;
  children: React.ReactNode;
  bottomWatermarkImage?: string;
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
    opacity: 0.4;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    pointer-events: none;
    background-image: url(${(props) => props.bottomWatermarkImage});
    background-size: 180% auto;
    background-repeat: no-repeat;
    background-position: bottom center;
  }
`;

const WatermarkWrapper = ({
  children,
  watermark,
  watermarkImage,
  bottomWatermarkImage,
}: WatermarkWrapperProps) => {
  if (watermark) {
    return (
      <WatermarkDiv
        bottomWatermarkImage={bottomWatermarkImage}
        watermarkImage={watermarkImage}
      >
        {children}
      </WatermarkDiv>
    );
  }
  return <>{children}</>;
};

export default WatermarkWrapper;
