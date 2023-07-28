import SectionTitle from "../../../components/shared/SectionTitle";

const AddProduct = () => {
  return (
    <div>
      <SectionTitle>Add a Product</SectionTitle>
      <form className=" max-w-xs mx-auto">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            placeholder="Product Name"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product price</span>
          </label>
          <input
            type="text"
            placeholder="Product price"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Quantity</span>
          </label>
          <input
            type="text"
            placeholder="Product Quantity"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your bio</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Bio"
          ></textarea>
        </div>
        <button className="btn btn-success mt-5">add product</button>
      </form>
    </div>
  );
};

export default AddProduct;
