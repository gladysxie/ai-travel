import "./Item.css";

const Item = ({ product, title }) => {
  return (
    <div className="item">
      <img className="product-icon" loading="lazy" alt="" src={product} />
      <div className="m-lama-m-lama-m-lam">
        <div className="title34">{title}</div>
      </div>
    </div>
  );
};

export default Item;
