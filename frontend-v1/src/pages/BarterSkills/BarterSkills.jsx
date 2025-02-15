import React, { useState, useEffect } from "react";
import LiveSessions from "./Live.jsx";
import CreateMeeting from "./CreateMeeting.jsx";
import PreRecordedVideos from "./PreRecorded.jsx";
import StudyRequests from "./RequestLesson.jsx";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("live"); // Default is "live"
  const [showComponent, setShowComponent] = useState(true); // Initially true for LiveSessions

  // Effect to hide LiveSessions when switching tabs
  useEffect(() => {
    if (activeTab !== "live") {
      setShowComponent(false);
    } else {
      setShowComponent(true);
    }
  }, [activeTab]); // Runs whenever activeTab changes

  return (
    <div className="content">
      {/* Tab Navigation */}
      <div className="tabs">
        <button onClick={() => setActiveTab("live")}>Live</button>
        <button onClick={() => setActiveTab("pre-recorded")}>Pre-Recorded</button>
        <button onClick={() => setActiveTab("requests")}>Requests</button>
      </div>

      {/* Meeting Controls */}
      <div>
        {showComponent && <LiveSessions />}
      </div>

      {/* Conditional Rendering Based on Active Tab */}
      {activeTab === "live" && <CreateMeeting />}
      {activeTab === "pre-recorded" && <PreRecordedVideos />}
      {activeTab === "requests" && <StudyRequests />}
    </div>
  );
};

export default Dashboard;
