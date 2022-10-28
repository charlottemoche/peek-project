import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios'
import Activities from './activities_page_1.json'
import Card from 'react-bootstrap/Card';


function App() {

  const activityListings = Activities.data.activities.results.entries;

  // const [activities, setActivities] = useState([]);
  // const [loading, setLoading] = useState(false)
  // const [currentPage, setCurrentPage] = useState(1);
  // const [activitiesPerPage, setActivitiesPerPage] = useState(20);

  // useEffect(() => {
  //   const fetchActivities = async () => {
  //     setLoading(true);
  //     const response = await axios.get('localhost:3000/activities_page_1.json');
  //     setActivities(response.data);
  //     setLoading(false);
  //   }
  //   fetchActivities();
  // });

  
  return (
    <div className="activity-container">
        {
          activityListings.map(activity => {
            return ( 
              <>
               <Card style={{ width: '18rem' }}>
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