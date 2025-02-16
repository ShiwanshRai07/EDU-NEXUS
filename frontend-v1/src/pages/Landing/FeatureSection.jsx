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
    des: "Our platform enables direct, real-time interaction between users, fostering a collaborative learning environment. Engage in meaningful discussions, participate in Q&A sessions, and exchange feedback with peers from around the world. Whether you're a beginner or an expert, our peer-to-peer communication tools make learning interactive and engaging.",
  },
  {
    img: barter,
    text: "Barter Based Skill Share",
    des: "Say goodbye to financial barriers! With our barter-based skill-sharing system, users can exchange skills without monetary transactions. Teach coding to someone in exchange for graphic design lessons, or share your expertise in photography to learn a new language. It's all about collaborative growth and mutual learning.",
  },
  {
    img: live,
    text: "Live Learning Lessons",
    des: "Experience the power of real-time learning with our interactive live sessions. Host or join lessons on a wide range of topics, supported by features like screen sharing, live chat, and video conferencing. Whether you're teaching or learning, our platform ensures an immersive and engaging experience.",
  },
  {
    img: rec,
    text: "Pre-Recorded Video Library",
    des: "Access a vast repository of pre-recorded sessions and tutorials tailored to your learning needs. Our video library is perfect for self-paced learners or those who can't attend live sessions. From beginner guides to advanced techniques, you'll find everything you need to master new skills at your own pace.",
  },
  {
    img: req,
    text: "Request Based Learning",
    des: "Have a specific topic or skill you want to learn? Post a request, and our community will respond by creating content or hosting sessions tailored to your needs. Whether it's a niche subject or a trending skill, our request-based learning system ensures you get the knowledge you're looking for.",
  },
  {
    img: res,
    text: "Easy Resource Sharing",
    des: "Share, download, or sell educational resources like books, notes, and study materials on our platform. Our resource-sharing system promotes affordability and sustainability by encouraging the reuse of materials. Whether you're looking for textbooks, lecture notes, or practice exams, you'll find it all here.",
  },
];

const FeatureSection = () => {
  return (
    <section className="feature-section1">
      <h3 className="feature-title">Features</h3>

      <div className="feature-container1">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={`feature-item1 ${index % 2 === 0 ? "left-aligned" : "right-aligned"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} // Slide in from left or right
            whileInView={{ opacity: 1, x: 0 }} // Slide to center
            transition={{ duration: 0.8, delay: index * 0.2 }} // Staggered delay
            viewport={{ once: true }} // Animate only once
          >
            {/* Image container */}
            <div className="feature-image-container">
              <img src={feature.img} alt={feature.text} className="feature-image1" />
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
                <div className="feature-description1">{feature.des}</div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;