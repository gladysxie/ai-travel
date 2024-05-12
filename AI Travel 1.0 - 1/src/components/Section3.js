import { useMemo } from "react";
import "./Section3.css";

const Section3 = ({
  propWidth,
  propMargin,
  propPosition,
  propTop,
  propRight,
  propLeft,
  propPadding,
  propAlignSelf,
}) => {
  const sectionStyle = useMemo(() => {
    return {
      width: propWidth,
      margin: propMargin,
      position: propPosition,
      top: propTop,
      right: propRight,
      left: propLeft,
      padding: propPadding,
      alignSelf: propAlignSelf,
    };
  }, [
    propWidth,
    propMargin,
    propPosition,
    propTop,
    propRight,
    propLeft,
    propPadding,
    propAlignSelf,
  ]);

  return (
    <div className="section4" style={sectionStyle}>
      <img
        className="section-child1"
        loading="lazy"
        alt=""
        src="/vector-200.svg"
      />
    </div>
  );
};

export default Section3;
