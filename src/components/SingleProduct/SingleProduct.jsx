import { Rating } from "@smastrom/react-rating";
import RqBtn from "../shared/RqBtn";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";

const SingleProduct = ({ product }) => {
  const { addToCart, cart } = useCart();

  const { product_id, name, price, stock, image_url, rating } = product;

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  console.log(cart);

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="pt-10">
        <img src={image_url} alt={name} className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title"> {name} </h2>
        <div>
          <p>
            price: <span className="font-bold text-rq-primary">${price}</span>
          </p>
          <p>
            Quantity: <span className="font-bold text-rq-primary">{stock}</span>
          </p>
        </div>
        <div className="flex gap-3 mb-6">
          <span>Rating:</span>{" "}
          <Rating style={{ maxWidth: 110 }} value={rating} readOnly />
          <span>({rating} out of 5)</span>
        </div>
        <div className="card-actions justify-between flex-nowrap">
          <RqBtn handleOnClick={() => handleAddToCart(product)}>
            Add to Cart
          </RqBtn>

          {/* for view details I use only specific one product. For dynamic product we use dynamic product id. */}
          <Link to={`/products/${product_id}`}>
            <RqBtn>View Details</RqBtn>
          </Link>
          {/* <Link to={`/products/${"SKU24680"}`}>
            <RqBtn>View Details</RqBtn>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
