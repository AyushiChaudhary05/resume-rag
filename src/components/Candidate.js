import React from "react";

function Candidate() {
  const candidate = {
    name: "Ayushi Chaudhary",
    role: "Frontend Developer",
    skills: ["React", "JavaScript", "CSS"]
  };

  return (
    <div className="container">
      <h1>Candidate Profile</h1>
      <div id="candidateInfo">
        <h3>{candidate.name}</h3>
        <p><strong>Role:</strong> {candidate.role}</p>
        <p><strong>Skills:</strong> {candidate.skills.join(", ")}</p>
      </div>
    </div>
  );
}

export default Candidate;
