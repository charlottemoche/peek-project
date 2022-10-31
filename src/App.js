import React, {useState, useEffect} from 'react'
import './App.css';
import ActivitiesOne from './activities_page_1.json';
import ActivitiesTwo from './activities_page_2.json';
import ActivitiesThree from './activities_page_3.json';
import ActivitiesFour from './activities_page_4.json';
import ActivitiesFive from './activities_page_5.json';
import { Activities } from './components/activities';
import { Pagination } from './components/pagination';


function App() {

  let fileOne = ActivitiesOne.data.activities.results.entries;
  let fileTwo = ActivitiesTwo.data.activities.results.entries;
  let fileThree = ActivitiesThree.data.activities.results.entries;
  let fileFour = ActivitiesFour.data.activities.results.entries;
  let fileFive = ActivitiesFive.data.activities.results.entries;
  
  // PUT FILES INTO ONE OBJECT
  let activityListings = [fileOne, fileTwo, fileThree, fileFour, fileFive].flat();

  console.log(activityListings);
  
  const [activities, setActivities] = useState(activityListings);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const activitiesPerPage = 20;
  
  // const fetchActivities = async () => {
  //   setLoading(true);
  //   // normally would use await, but not necessary because I have the files and the data locally
  //   const response = (activityListings);
  //   setActivities(response.data);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   fetchActivities();
  // }, activities);

  // GET CURR POSTS
  const indexOfLastActivity = currentPage * activitiesPerPage;
  const indexOfFirstActivity = indexOfLastActivity - activitiesPerPage;
  const currentActivities = activities.slice(indexOfFirstActivity, indexOfLastActivity);

  // CHANGE PAGE
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Activities activityListings={currentActivities} loading={loading} />
      <Pagination activitiesPerPage={activitiesPerPage} totalActivities={activityListings.length} paginate={paginate}/>
    </div>
  );
}

export default App;