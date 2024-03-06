import "./Hero.css";
import Button from "react-bootstrap/Button";

const Hero = () => {
  return (
    <div className="hero-body">
      <div className="hero flex items-center justify-between">
        <div className="left flex-1 flex justify-center" data-aos="zoom-in">
          <img src="../../../public/photo1.png" alt="dp" />
        </div>
        <div className="right flex-1" data-aos="fade-up-right">
          <h6>Hello, my name is</h6>
          <h1>
            Samim Aktar <br /> <span className="and-part">and I'm a </span>{" "}
            <span className="typing">Web Developer</span>
          </h1>
          <div>
            <Button variant="outline-primary">Primary</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
