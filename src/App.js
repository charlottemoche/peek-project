import React, {useState, useEffect} from 'react'
import './App.css';
import ActivitiesOne from './activities_page_1.json';
import ActivitiesTwo from './activities_page_2.json';
import ActivitiesThree from './activities_page_3.json';
import ActivitiesFour from './activities_page_4.json';
import ActivitiesFive from './activities_page_5.json';
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
                <>
                <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src={activity.images[0]} />
                <Card.Body>
                <Card.Title>{activity.name}</Card.Title>
                </Card.Body>
                </Card>
                </>
                )
              }  
            )
          })
        }
      </div>
  );
}

export default App;

// return ( 
//   <>
//    <Card style={{width: '18rem'}}>
//    <Card.Img variant="top" src={activity.images[0]} />
//    <Card.Body>
//    <Card.Title>{activity.name}</Card.Title>
//    </Card.Body>
//    </Card>
//   </>
// )
