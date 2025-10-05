import React, { useState } from "react";

function Jobs() {
  const [jobDesc, setJobDesc] = useState("");
  const [jobs, setJobs] = useState([]);

  const addJob = () => {
    if (jobDesc.trim() !== "") {
      setJobs([...jobs, jobDesc]);
      setJobDesc("");
    }
  };

  return (
    <div className="container">
      <h1>Job Descriptions</h1>
      <textarea 
        value={jobDesc}
        onChange={(e) => setJobDesc(e.target.value)}
        placeholder="Enter job description"
      />
      <button onClick={addJob}>Add Job</button>
      <div id="jobList">
        {jobs.map((j, i) => (
          <div key={i}>{j}</div>
        ))}
      </div>
    </div>
  );
}

export default Jobs;
