import "./FrameComponent3.css";

const FrameComponent3 = ({ title }) => {
  return (
    <div className="frame-wrapper10">
      <div className="title-parent6">
        <div className="title41">{title}</div>
        <div className="textfield4">
          <input
            className="text5"
            placeholder="Enter budget range"
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
