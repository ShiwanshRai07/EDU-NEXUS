import React, { useState } from "react";
import LiveMeetings from "./Live";
import PreRecordedVideos from "./PreRecorded";
import StudyRequests from "./RequestLesson";

const BarterSkills = () => {
  const [activeTab, setActiveTab] = useState("live");

  return (
    <div className="container">
      <h1>Barter Skills</h1>
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
