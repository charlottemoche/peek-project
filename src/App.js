import './App.css';
import Activities from './activities_page_1.json'

function App() {

  var activityListings = Activities.data.activities.results.entries;

  console.log(JSON.stringify(activityListings));

  return (
      <div className="activity-container">
        <div class="activity-card">
          
        </div>
      </div>
  );
}

export default App;