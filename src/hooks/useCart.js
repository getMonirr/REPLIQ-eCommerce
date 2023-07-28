import Swal from "sweetalert2";

const useCart = () => {
  const addToCart = (product) => {
    const storeCart = JSON.parse(localStorage.getItem("cart")) || [];
    const userCart = [...storeCart, product];
    // set cart to local storage
    localStorage.setItem("cart", JSON.stringify(userCart));

    Swal.fire("Product added", "Your product has been added", "success");
  };

  // get cart from local storage
  const getCart = () => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  };

  // delete a product from cart
  const deleteProduct = (id) => {
    const storeCart = JSON.parse(localStorage.getItem("cart"));

    const restCart = storeCart.filter((item) => item.product_id !== id);
    // set cart to local storage
    localStorage.setItem("cart", JSON.stringify(restCart));

    Swal.fire("Delete product", "Your product has been deleted", "success");
  };

  return { addToCart, getCart, deleteProduct };
};

export default useCart;
