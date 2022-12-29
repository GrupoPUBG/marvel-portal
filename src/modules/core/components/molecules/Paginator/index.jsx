import { useEffect } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';
import './styles.scss';

Pagination.propTypes = {
  totalItems: PropTypes.number.isRequired,
  pageSize: PropTypes.number,
  initialPage: PropTypes.number,
  onPageChange: PropTypes.func
};

export default function Pagination({ totalItems, pageSize = 10, initialPage = 1, onPageChange }) {
  const totalPages = getFlooredToatalPages(totalItems, pageSize);
  const [currentPage, setCurrentPage] = useState(initialPage);

  function onNextpageClick() {
    const nextPage = getNextPage(currentPage, totalPages);
    setCurrentPage(nextPage);
  }

  function onPreviousPageClick() {
    const prevPage = getPreviousePage(currentPage);
    setCurrentPage(prevPage);
  }

 


  useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage]);

  return (
    <div className="mvl-paginator">

      <div className="mvl-paginator__actions">
        <button
          className="botones"
          disabled={isFirstPage(currentPage)}
          onClick={onPreviousPageClick}>
          <BiChevronLeft /> Previous
        </button>

        <span className="mvl-paginator__text">
          Page <strong>{currentPage} </strong> of <strong>{totalPages}</strong>
        </span>

<<<<<<< HEAD
        <span className="mvl-paginator__text">
        Page  <strong>{currentPage} </strong> of <strong>{totalPages}</strong>
      </span>
        
        <span className="mvl-paginator__text">
        ...
      </span>
        
        <button className='botones' disabled={isLastPage(currentPage, totalPages)} onClick={onNextpageClick}>
          Next<BiChevronRight />

=======
        <span className="mvl-paginator__text">...</span>

        <button
          className="botones"
          disabled={isLastPage(currentPage, totalPages)}
          onClick={onNextpageClick}>
          Next
          <BiChevronRight />
>>>>>>> 2f451ac09de3e6ef3702d9c6cec87b8635712155
        </button>
      </div>
    </div>
  );
};

function isFirstPage(currentPage) {
  return currentPage === 1;
}

function isLastPage(currentPage, maxPage) {
  return currentPage === maxPage;
}

function getPreviousePage(currentPage) {
  return currentPage > 1 ? currentPage - 1 : currentPage;
}

function getNextPage(currentPage, maxPage) {
  return currentPage < maxPage ? currentPage + 1 : maxPage;
}

function getFlooredToatalPages(totalItems, pageSize) {
  return Math.floor(getToatalPages(totalItems, pageSize));
}

function getToatalPages(totalItems, pageSize) {
  return totalItems / pageSize;
}
