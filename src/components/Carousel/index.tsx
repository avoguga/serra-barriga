import CarouselArrow from './components/CarouselArrow';
import { CarouselGrid } from './styles';
import { ICarousel } from './types';

const Carousel: React.FC<ICarousel> = ({ renderItems, ...rest }) => {
  return (
    <>
      <CarouselGrid>{renderItems}</CarouselGrid>
      <CarouselArrow {...rest} />
    </>
  );
};

export default Carousel;
