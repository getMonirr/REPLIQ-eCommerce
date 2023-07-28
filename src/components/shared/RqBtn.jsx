const RqBtn = ({ children, handleOnClick, type }) => {
  return (
    <button
      type={type}
      onClick={handleOnClick}
      className="btn bg-rq-secondary text-rq-primary border-none text-xs xl:px-4 hover:bg-rq-primary hover:text-rq-secondary btn-sm"
    >
      {children}
    </button>
  );
};

export default RqBtn;
