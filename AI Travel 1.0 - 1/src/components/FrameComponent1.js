import { useMemo } from "react";
import "./FrameComponent1.css";

const FrameComponent1 = ({ rectangle4140, propColor }) => {
  const startYourDayStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="frame-wrapper8">
      <div className="title-bar-parent">
        <div className="title-bar">8:00</div>
        <div className="frame-wrapper9">
          <div className="vector-container">
            <img
              className="frame-child8"
              loading="lazy"
              alt=""
              src={rectangle4140}
            />
            <h1 className="local-breakfast-at">
              Local Breakfast at lmbi Market
            </h1>
          </div>
        </div>
        <div className="first-plan">
          <div className="start-your-day" style={startYourDayStyle}>
            Start your day with a traditional Malaysian breakfast to fuel up for
            the adventures ahead.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
