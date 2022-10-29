import React, {useState, useEffect} from 'react'
import './App.css';
import ActivitiesOne from './activities_page_1.json';
import ActivitiesTwo from './activities_page_2.json';
import ActivitiesThree from './activities_page_3.json';
import ActivitiesFour from './activities_page_4.json';
import ActivitiesFive from './activities_page_5.json';
import "bootstrap/dist/css/bootstrap.min.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';


function App() {

  let fileOne = ActivitiesOne.data.activities.results.entries;
  let fileTwo = ActivitiesTwo.data.activities.results.entries;
  let fileThree = ActivitiesThree.data.activities.results.entries;
  let fileFour = ActivitiesFour.data.activities.results.entries;
  let fileFive = ActivitiesFive.data.activities.results.entries;
  
  const activityListings = [fileOne, fileTwo, fileThree, fileFour, fileFive];
  
  return (

    <div className="activities-container">

        {
          activityListings.map(activities => {
            return activities.map(activity => {
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
          })
        }
      </div>
  );
}

export default App;


{/* <>
                <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src={activity.images[0]} />
                <Card.Body>
                <Card.Title>{activity.name}</Card.Title>
                </Card.Body>
                </Card>
                </> */}