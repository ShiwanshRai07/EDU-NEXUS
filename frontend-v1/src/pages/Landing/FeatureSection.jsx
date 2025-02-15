import "./Feature.css";
import peer from "../../assets/peer.jpg";
import barter from "../../assets/barter.jpg";
import live from "../../assets/live.jpg";
import rec from "../../assets/recorded.jpg";
import req from "../../assets/req.jpg";
import res from "../../assets/res.jpg";

const features = [
  { img: peer, text: "Peer-To-Peer Communication" },
  { img: barter, text: "Barter Based Skill Share" },
  { img: live, text: "Live Learning Lessons" },
  { img: rec, text: "Pre-Recorded Video Library" },
  { img: req, text: "Request Based Learning" },
  { img: res, text: "Easy Resource Sharing" }
];

const FeatureSection = () => {
  return (
    <section className="feature-section">
      <h3 className="feature-title">Features</h3>

      <div className="feature-container">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`feature-item ${index % 2 === 0 ? "" : "reverse"}`}
          >
            <img src={feature.img} alt={feature.text} className="feature-image" />
            <p className="feature-text">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
