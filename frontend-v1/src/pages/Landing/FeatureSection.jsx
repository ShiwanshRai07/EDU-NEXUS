import "./Feature.css";
import peer from "../../assets/peer.jpg";
import barter from "../../assets/barter.jpg";
import live from "../../assets/live.jpg";
import rec from "../../assets/recorded.jpg";

const FeatureSection = () => {
return (
<section className="feature-section">
 <h3 className="feature-title">Features</h3>

 <div className="feature-container">
 {/* Left Side (Moto Section or Features) */}
 <div className="feature-content">
<div className="feature-item">
 <img src={peer} alt="Live Barter Skill Exchange" className="feature-image" />
<p className="feature-text">Peer-To-Peer Communication</p>
 </div>

<div className="feature-item reverse">
 <img src={barter} alt="Pre-Recorded Lessons" className="feature-image" />
 <p className="feature-text">Barter Based Skill Share</p>
</div>

 <div className="feature-item">
 <img src={live} alt="Request a Lesson" className="feature-image" />
 <p className="feature-text">Live Learning Lesson</p>
 </div>
 </div>

 {/* Vertical Divider in the Middle
<div className="vertical-divider"></div> */}

 {/* Right Side (More Features) */}
 <div className="feature-content">
 <div className="feature-item">
<img src={rec} alt="Book & Notes Exchange" className="feature-image" />
<p className="feature-text">Pre-recorded video library</p>
</div>

 <div className="feature-item reverse">
 <img src="/feature5.png" alt="Interactive Learning Hub" className="feature-image" />
 <p className="feature-text">Interactive Learning Hub</p>
</div>
</div>
</div>
</section>
);
};

export default FeatureSection;
