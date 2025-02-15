import { motion } from "framer-motion";
import { FaSearch, FaBookOpen, FaSignInAlt } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { BsArrowRight } from "react-icons/bs";
import './About.css';

const AboutUs = () => {
  return (
    <section className="about-us">
      <h3>About Us</h3>
      <p>
        We believe in a world where knowledge is accessible to everyone. Our platform
        bridges the gap between learners and mentors, making education and skill-sharing
        effortless and engaging.
      </p>
    </section>
  );
};

export default AboutUs;