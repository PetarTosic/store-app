import AppCustomers from "../components/AppCustomers";

const Customers = ({ people, onRemove }) => {
  return <AppCustomers people={people} onRemove={onRemove} />;
};

export default Customers;
