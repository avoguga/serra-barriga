import { ArrowContainer } from '../../../../pages/Personalities';
import Arrow from '../../../ArrowButton';
import { IArrow } from './types';

const CarouselArrow: React.FC<IArrow> = ({
  onClickNextPage,
  onClickPreviousPage,
  leftArrowActive,
  rightArrowActive,
}) => {
  return (
    <ArrowContainer>
      <Arrow
        direction="left"
        onClick={onClickPreviousPage}
        isActive={leftArrowActive}
      />
      <Arrow
        direction="right"
        onClick={onClickNextPage}
        isActive={rightArrowActive}
      />
    </ArrowContainer>
  );
};

export default CarouselArrow;
