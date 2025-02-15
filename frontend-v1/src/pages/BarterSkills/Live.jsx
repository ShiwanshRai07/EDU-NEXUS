import React, { useState, useEffect } from "react";
import "./Live.css";

const LiveSessions = ({ refreshTrigger }) => {
  const [liveSessions, setLiveSessions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/live-meetings")
      .then((res) => res.json())
      .then((data) => setLiveSessions(data))
      .catch((err) => console.error("Error fetching live sessions:", err));
  }, [refreshTrigger]); // Re-fetch when a new meeting is created
  
  return (
    <div className="video-section">
      <h2>Live Sessions</h2>
      {liveSessions.length > 0 ? (
        liveSessions.map((session) => (
          <div key={session.sessionId} className="video-item">
            <img src="https://via.placeholder.com/150"  className="video-thumbnail" />
            <div className="video-info">
              <h3>{session.customRoomId}</h3>
              <p>Host: {session.roomId}</p>
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
