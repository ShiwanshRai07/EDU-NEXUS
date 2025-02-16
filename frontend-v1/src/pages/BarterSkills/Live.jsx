import React, { useState, useEffect } from "react";
import "./Live.css";
import live from "../../assets/thumb.jpg";

const LiveSessions = ({ refreshTrigger  , onJoinMeeting }) => {
  const [liveSessions, setLiveSessions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/live-meetings")
      .then((res) => res.json())
      .then((data) => setLiveSessions(data))
      .catch((err) => console.error("Error fetching live sessions:", err));
  }, [refreshTrigger]); // Re-fetch when a new meeting is created
  
  return (
    <div className="video-section">
      <h2 className="meet">Live Sessions</h2>
      {liveSessions.length > 0 ? (
        liveSessions.map((session) => (
          <div key={session.sessionId} className="video-item">
            <img src={live}  className="video-thumbnail" />
            <div className="video-info">
              <h3>{session.customRoomId}</h3>
              <p>Host: {session.roomId}</p>
              <button 
                className="join-button"
                onClick={() => onJoinMeeting(session.customRoomId)} // Navigate to VideoCall
              >
                Join Meeting
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="he">No live sessions available.</p>
      )}
    </div>
  );
};
//git filter-branch --force --index-filter "git rm --cached --ignore-unmatch .env" --prune-empty --tag-name-filter cat -- --all

export default LiveSessions;
