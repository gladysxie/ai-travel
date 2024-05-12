import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FrameComponent11.css";

const FrameComponent1 = () => {
  const navigate = useNavigate();

  const onPrimaryButtonContainerClick = useCallback(() => {
    navigate("/trip-planner-page");
  }, [navigate]);

  return (
    <section className="frame-section">
      <div className="title-parent5">
        <h1 className="title32">
          <p className="blank-line2">&nbsp;</p>
          <p className="unlock-new-adventures">
            Unlock New Adventures, Tailored for You.
          </p>
        </h1>
        <div className="description-container">
          <div className="description1">
            AI Travel offers intuitive trip planning powered by artificial
            intelligence, optimizing routes, accommodations, and activities for
            seamless travel experiences.
          </div>
        </div>
        <div className="primary-button-wrapper">
          <div
            className="primary-button"
            onClick={onPrimaryButtonContainerClick}
          >
            <div className="get-started" />
            <h1 className="get-started1">Get Started</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
