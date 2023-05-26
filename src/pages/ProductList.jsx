import { useParams } from "react-router-dom";
import ProductId from "../components/ProductId";

const ProductList = ({products, people, handleOption}) => {
  const {id} = useParams();
  return <ProductId products={products} people={people} index={id}  handleOption={handleOption}/>
}

export default ProductList;