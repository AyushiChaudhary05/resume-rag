import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import Upload from "./components/Upload";
import Search from "./components/Search";
import Jobs from "./components/Jobs";
import Candidate from "./components/Candidate";
import "./style.css";

function App() {
  return (
    <Router>
      <Header title="📂 ResumeRAG" />
      <nav style={{ textAlign: "center", margin: "15px" }}>
        <Link to="/">Upload</Link> |{" "}
        <Link to="/search">Search</Link> |{" "}
        <Link to="/jobs">Jobs</Link> |{" "}
        <Link to="/candidate">Candidate</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Upload />} />
        <Route path="/search" element={<Search />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/candidate" element={<Candidate />} />
      </Routes>
    </Router>
  );
}

export default App;

