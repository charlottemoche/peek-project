import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

export const Pagination = ({activitiesPerPage, totalActivities, paginate}) => {

  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalActivities / activitiesPerPage); i++) {
    pageNumbers.push(i);
  }

  function scroll(number) {
    paginate(number);
    setTimeout(function () {
      // ONLY SCROLL TO ACTIVITIES
      window.scrollTo(0, 600);
    }, 2);
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