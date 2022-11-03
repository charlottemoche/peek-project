import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const Detail = () => {

  // IDEALLY STORE EVERYTHING LOCALLY AND ACCESS BETWEEN PAGES
  const [activity, setActivity] = useState(JSON.parse(localStorage.getItem("activity")));

  let navigate = useNavigate();
  const routeChange = () =>{
    let path = `/`;
    navigate(path);
    window.scrollTo(0, 0, 'auto');
  }

  return (
    <div>
      <>
      <div className="activity-detail">
        <p className="activity-detail-back" onClick={routeChange}>Back to Activities</p>
        <div className="activity-detail-container">
        <div className="activity-detail-1">
          <img src={activity.images[0]}></img>
          <h2>
            {activity.name}
          </h2>
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
            <h3>
              Highlights
            </h3>
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
            </div>
          <img src="/map-placeholder.png"></img>
        </div>

        <div className="activity-detail-2">
          {/* <img className="calendar" src="/calendar-placeholder.png"></img> */}
        </div>
        </div>
      </div> 
      </>
    </div>
  )
}