import { FcHome } from "react-icons/fc";
import { FaShoppingCart,FaCartPlus,FaUserPlus,FaListAlt,FaListOl } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const dashboardItems = [
  {
    name: "Admin Home",
    path: "/dashboard",
    icon: FcHome,
  },
  {
    name: "Customer List",
    path: "/dashboard/customers",
    icon: FaListAlt,
  },
  {
    name: "Order List",
    path: "/dashboard/orders",
    icon: FaListOl,
  },
  {
    name: "Product List",
    path: "/dashboard/products",
    icon: FaShoppingCart,
  },
  {
    name: "Add Product",
    path: "/dashboard/add-product",
    icon: FaCartPlus,
  },
  {
    name: "Add Customer",
    path: "/dashboard/add-customer",
    icon: FaUserPlus,
  },
];

const Sidebar = () => {
  return (
    <ul className="space-y-4">
      {dashboardItems.map(({ name, path, icon: Icon }) => (
        <li key={name}>
          <NavLink to={path}>
            <button className="btn w-full justify-start">
              <Icon size={25} />
              {name}
            </button>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
