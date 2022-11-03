import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate, useEffect } from "react-router-dom";

export const Activities = ({ activityListings, loading }) => {

  let navigate = useNavigate();
  const getActivity = (activity) => {
    navigate(`/detail/`, { state: { activity: activity} });
  }


  let trending = activityListings.slice(0, 5);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
    <div className="trending">
      <h1>Top 5 Things To Do Right Now</h1>
      <p>Don't go home without crossing out these experiences off your bucket list</p>
      <Carousel>
        {trending.map(trendingActivity => (
          <Carousel.Item key={trendingActivity.name}>
            <img
              className="d-block w-100"
              onClick={() => getActivity(trendingActivity)}
              src={trendingActivity.images[0]}
              alt=""
            />
            <Carousel.Caption>
              <h2>{trendingActivity.name}</h2>
              <h3>{trendingActivity.primaryRegion?.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      </div>

      <div className="activity-container">
      <h1>Activities</h1>
      </div>

    <div className="categories">
        <span>
        <img src="/hiker.svg"></img>
        <img src="/mountain.svg"></img>
        <img src="/water.svg"></img>
        <img src="/city.svg"></img>
        <img src="/food.svg"></img>
        <img src="/boat.svg"></img>
        <img src="/crafts.svg"></img>
        </span>

    </div>

    <div className="activities-container">
      {
        activityListings.map(activity => {         
         
          let description = activity.blurbs[1].value;

          if (description.split(' ')[0] === "-") {
            description = description.replace('-', '');
          }
          return (
            <Card key={activity.name}>
              <Card.Body>
                <Card.Img variant="top" onClick={() => getActivity(activity)} src={activity.images[0]} />
                <Card.Title>{activity.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {description.split(' ').slice(0, 10).join(' ') + ( " ...")}
                  </Card.Subtitle>
                  <span className="rating"><i className="fa fa-star"></i>
                  {Math.round(activity.reviewMeta?.avgRating * 100) / 100}
                  </span>                 
                  <br></br>
                <Card.Text className="card-location">
                  {activity.primaryRegion?.name}
                </Card.Text>
              </Card.Body>
            </Card>
            )
          }  
        )
      }
    </div>
  </>
  )
}
