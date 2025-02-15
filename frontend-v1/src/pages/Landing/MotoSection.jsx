import './Moto.css';
import icon from '../../assets/icon.png';
  

 function GradientText({
  children,
  className = "",
  colors = ["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"], // Default colors
  animationSpeed = 8, // Default animation speed in seconds
  showBorder = false, // Default overlay visibility
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div className={`animated-gradient-text ${className}`}>
      {showBorder && <div className="gradient-overlay" style={gradientStyle}></div>}
      <div className="text-content" style={gradientStyle}>{children}</div>
    </div>
  );
}
<GradientText
  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
  animationSpeed={3}
  showBorder={false}
  className="custom-class"
>
  Add a splash of color!
</GradientText>


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
