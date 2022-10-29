import React, {useState, useEffect} from 'react'
import './App.css';
import ActivitiesOne from './activities_page_1.json';
import ActivitiesTwo from './activities_page_2.json';
import ActivitiesThree from './activities_page_3.json';
import ActivitiesFour from './activities_page_4.json';
import ActivitiesFive from './activities_page_5.json';
import Card from 'react-bootstrap/Card';


function App() {
  
  const activityListings = [ActivitiesOne.data.activities.results.entries, ActivitiesTwo.data.activities.results.entries, ActivitiesThree.data.activities.results.entries, ActivitiesFour.data.activities.results.entries, ActivitiesFive.data.activities.results.entries];

  console.log(activityListings);
  
  return (

    <div className="activity-container">
        {
          activityListings[0].map(activity => {
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
          })
        }
      </div>
  );
}

export default App;