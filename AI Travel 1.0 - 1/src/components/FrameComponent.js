import { useMemo } from "react";
import "./FrameComponent.css";

const FrameComponent = ({
  rectangle4141,
  title,
  propPadding,
  propBackground,
  propColor,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const divStyle = useMemo(() => {
    return {
      background: propBackground,
    };
  }, [propBackground]);

  const experienceTheThrillStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="frame-parent10" style={frameDivStyle}>
      <div className="frame">
        <div className="div2" style={divStyle}>
          9:30
        </div>
      </div>
      <div className="second-plan">
        <div className="cultural-walking-tour-wrapper">
          <div className="cultural-walking-tour">
            <img
              className="cultural-walking-tour-child"
              loading="lazy"
              alt=""
              src={rectangle4141}
            />
            <h1 className="chen-xunian-cultural1">
              Chen Xunian cultural street walking tour
            </h1>
          </div>
        </div>
        <div className="hike">
          <div
            className="experience-the-thrill1"
            style={experienceTheThrillStyle}
          >
            Experience the thrill of a morning hike with breathtaking views of
            the city and nature.
          </div>
        </div>
        <div className="title27">
          <div className="title28">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
