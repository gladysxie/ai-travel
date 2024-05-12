import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent1 from "./FrameComponent1";
import FrameComponent from "./FrameComponent";
import "./CreatedTripPlanPage.css";

const CreatedTripPlanPage = () => {
  const navigate = useNavigate();

  const onTitleText9Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onTitleText10Click = useCallback(() => {
    navigate("/my-plans-page");
  }, [navigate]);

  const onStarImageIconClick = useCallback(() => {
    navigate("/my-plans-page");
  }, [navigate]);

  return (
    <div className="created-trip-plan-page">
      <header className="top-bar">
        <h2 className="title">AI Travel</h2>
        <div className="title-wrapper">
          <div className="title1" onClick={onTitleText9Click}>
            Home
          </div>
        </div>
        <div className="top-bar-inner">
          <img
            className="frame-child"
            loading="lazy"
            alt=""
            src="/star-1.svg"
          />
        </div>
        <div className="title-container">
          <div className="title2" onClick={onTitleText10Click}>
            My Plans
          </div>
        </div>
        <div className="top-bar-child">
          <div className="frame-item" />
        </div>
      </header>
      <div className="section">
        <img
          className="section-child"
          loading="lazy"
          alt=""
          src="/vector-200.svg"
        />
      </div>
      <div className="menu" />
      <div className="menu1" />
      <div className="menu2" />
      <main className="created-trip-plan-page-inner">
        <section className="frame-parent">
          <div className="frame-group">
            <div className="created-trip-plan-wrapper">
              <h1 className="created-trip-plan">Created Trip Plan</h1>
            </div>
            <div className="frame-container">
              <div className="slice-parent">
                <div className="frame-inner" />
                <div className="container">
                  <div className="plan-your-dream-trip-with-pers-parent">
                    <div className="plan-your-dream">
                      Plan your dream trip with personalized itineraries.
                    </div>
                    <div className="frame-wrapper">
                      <div className="star-image-parent">
                        <div className="star-image">
                          <div className="days-parent">
                            <div className="days">3 days</div>
                            <div className="rectangle-div" />
                          </div>
                          <div className="parent">
                            <div className="div">2024.3.5-2024.3.7</div>
                            <div className="frame-child1" />
                          </div>
                          <div className="johor-bahru-parent">
                            <div className="johor-bahru">Johor Bahru</div>
                            <div className="frame-child2" />
                          </div>
                        </div>
                        <div className="frame-div">
                          <div className="frame-parent1">
                            <div className="title-parent">
                              <div className="title3">{` `}</div>
                              <div className="collect">Collect</div>
                              <img
                                className="star-image-icon"
                                loading="lazy"
                                alt=""
                                src="/star-1-1.svg"
                                onClick={onStarImageIconClick}
                              />
                            </div>
                            <div className="title-group">
                              <div className="title4">{` `}</div>
                              <div className="save">Save</div>
                            </div>
                          </div>
                          <div className="frame-wrapper1">
                            <div className="frame-parent2">
                              <div className="vector-wrapper">
                                <img
                                  className="vector-icon"
                                  loading="lazy"
                                  alt=""
                                  src="/vector.svg"
                                />
                              </div>
                              <div className="share">Share</div>
                              <img
                                className="vector-icon1"
                                loading="lazy"
                                alt=""
                                src="/vector-1.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container-inner">
                    <div className="vector-parent">
                      <img
                        className="rectangle-icon"
                        loading="lazy"
                        alt=""
                        src="/rectangle-4138@2x.png"
                      />
                      <div className="day-outdoor-adventure-container">
                        <p className="day-outdoor-adventure">{`3-Day Outdoor Adventure `}</p>
                        <p className="in-johor-bahru">
                          <span className="in-johor-bahru1">
                            in Johor Bahru
                          </span>
                          <span className="span">{` `}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="title-frame">
                <div className="title5">
                  <div className="title6">DAY 1</div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper2">
            <div className="frame-parent3">
              <FrameComponent1 rectangle4140="/rectangle-4140.svg" />
              <FrameComponent
                rectangle4141="/rectangle-4140.svg"
                title="DAY 2"
              />
              <FrameComponent1
                rectangle4140="/rectangle-4140-1.svg"
                propColor="#959494"
              />
              <FrameComponent
                rectangle4141="/rectangle-4140-1.svg"
                title="DAY 3"
                propPadding="0px 0px var(--padding-smi-5)"
                propBackground="linear-gradient(#959494, #959494), linear-gradient(#959494, #959494), #959494"
                propColor="#959494"
              />
              <FrameComponent1
                rectangle4140="/rectangle-4140-2.svg"
                propColor="#959494"
              />
              <div className="title-question">
                <div className="frame-parent4">
                  <div className="wrapper">
                    <div className="div1">9:30</div>
                  </div>
                  <div className="frame-wrapper3">
                    <div className="frame-parent5">
                      <div className="vector-group">
                        <img
                          className="frame-child3"
                          loading="lazy"
                          alt=""
                          src="/rectangle-4140-2.svg"
                        />
                        <h1 className="chen-xunian-cultural">
                          Chen Xunian cultural street walking tour
                        </h1>
                      </div>
                      <div className="experience-the-thrill-of-a-mor-wrapper">
                        <div className="experience-the-thrill">
                          Experience the thrill of a morning hike with
                          breathtaking views of the city and nature.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="what-do-you-think-about-the-re-wrapper">
                    <h2 className="what-do-you">
                      What do you think about the result?
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-title">
            <div className="subtitle-title">
              <div className="title7">
                © 2022 AI Travel. All rights reserved.
              </div>
              <div className="title8">Privacy Policy</div>
              <div className="title9">{`Terms & Conditions`}</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CreatedTripPlanPage;
