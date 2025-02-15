import React, { useState } from "react";
import LiveMeetings from "./Live.jsx";
import PreRecordedVideos from "./PreRecorded.jsx";
import StudyRequests from "./RequestLesson.jsx";
import  "./BarterSkills.css";

const BarterSkills = () => {
  const [activeTab, setActiveTab] = useState("live");

  return (
    <div className="container">
      <span id="yes">Barter Skills</span>
      <nav className="nav-buttons">
        <button onClick={() => setActiveTab("live")} className={activeTab === "live" ? "active" : ""}>Live</button>
        <button onClick={() => setActiveTab("pre-recorded")} className={activeTab === "pre-recorded" ? "active" : ""}>Pre-Recorded</button>
        <button onClick={() => setActiveTab("requests")} className={activeTab === "requests" ? "active" : ""}>Requests</button>
      </nav>
      <div className="content">
        {activeTab === "live" && <LiveMeetings />}
        {activeTab === "pre-recorded" && <PreRecordedVideos />}
        {activeTab === "requests" && <StudyRequests />}
    
      </div>
    </div>
  );
};

export default BarterSkills;
