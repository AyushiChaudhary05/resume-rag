import React, { useState } from "react";

function Upload() {
  const [status, setStatus] = useState("");

  const uploadResumes = () => {
    setStatus("✅ Resumés uploaded successfully!");
  };

  return (
    <div className="container">
      <h1>Upload Resumés</h1>
      <input type="file" multiple />
      <button onClick={uploadResumes}>Upload</button>
      <div id="uploadStatus">{status}</div>
    </div>
  );
}

export default Upload;
