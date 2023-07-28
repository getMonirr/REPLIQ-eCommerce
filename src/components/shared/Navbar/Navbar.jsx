import { Link, NavLink } from "react-router-dom";
import RQContainer from "../RQContainer";
import "./Navbar.css";
import RqBtn from "../RqBtn";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogout = () => {
    logOut().then(() => {
      Swal.fire("Logout", "Logout successfully", "success");
    });
  };

  const menuItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/cart">Cart</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="bg-rq-primary">
      <RQContainer>
        <div className="navbar bg-rq-primary text-white">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {menuItems}
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl hover:bg-transparent">
              REPLIQ
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{menuItems}</ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <RqBtn handleOnClick={handleLogout}>Logout</RqBtn>
            ) : (
              <Link to="/login">
                <RqBtn>Login</RqBtn>
              </Link>
            )}
          </div>
        </div>
      </RQContainer>
    </div>
  );
};

export default Navbar;
