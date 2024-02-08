import { IArrow } from './components/CarouselArrow/types';

export interface ICarousel extends IArrow {
  renderItems: JSX.Element[];
}
