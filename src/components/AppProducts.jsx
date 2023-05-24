import { useState } from "react";

const AppProducts = ({
  products,
  addQuantity,
  decreaseQuantity,
  handleSearch,
}) => {
  const [state, setState] = useState({
    search: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   if (state.search != "") {
  //     setNewProducts((prevState) =>
  //       prevState.filter((product) => product.name == state.search)
  //     );
  //     console.log(newProducts.length);
  //     if (!newProducts.length) {
  //       setNewProducts(() => products);
  //     }
  //   } else {
  //     setNewProducts(() => products);
  //   }
  // };

  // const adQuantity = (index) => {
  //   console.log(index);
  //   newProducts[index].quantity++;
  //   console.log(newProducts[index].quantity);
  //   addQuantity(newProducts[index].name);
  // };

  const dcsQuantity = (index) => {};

  return (
    <div className="container">
      <form className="d-flex mt-3" style={{ width: "500px" }} role="search">
        <input
          value={state.search}
          name="search"
          onChange={handleInputChange}
          className="form-control me-2"
          type="search"
          placeholder="Search Products"
          aria-label="Search"
        />
        <button
          onClick={(e) => handleSearch(e, state.search)}
          className="btn btn-outline-success"
          type="submit"
        >
          Search
        </button>
      </form>
      <table className="table container mt-5">
        <thead>
          <tr>
            <th>Product name</th>
            <th>Price</th>
            <th></th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td style={{ width: "10px" }}>
                <button
                  onClick={() => addQuantity(index)}
                  className="btn btn-primary"
                >
                  +
                </button>
              </td>
              <td style={{ width: "10px", textAlign: "center" }}>
                {product.quantity}
              </td>
              <td style={{ width: "10px" }}>
                <button
                  onClick={() => dcsQuantity(index)}
                  className="btn btn-primary"
                >
                  -
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppProducts;
