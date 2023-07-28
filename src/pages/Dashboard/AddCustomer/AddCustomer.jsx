import SectionTitle from "../../../components/shared/SectionTitle";

const AddCustomer = () => {
  return (
    <div>
      <SectionTitle>Add a Customer</SectionTitle>
      <form className="max-w-xs mx-auto">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Customer Name</span>
          </label>
          <input
            type="text"
            placeholder="Customer Name"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Customer Email</span>
          </label>
          <input
            type="text"
            placeholder="Customer Email"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Customer Role</span>
          </label>
          <input
            type="text"
            placeholder="Customer Role"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Customer Details</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Details of the customer"
          ></textarea>
        </div>
        <button className="btn btn-success mt-5">add Customer</button>
      </form>
    </div>
  );
};

export default AddCustomer;
