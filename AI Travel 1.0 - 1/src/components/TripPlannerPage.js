import TopBar1 from "./TopBar1";
import FrameComponent3 from "./FrameComponent3";
import FrameComponent2 from "./FrameComponent2";
import "./TripPlannerPage.css";

const TripPlannerPage = () => {
  return (
    <div className="trip-planner-page">
      <TopBar1 />
      <section className="trip-planner-page-inner">
        <form className="frame-form">
          <div className="frame-parent8">
            <div className="trip-planner-wrapper">
              <h1 className="trip-planner">Trip Planner</h1>
            </div>
            <div className="title25">
              <p className="blank-line">&nbsp;</p>
              <p className="destination">Destination</p>
            </div>
          </div>
          <div className="frame-parent9">
            <div className="textfield-parent">
              <div className="textfield">
                <div className="text">Enter destination</div>
              </div>
              <input className="frame-input" placeholder="Date " type="text" />
            </div>
            <div className="frame-wrapper6">
              <div className="from-to-parent">
                <div className="from-to">
                  <p className="blank-line1">&nbsp;</p>
                  <p className="from">From To</p>
                </div>
                <div className="textfield1">
                  <div className="text-parent">
                    <div className="text1">Select date</div>
                    <img
                      className="polygon-icon"
                      loading="lazy"
                      alt=""
                      src="/polygon-1.svg"
                    />
                  </div>
                </div>
                <div className="textfield2">
                  <div className="text-group">
                    <div className="text2">Select date</div>
                    <img className="frame-child6" alt="" src="/polygon-1.svg" />
                  </div>
                </div>
              </div>
            </div>
            <FrameComponent3 title="Catering budget (per person)" />
            <FrameComponent3 title="Accommodation budget (per night)" />
            <div className="frame-wrapper7">
              <div className="title-parent4">
                <div className="title26">Travel Style</div>
                <div className="textfield3">
                  <div className="text-container">
                    <div className="text3">Select Style</div>
                    <img
                      className="frame-child7"
                      alt=""
                      src="/polygon-1-2.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FrameComponent2 />
        </form>
      </section>
    </div>
  );
};

export default TripPlannerPage;
