import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Dashboard from "../layouts/Dashboard";
import ProductList from "../pages/Dashboard/ProductList/ProductList";
import CustomerList from "../pages/Dashboard/CustomerList/CustomerList";
import OrderList from "../pages/Dashboard/OrderList/OrderList";
import AddProduct from "../pages/Dashboard/AddProduct/AddProduct";
import AddCustomer from "../pages/Dashboard/AddCustomer/AddCustomer";
import Summary from "../pages/Dashboard/Summary/Summary";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import CustomerDetails from "../pages/Dashboard/CustomerDetails/CustomerDetails";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "products/:id",
        element: <ProductDetails />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <Summary />,
      },
      {
        path: "products",
        element: <ProductList />,
      },
      {
        path: "customers",
        element: <CustomerList />,
      },
      {
        path: "orders",
        element: <OrderList />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "add-customer",
        element: <AddCustomer />,
      },
      {
        path: "customer-details",
        element: <CustomerDetails />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "registration",
    element: <Registration />,
  },
]);

export default Routers;
