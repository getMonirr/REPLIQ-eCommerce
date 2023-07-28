import { useForm } from "react-hook-form";
import RQContainer from "../../components/shared/RQContainer";
import RqBtn from "../../components/shared/RqBtn";
import SectionTitle from "../../components/shared/SectionTitle";
import useCart from "../../hooks/useCart";
import Swal from "sweetalert2";

const Checkout = () => {
  const { getCart } = useCart();

  const userCart = getCart();

  const finalPrice = userCart.reduce((acc, curr) => acc + curr.price, 0);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    Swal.fire("payment", "Your payment success", "success");
    reset();
    localStorage.removeItem("cart");
  };

  return (
    <RQContainer>
      <SectionTitle>Checkout</SectionTitle>
      <form
        className="mx-auto max-w-sm mb-32 space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-bold">Card Number </span>
          </label>
          <input
            type="text"
            placeholder="1254 2568 5255 2568"
            className="input input-bordered w-full max-w-xs"
            {...register("number", { required: true })}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-bold">Name </span>
          </label>
          <input
            type="text"
            placeholder="John doe"
            className="input input-bordered w-full max-w-xs"
            {...register("name", { required: true })}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-bold">Expiry </span>
          </label>
          <input
            type="text"
            placeholder="MM/YY"
            className="input input-bordered w-full max-w-xs"
            {...register("expiry", { required: true })}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-bold">CVC</span>
          </label>
          <input
            type="text"
            placeholder="123"
            className="input input-bordered w-full max-w-xs"
            {...register("cvc", { required: true })}
          />
        </div>
        <div className="mt-4">
          <RqBtn type="submit">Pay ${finalPrice}</RqBtn>
        </div>
      </form>
    </RQContainer>
  );
};

export default Checkout;
