import "./Cart.css";
const Cart = ({ cartItem }) => {
  return (
    <div className="cart-container">
      <div>
        <img
          src={cartItem.img_url}
          alt="react-icon"
          height="130vh"
          width="100%"
        />
      </div>
      <div className="cart-detail">
        <b>{cartItem.name}</b>
        <p>{cartItem.price}</p>
        <button>REMOVE</button>
      </div>
    </div>
  );
};
export default Cart;
