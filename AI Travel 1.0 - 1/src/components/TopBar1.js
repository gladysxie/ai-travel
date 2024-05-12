import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./TopBar1.css";

const TopBar1 = () => {
  const navigate = useNavigate();

  const onTitleText8Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onTitleText9Click = useCallback(() => {
    navigate("/my-plans-page");
  }, [navigate]);

  return (
    <header className="top-bar3">
      <div className="title-wrapper5">
        <h2 className="title38">AI Travel</h2>
      </div>
      <div className="star-button">
        <div className="title39" onClick={onTitleText8Click}>
          Home
        </div>
      </div>
      <div className="top-bar-inner2">
        <img
          className="frame-child9"
          loading="lazy"
          alt=""
          src="/star-11.svg"
        />
      </div>
      <div className="star-button1">
        <div className="title40" onClick={onTitleText9Click}>
          My Plans
        </div>
      </div>
      <img
        className="image-1-icon1"
        loading="lazy"
        alt=""
        src="/image-1@2x.png"
      />
    </header>
  );
};

export default TopBar1;
