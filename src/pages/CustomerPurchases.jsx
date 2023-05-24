import { useParams } from "react-router-dom";
import CustomerId from "../components/CustomerId";

const CustomerPurchases = ({people}) => {
  const {id} = useParams();
  return <CustomerId people={people} index={id}/>
}

export default CustomerPurchases;