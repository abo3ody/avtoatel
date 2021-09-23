import { useParams } from "react-router-dom";
import { products } from "../utils/constants";

function SingleProduct() {
   const { id } = useParams();
   //    console.log(id);
   const product = products.find((product) => product.pageName === id);
   console.log(product);
   return <h1>{product.title} page </h1>;
}

export default SingleProduct;
