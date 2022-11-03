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
  
  let duration = activity.durationMinutesMax;
  function time(n) {
    let num = n;
    let timeS = "";
    let hours = (num / 60);
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    if (num % 60 !== 0) {
      timeS = rhours + " hr and " + rminutes + " min";
    } else {
      timeS = rhours + " hr"
    }
    return timeS;
  }

  const highlights = activity.blurbs[2].value;

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
            <ul>Duration: {time(duration)}</ul>
            <ul>Cancellation: {activity.blurbs[0].value}</ul>
          </div>
          <div className="details">
            <h3>
              Highlights
            </h3>
            <p>
            {highlights.split("\n").map((i, key) => {
            if (i.split(' ')[0] === "-") {
              i = i.replace('-', '');
            }
            return <li className="highlights" key={key}>{i}</li>
            })}
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