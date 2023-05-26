import { useState } from "react";
import { Link } from "react-router-dom";

const ProductId = ({products, index, people, handleOption}) => {
  const product = products[index];

  const [state, setState] = useState({
    option: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="container mt-5">
      <div>Product name: {product.name}</div>
      <div>Product price: {product.price}</div>
      <div>Available: {product.quantity}</div>
      <form className="mt-3" style={{ width: "500px" }} role="option">
        <select name="option" className="input" onChange={handleInputChange}>
          <option disabled selected value>Select sector:</option>
          {people.map((person, index) => 
          <option key={index} value={index}>{person.firstName}</option>
          )}
        </select>
        <br />
        <button
          onClick={(e) => handleOption(e, state.option, index)}
          type="submit"
          className="btn btn-primary mt-3"
          >
          Confirm
        </button>
      </form>
      <Link className="btn btn-primary mt-3" to={`/products`}>Cancel</Link>
    </div>
  );
}

export default ProductId;