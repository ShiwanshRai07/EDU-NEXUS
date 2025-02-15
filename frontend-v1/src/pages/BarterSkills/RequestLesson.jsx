import React, { useState } from "react";
import "./Req.css"; // Make sure to style it correctly

const StudyRequests = () => {
  const [requests, setRequests] = useState([
    { id: 1, user: "Anonymous", title: "Looking for Python Help", time: "3 days ago" },
    { id: 2, user: "Anonymous", title: "Need Assistance in Physics", time: "a day ago" },
  ]);
  const [newRequest, setNewRequest] = useState("");

  const postRequest = () => {
    if (newRequest.trim() !== "") {
      const newPost = {
        id: requests.length + 1,
        user: "You",
        title: newRequest,
        time: "Just now",
      };
      setRequests([newPost, ...requests]);
      setNewRequest("");
    }
  };

  return (
    <div className="requests-section">
      <h2>Study Requests</h2>
      
      {/* Input Box for posting new requests */}
      <div className="post-request">
        <input
          type="text"
          placeholder="Write your request..."
          value={newRequest}
          onChange={(e) => setNewRequest(e.target.value)}
        />
        <button onClick={postRequest}>Post</button>
      </div>

      {/* List of study requests */}
      <div className="requests-list">
        {requests.map((req) => (
          <div key={req.id} className="request-item">
            <div className="request-header">
              <span className="user">{req.user}</span>
              <span className="time">{req.time}</span>
            </div>
            <p className="request-title">{req.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyRequests;
