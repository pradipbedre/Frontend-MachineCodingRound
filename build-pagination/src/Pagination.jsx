import React from 'react';

const Pagination = ({ currentPage, totalPages, onChangePage }) => {
  const maxPageLinks = 10;
  const pageLinks = [];

  // Determine which page links to show
  let startPage = 1;
  let endPage = totalPages;
  if (totalPages > maxPageLinks) {
    const maxPagesBeforeCurrentPage = Math.floor(maxPageLinks / 2);
    const maxPagesAfterCurrentPage = Math.ceil(maxPageLinks / 2) - 1;
    if (currentPage <= maxPagesBeforeCurrentPage) {
      endPage = maxPageLinks;
    } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
      startPage = totalPages - maxPageLinks + 1;
    } else {
      startPage = currentPage - maxPagesBeforeCurrentPage;
      endPage = currentPage + maxPagesAfterCurrentPage;
    }
  }

  // Add page links and dots to the array
  for (let page = startPage; page <= endPage; page++) {
    pageLinks.push(
      <button key={page} onClick={() => onChangePage(page)}>{page}</button>
    );
  }
  if (startPage > 1) {
    pageLinks.unshift(<span key="dots-start">...</span>);
  }
  if (endPage < totalPages) {
    pageLinks.push(<span key="dots-end">...</span>);
  }

  return (
    <div className="pagination">
      {pageLinks}
    </div>
  );
};

export default Pagination;
