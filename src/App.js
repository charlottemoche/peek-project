import './App.css';
import axios from 'axios'
import Activities from './activities_page_1.json'

function App() {

  const activityListings = Activities.data.activities.results.entries;
  
  return (
    <div className="activity-container">
        {
          activityListings.map(activity => {
            return ( 
              <>
              <p key={activity.name}>
                {activity.name}
              </p>
              <img key={activity.images} className="img-card" src={activity.images[0]}></img>
              </>
            )
          })
        }
      </div>
  );
}

export default App;