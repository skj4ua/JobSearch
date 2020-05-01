import React from 'react';
import './App.css';
import Jobs from './Jobs'

const JOB_API_URI ="http://localhost:3001/jobs"


async function fetchJobs(updateCb){
  const res = await fetch(JOB_API_URI);
  const json = await res.json();
  updateCb(json)
}
function App() {
  const [jobList,updateJobs] = React.useState([]);
  React.useEffect(()=>{
    fetchJobs(updateJobs);
  },[])

  return (
    <div className="App">
      <Jobs jobs={jobList}/>
    </div>
  );
}

export default App;
