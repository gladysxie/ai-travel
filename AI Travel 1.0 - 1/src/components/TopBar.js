import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./TopBar.css";

const TopBar = () => {
  const navigate = useNavigate();

  const onTitleText16Click = useCallback(() => {
    navigate("/my-plans-page");
  }, [navigate]);

  const onFrameImageClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  return (
    <header className="top-bar2">
      <div className="title-wrapper2">
        <h2 className="title29">AI Travel</h2>
      </div>
      <div className="title-wrapper3">
        <div className="title30">Home</div>
      </div>
      <div className="title-wrapper4">
        <div className="title31" onClick={onTitleText16Click}>
          My Plans
        </div>
      </div>
      <div className="top-bar-inner1">
        <img className="star-icon" loading="lazy" alt="" src="/star-1.svg" />
      </div>
      <img
        className="top-bar-child1"
        loading="lazy"
        alt=""
        src="/frame-427318908@2x.png"
        onClick={onFrameImageClick}
      />
    </header>
  );
};

export default TopBar;
