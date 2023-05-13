import "./Productdetail.css";
import { useNavigate, useParams } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { BsLightningFill } from "react-icons/bs";
import axios from "axios";
const ProductDetail = ({ product }) => {
  const { product_id } = useParams();
  const navigate = useNavigate();
  const addToCartHandler = async () => {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      try {
        await axios
          .post(
            `${process.env.REACT_APP_BACKEND_URL}/api/products/cart/${product_id}`,
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error.response.data);
          });
      } catch (error) {
        console.log(error.response.data);
      }
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="details">
      <div className="product-icon">
        <div>
          <img
            src={product.img_url}
            alt="react logo"
            height="475vh"
            width="100%"
          />
        </div>
        <div className="btn">
          <button className="add" onClick={addToCartHandler}>
            <FaShoppingCart size="1.3rem" />
            ADD TO CART
          </button>
          <button className="buy">
            <BsLightningFill size="1.2rem" />
            BUY NOW
          </button>
        </div>
      </div>
      <div className="product-describe">
        <b>{product.name ? product.name : ""}</b>
        <p>
          <b>{product.model}</b>
        </p>
        <p>
          <b>Price:</b> {product.price}
        </p>
        <p>
          <b>Rating:</b>
          {product.rating}
        </p>
        <p>
          <b>Category : </b> {product.category}
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;
