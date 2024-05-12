import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Section3 from "./Section3";
import "./MyPlansPage.css";

const MyPlansPage = () => {
  const navigate = useNavigate();

  const onImage4Click = useCallback(() => {
    navigate("/created-trip-plan-page");
  }, [navigate]);

  const onTitleText4Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="my-plans-page">
      <main className="section2">
        <img
          className="section-inner"
          loading="lazy"
          alt=""
          src="/vector-200.svg"
        />
        <h3 className="my-plans">My Plans</h3>
        <img
          className="image-4-icon"
          loading="lazy"
          alt=""
          src="/image-4@2x.png"
          onClick={onImage4Click}
        />
        <img
          className="image-10-icon"
          loading="lazy"
          alt=""
          src="/image-10@2x.png"
        />
        <img
          className="image-5-icon"
          loading="lazy"
          alt=""
          src="/image-5@2x.png"
        />
        <img
          className="image-8-icon"
          loading="lazy"
          alt=""
          src="/image-8@2x.png"
        />
        <img
          className="image-9-icon"
          loading="lazy"
          alt=""
          src="/image-9@2x.png"
        />
        <img
          className="image-6-icon"
          loading="lazy"
          alt=""
          src="/image-6@2x.png"
        />
      </main>
      <header className="top-bar1">
        <h2 className="title19">AI Travel</h2>
        <div className="title20" onClick={onTitleText4Click}>
          Home
        </div>
        <img
          className="top-bar-item"
          loading="lazy"
          alt=""
          src="/star-11.svg"
        />
        <div className="title21">My Plans</div>
        <img
          className="image-1-icon"
          loading="lazy"
          alt=""
          src="/image-1@2x.png"
        />
      </header>
      <Section3
        propWidth="unset"
        propMargin="unset"
        propPosition="relative"
        propTop="unset"
        propRight="unset"
        propLeft="unset"
        propPadding="var(--padding-38xl) 0px 0px"
        propAlignSelf="stretch"
      />
      <footer className="section3">
        <div className="container1">
          <div className="title22">© 2022 AI Travel. All rights reserved.</div>
          <div className="title23">Privacy Policy</div>
          <div className="title24">{`Terms & Conditions`}</div>
        </div>
      </footer>
    </div>
  );
};

export default MyPlansPage;
