import './Moto.css';
import icon from '../../assets/icon.png';

const MotoSection = () => {
  return (
    <section className="moto-section">
      <div className="moto-content">
        <h3>
          "Edu-Nexus is a one-stop, inclusive platform designed to break down financial
          and resource barriers in education and skill development."
        </h3>
        <img src={icon} alt="icon" />
      </div>
    </section>
  );
};

export default MotoSection;
