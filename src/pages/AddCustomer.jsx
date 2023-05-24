import AddCustomerForm from "../components/AddCustomerForm";

const AddCustomer = ({handleInputChange, handleSubmit, state}) => {
  return <AddCustomerForm handleSubmit={handleSubmit} handleInputChange={handleInputChange} state={state}/>
}

export default AddCustomer;