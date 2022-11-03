import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

export const Pagination = ({activitiesPerPage, totalActivities, paginate}) => {

  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalActivities / activitiesPerPage); i++) {
    pageNumbers.push(i);
  }

  function scroll(number) {
    paginate(number);
    window.scrollTo(0, 0, 'auto');
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a onClick={() => scroll(number)} href="#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  ) 
}