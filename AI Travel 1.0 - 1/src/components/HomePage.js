import TopBar from "./TopBar";
import Section3 from "./Section3";
import FrameComponent1 from "./FrameComponent1";
import Section2 from "./Section2";
import Section1 from "./Section1";
import Section from "./Section";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <img className="image-2-icon" alt="" src="/image-2@2x.png" />
      <TopBar />
      <Section3 />
      <section className="home-page-inner">
        <div className="frame-parent6">
          <div className="description-wrapper">
            <div className="description">
              Your Smarter Travel Partner: Navigate with Precision, Discover
              with Ease.
            </div>
          </div>
          <div className="frame-child4" />
          <h1 className="title10">Explore Your Next Adventure</h1>
        </div>
      </section>
      <FrameComponent1 />
      <Section2 />
      <Section1 />
      <Section />
      <section className="section-wrapper">
        <div className="section1">
          <div className="list-item-container">
            <div className="frame-parent7">
              <div className="title-wrapper1">
                <h1 className="title11">User evaluation</h1>
              </div>
              <div className="card-parent">
                <div className="card">
                  <div className="avatar" />
                  <div className="card-inner">
                    <div className="title-parent1">
                      <div className="title12">HappyTraveler123</div>
                      <div className="frame-wrapper4">
                        <img
                          className="frame-icon"
                          loading="lazy"
                          alt=""
                          src="/frame-427318817.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="title13">
                    Amazing experience with AI Travel! Highly recommended.
                  </div>
                </div>
                <div className="card1">
                  <div className="avatar1" />
                  <div className="card-child">
                    <div className="title-parent2">
                      <div className="title14">AdventureSeeker1</div>
                      <div className="frame-wrapper5">
                        <img
                          className="frame-child5"
                          loading="lazy"
                          alt=""
                          src="/frame-427318817-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="title15">
                    <p className="very-good-website">{`Very good website, made my trip full of fun `}</p>
                    <p className="love-from-china">love from china</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="section-item"
            loading="lazy"
            alt=""
            src="/vector-200.svg"
          />
        </div>
      </section>
      <section className="home-page-child">
        <div className="title-parent3">
          <div className="title16">© 2024 AI Travel. All rights reserved.</div>
          <div className="title17">Privacy Policy</div>
          <div className="title18">{`Terms & Conditions`}</div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
