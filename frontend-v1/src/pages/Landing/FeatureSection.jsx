import { motion } from "framer-motion";
import "./Feature.css";
import peer from "../../assets/peer.jpg";
import barter from "../../assets/barter.jpg";
import live from "../../assets/live.jpg";
import rec from "../../assets/recorded.jpg";
import req from "../../assets/req.jpg";
import res from "../../assets/res.jpg";

const features = [
  {
    img: peer,
    text: "Peer-To-Peer Communication",
    des: "Enables direct interaction between users for real-time learning and collaboration. Facilitates discussions, Q&A sessions, and feedback exchanges.",
  },
  {
    img: barter,
    text: "Barter Based Skill Share",
    des: "Users exchange skills instead of money (e.g., teach coding to learn graphic design). Promotes collaborative learning and reduces financial barriers.",
  },
  {
    img: live,
    text: "Live Learning Lessons",
    des: "Interactive live sessions where users teach or learn in real-time. Supports screen sharing, chat, and video conferencing for an immersive experience.",
  },
  {
    img: rec,
    text: "Pre-Recorded Video Library",
    des: "A repository of recorded sessions and tutorials for on-demand learning. Ideal for users who prefer self-paced learning or cannot attend live sessions.",
  },
  {
    img: req,
    text: "Request Based Learning",
    des: "Users can post requests for specific topics or skills they want to learn. The community responds by creating content or hosting sessions to fulfill these requests.",
  },
  {
    img: res,
    text: "Easy Resource Sharing",
    des: "A platform for users to share, download, or sell educational resources like books, notes, and study materials. Promotes affordability and sustainability by reusing resources.",
  },
];

const FeatureSection = () => {
  return (
    <section className="feature-section">
      <h3 className="feature-title">Features</h3>

      <div className="feature-container">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={`feature-item ${index % 2 === 0 ? "left-aligned" : "right-aligned"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} // Slide in from left or right
            whileInView={{ opacity: 1, x: 0 }} // Slide to center
            transition={{ duration: 0.8, delay: index * 0.2 }} // Staggered delay
            viewport={{ once: true }} // Animate only once
          >
            {/* Image container */}
            <div className="feature-image-container">
              <img src={feature.img} alt={feature.text} className="feature-image" />
            </div>

            {/* Content container */}
            <div className="feature-content">
              <p className="feature-text">{feature.text}</p>
              <motion.div
                initial={{ opacity: 0, y: 10 }} // Fade in and slide up
                whileInView={{ opacity: 1, y: 0 }} // Animate to final position
                transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }} // Delay after the main animation
                viewport={{ once: true }} // Animate only once
              >
                <div className="feature-description">{feature.des}</div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;