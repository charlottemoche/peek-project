import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

export const Pagination = ({activitiesPerPage, totalActivities, paginate}) => {

  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalActivities / activitiesPerPage); i++) {
    pageNumbers.push(i);
  }


  const scroll = async (number) => {
    await paginate(number);
    let element = document.getElementById("activity-container");
    element.scrollIntoView();
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <button onClick={() => scroll(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  ) 
}