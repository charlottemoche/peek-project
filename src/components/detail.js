import React, { useState } from 'react';

export const Detail = () => {

  // IDEALLY STORE EVERYTHING LOCALLY AND ACCESS BETWEEN PAGES
  const [activity, setActivity] = useState(JSON.parse(localStorage.getItem("activity")));

  return (
    <div>
      <>
      <div className="activity-detail">
        <div className="activity-detail-container">
        <div className="activity-detail-1">
          <img src={activity.images[0]}></img>
          <h1>
            {activity.name}
          </h1>
          <i className="fa fa-star"></i>5
          <p className="description">
            {activity.blurbs[1].value}
          </p>
          <div className="info-box">
            <ul>Lorem ipsum dolor sit amet</ul>
            <ul>Lorem ipsum dolor sit amet</ul>
            <ul>Lorem ipsum dolor sit amet</ul>
          </div>
          <div className="details">
            <h2>
              Highlights
            </h2>
            <p>
              <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </li>
              <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </li>
              <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </li>
            </p>
            <h2>
              What's Included
            </h2>
            </div>
          <img src="/map-placeholder.png"></img>
        </div>

        <div className="activity-detail-2">
          <img className="calendar" src="/calendar-placeholder.png"></img>
        </div>
        </div>
      </div> 
      </>
    </div>
  )
}