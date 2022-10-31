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
          return ( 
            <Card key={activity.name}>
            <Card.Body>
              <Card.Img variant="top" src={activity.images[0]} />
              <Card.Title>{activity.name}</Card.Title>
              {/* <Card.Subtitle className="mb-2 text-muted">{post.categories[0]}</Card.Subtitle> */}
              <Card.Text>
                {/* {parse(activity.excerpt.rendered)} */}
              </Card.Text>
              {/* <Card.Link href={post.link}>View post</Card.Link>                  */}
            </Card.Body>
            </Card>
            )
          }  
        )
      }
  </div>
  )
}
