import { Rating } from "@smastrom/react-rating";
import RqBtn from "../../components/shared/RqBtn";
import SectionTitle from "../../components/shared/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  // we use dynamic id for loading single product using useParams hook
  const { id } = useParams();

  const { data: product } = useQuery({
    queryKey: ["singleProduct", id],
    queryFn: () => axios.get("/singleProduct.json").then((res) => res?.data),
  });

  return (
    <>
      <SectionTitle>Product Details</SectionTitle>
      {product && (
        <div className="card lg:card-side bg-base-100 shadow-xl w-6/12 mx-auto my-32">
          <figure className="w-2/5 mx-auto p-4">
            <img src={product?.image_url} alt={product?.name} />
          </figure>
          <div className="card-body w-1/2">
            <h2 className="card-title">{product?.name}</h2>
            <p>{product?.description}</p>
            <div>
              <p>
                price:
                <span className="font-bold text-rq-primary">
                  ${product?.price}
                </span>
              </p>
              <p>
                Quantity:
                <span className="font-bold text-rq-primary">
                  {product?.stock}
                </span>
              </p>
            </div>
            <div className="flex gap-3 mb-6">
              <span>Rating:</span>
              <Rating
                style={{ maxWidth: 110 }}
                value={product?.rating}
                readOnly
              />
              <span>({product?.rating} out of 5)</span>
            </div>
            <div className="card-actions justify-end">
              <RqBtn>Add to cart</RqBtn>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
