import React from 'react'
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";

export const Activities = ({ activityListings, loading }) => {
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
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
              <Card.Img variant="top" src={activity.images[0]} />
              <Card.Title>{activity.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {description.split(' ').slice(0, 12).join(' ') + ( " ...")}
                </Card.Subtitle>
                {Math.round(activity.reviewMeta?.avgRating * 100) / 100}
                <br></br>
              <Card.Text>
                {activity.primaryRegion?.name}
              </Card.Text>                 
            </Card.Body>
            </Card>
            )
          }  
        )
      }
  </div>
  )
}
