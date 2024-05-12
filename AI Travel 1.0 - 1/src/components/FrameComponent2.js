import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FrameComponent2.css";

const FrameComponent2 = () => {
  const navigate = useNavigate();

  const onTailorYourPlanClick = useCallback(() => {
    navigate("/created-trip-plan-page");
  }, [navigate]);

  return (
    <div className="frame-wrapper11">
      <div className="frame-parent11">
        <div className="frame-wrapper12">
          <button className="rectangle-parent">
            <div className="frame-child10" />
            <div className="tailor-your-plan" onClick={onTailorYourPlanClick}>
              Tailor your plan
            </div>
          </button>
        </div>
        <div className="title-parent7">
          <h3 className="title42">© 2022 AI Travel. All rights reserved.</h3>
          <h3 className="title43">Privacy Policy</h3>
          <h3 className="title44">{`Terms & Conditions`}</h3>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
