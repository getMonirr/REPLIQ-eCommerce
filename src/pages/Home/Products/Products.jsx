import { useQuery } from "@tanstack/react-query";
import SingleProduct from "../../../components/SingleProduct/SingleProduct";
import RQContainer from "../../../components/shared/RQContainer";
import SectionTitle from "../../../components/shared/SectionTitle";
import axios from "axios";

const Products = () => {
  // use react query and axios to get all products
  const { data: products } = useQuery({
    queryKey: ["allProducts"],
    queryFn: () => axios.get("/Products.json").then((res) => res?.data),
  });

  return (
    <RQContainer>
      <SectionTitle>Our Products</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 xl:gap-8 mb-32">
        {(products &&
          Array.isArray(products) &&
          products.map((product) => (
            <SingleProduct key={product.product_id} product={product} />
          ))) ||
          "No products available"}
      </div>
    </RQContainer>
  );
};

export default Products;
