import React, { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

export const Detail = () => {

  let navigate = useNavigate();
  const routeChange = () =>{
    let path = `/`;
    navigate(path);
    window.scrollTo(0, 0, 'auto');
  }

  const { state: { activity } = {} } = useLocation();
  // console.log(activity);
  
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

  let description = activity.blurbs.find(e => e.key === "DESCRIPTION").value;
  let highlights = activity.blurbs.find(e => e.key === "HIGHLIGHTS").value;
  let included = activity.blurbs.find(e => e.key === "INCLUDED").value
  let toKnow = activity.blurbs.find(e => e.key === "TO_KNOW").value

  return (
    <div>
      <>
      <div className="activity-detail">
        <button className="activity-detail-back" onClick={routeChange}>Back to Activities</button>
        <div className="activity-detail-container">
        <div className="activity-detail-1">
          <img src={activity.images[0]}></img>
          <h2>
            {activity.name}
          </h2>
          <span className="rating-detail"><i className="fa fa-star"></i>
              {Math.round(activity.reviewMeta?.avgRating * 100) / 100}
            </span>                 
          <p className="description">
            {description}
          </p>
          <div className="info-box">
            <span>
              <ul><img src="/clock.svg" /><b>Duration:</b> {time(duration)}</ul>
            </span>
            <span>
            <ul><img src="/cancel.svg"/><b>Cancellation:</b> {activity.blurbs[0].value}</ul>
            </span>
          </div>
          <div className="details">
            <div className="highlights-box">
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
            <div className="info-box">
              
            <h3>
              Included
            </h3>
            <div>
            {included.split("\n").map((i, key) => {
            if (i.split(' ')[0] === "-") {
              i = i.replace('-', '');
            }
            return <p key={key}>&#10004; &nbsp; {i}</p>
            })}
            </div>
            </div>
            <h3>
              To Know
            </h3>
            <p>
            {toKnow.split("\n").map((i, key) => {
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
          CALENDAR PLACEHOLDER
        </div>
        </div>
      </div> 
      </>
    </div>
  )
}