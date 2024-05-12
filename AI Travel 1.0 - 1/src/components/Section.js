import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Section.css";

const Section = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  return (
    <section className="section7">
      <div className="container3">
        <h1 className="title36">Start Planning Your Vacation</h1>
        <div className="description2">
          <p className="get-ready-to">
            Get ready to embark on your dream vacation. Begin your journey by
            signing up and unlocking personalized trip plans tailored just for
            you
          </p>
        </div>
        <div className="button2" onClick={onButtonContainerClick}>
          <div className="primary">
            <div className="title37">Sign up Now</div>
          </div>
        </div>
      </div>
      <img
        className="primary-button-container"
        loading="lazy"
        alt=""
        src="/vector-200.svg"
      />
    </section>
  );
};

export default Section;
