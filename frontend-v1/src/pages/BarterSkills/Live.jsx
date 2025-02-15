import React, { useState, useEffect } from "react";
import "./Live.css";

const LiveSessions = ({ refreshTrigger }) => {
  const [liveSessions, setLiveSessions] = useState([]);

  useEffect(() => {
    fetch("http://your-backend-api.com/live-sessions")
      .then((res) => res.json())
      .then((data) => setLiveSessions(data))
      .catch((err) => console.error("Error fetching live sessions:", err));
  }, [refreshTrigger]); // Re-fetch when a new meeting is created

  return (
    <div className="video-section">
      <h2>Live Sessions</h2>
      {liveSessions.length > 0 ? (
        liveSessions.map((session) => (
          <div key={session.id} className="video-item">
            <img src="https://via.placeholder.com/150" alt={session.title} className="video-thumbnail" />
            <div className="video-info">
              <h3>{session.title}</h3>
              <p>Host: {session.host}</p>
              <a href={session.joinLink} target="_blank" rel="noopener noreferrer" className="video-btn">
                Join Live
              </a>
            </div>
          </div>
        ))
      ) : (
        <p>No live sessions available.</p>
      )}
    </div>
  );
};

export default LiveSessions;
