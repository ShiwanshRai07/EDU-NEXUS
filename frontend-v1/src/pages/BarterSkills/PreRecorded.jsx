import React, { useState, useEffect } from "react";
import "./Pre.css";

const PreRecordedVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("http://your-backend-api.com/pre-recorded-videos")
      .then((res) => res.json())
      .then((data) => setVideos(data))
      .catch((err) => console.error("Error fetching videos:", err));
  }, []);

  return (
    <div className="video-section">
      <h2>Pre-Recorded Videos</h2>
      {videos.length > 0 ? (
        videos.map((video) => (
          <div key={video.id} className="video-item">
            <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
            <div className="video-info">
              <h3>{video.title}</h3>
              <p>Instructor: {video.instructor}</p>
              <a href={video.url} target="_blank" rel="noopener noreferrer" className="video-btn">
                Play Video
              </a>
            </div>
          </div>
        ))
      ) : (
        <p>No pre-recorded videos available.</p>
      )}
    </div>
  );
};

export default PreRecordedVideos;
