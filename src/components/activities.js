import React from 'react'
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";

export const Activities = ({ activityListings, loading }) => {

  let trending = activityListings.slice(0, 5);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  
  return (
    <>
    <div className="trending">
      {
        // JUST MOCK IDEA WITH FIRST FIVE ACTIVITIES
        
        trending.map(trendingActivity => {
          return (
            <Card key={trendingActivity.name}>
              <Card.Body>
              <>
                <Card.Img variant="top" src={trendingActivity.images[0]} />
              </>
                <Card.Title>{trendingActivity.name}</Card.Title>
                  <span className="rating"><i className="fa fa-star"></i>
                  {Math.round(trendingActivity.reviewMeta?.avgRating * 100) / 100}
                  </span>                 
                  <br></br>
                <Card.Text className="card-location">
                  {trendingActivity.primaryRegion?.name}
                </Card.Text>
              </Card.Body>
            </Card>
          )
        })      
      }
    </div>
    <div className="activity-detail">
      <img src="/peek-logo.png"></img>
      <h1>TITLE</h1>
      <i className="fa fa-star"></i>5
      <p className="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
              <>
                <Card.Img variant="top" src={activity.images[0]} />
              </>
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
