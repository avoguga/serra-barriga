import { useEffect, useState } from 'react';
import type { IUseCarouselProps } from './types';

const useCarousel = <T>({ items, itemHeight }: IUseCarouselProps<T>) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(0);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const hasNextPage = currentPage < totalPages - 1;
  const hasPrevPage = currentPage > 0;

  const updateItemsPerPage = () => {
    const availableHeight = window.innerHeight - itemHeight;
    const itemsCount = Math.floor(availableHeight / itemHeight);
    const count = itemsCount % 2 !== 0 ? itemsCount + 1 : itemsCount; // se o número de items for ímpar, some +1 (supondo sempre ser uma coluna de 2)
    setItemsPerPage(count);
  };

  const nextPage = () => {
    if (hasNextPage) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (hasPrevPage) setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { currentItems, hasNextPage, hasPrevPage, nextPage, prevPage };
};

export default useCarousel;
