import { Link } from "react-router-dom";
import RQContainer from "../../components/shared/RQContainer";
import RqBtn from "../../components/shared/RqBtn";
import SectionTitle from "../../components/shared/SectionTitle";
import useCart from "../../hooks/useCart";

const Cart = () => {
  const { getCart, deleteProduct } = useCart();

  const userCart = getCart();

  const finalPrice = userCart.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <>
      <RQContainer>
        <SectionTitle>My Cart</SectionTitle>
        <div className="flex items-center justify-end gap-3">
          <p>
            Total: $<span>{finalPrice}</span>
          </p>
          <Link to="/checkout">
            <RqBtn>Checkout</RqBtn>
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="table mb-32">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Product Details</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {userCart &&
                userCart.map(
                  (
                    { product_id, name, price, stock, image_url, rating },
                    index
                  ) => (
                    <tr key={product_id}>
                      <td>{index + 1}</td>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src={image_url} alt={name} />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{name}</div>
                            <div className="text-sm opacity-50">
                              Rating:{rating}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>${price}</td>
                      <td>{stock}</td>
                      <th>
                        <button
                          onClick={() => deleteProduct(product_id)}
                          className="btn btn-warning btn-xs"
                        >
                          Delete
                        </button>
                      </th>
                    </tr>
                  )
                )}
            </tbody>
          </table>
        </div>
      </RQContainer>
    </>
  );
};

export default Cart;
