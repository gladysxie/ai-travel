import Item from "./Item";
import "./Section1.css";

const Section1 = () => {
  return (
    <section className="section6">
      <div className="container2">
        <h1 className="title35">Popular Travel Cities</h1>
        <div className="list">
          <Item product="/frame.svg" title="Paris" />
          <Item product="/frame-1.svg" title="Bali" />
          <Item product="/frame-2.svg" title="New York" />
        </div>
      </div>
      <img
        className="details-icon"
        loading="lazy"
        alt=""
        src="/vector-200.svg"
      />
    </section>
  );
};

export default Section1;
