export default function Products(props) {
  return (
    <>
      <div className="product-card">
        <div className="product-img-wrapper">
          <img src={props.img} className="product-img"></img>
        </div>
        <div className="product-name">
          <label>{props.name}</label>
        </div>
        <div className="product price">
          <label>
            <b>Rs. {props.price}</b>
          </label>
        </div>
      </div>
    </>
  );
}
