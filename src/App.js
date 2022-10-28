import './App.css';
import Activities from './activities_page_1.json'

function App() {

  var activityListings = Activities.data.activities.results.entries;

  console.log(JSON.stringify(activityListings));

  return (
      <div className="activity-container">
        {
          activityListings.map(activity => {
            return (
              <div className="activity-card">
                { activity.name }
              </div>
            )
          })
        }
      </div>
  );
}

export default App;