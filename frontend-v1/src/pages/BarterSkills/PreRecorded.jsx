import React from "react";
import "./Pre.css";
import logo1 from "../../assets/sada.webp";
import logo2 from "../../assets/sada.webp"
const PreRecordedVideos = () => {
  const videos = [
    {
      id: 1,
      title: "Introduction to React",
      instructor: "John Doe",
      thumbnail: logo1, // Replace with actual image path
      url: "https://www.example.com/react-course", // Replace with actual video link
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      instructor: "Jane Smith",
      thumbnail: logo2, // Replace with actual image path
      url: "https://www.example.com/js-course", // Replace with actual video link
    },
  ];

  return (
    <div className="video-section">
      <h2 className="meet">Pre-Recorded Videos</h2>
      
      {videos.map((video) => (
        <div key={video.id} className="video-item">
          <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
          <div className="video-info">
            <h3>{video.title}</h3>
            <p>Instructor: {video.instructor}</p>
            <a href={video.url} target="_blank" rel="noopener noreferrer" className="video-btn">
              Watch Now
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PreRecordedVideos;
