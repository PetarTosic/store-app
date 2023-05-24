import { useState } from "react";

const AddCustomerForm = ({ handleSubmit }) => {

  const [state, setState] = useState({
    firstName: "",
    lastName: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <form
      className="container mt-5"
      style={{ width: "300px" }}
      onSubmit={(event) => handleSubmit(event, state)}
    >
      <h1 className="h3 mb-3 fw-normal">Create new customer:</h1>

      <div className="form-floating mt-3">
        <input
          name="firstName"
          value={state.firstName}
          onChange={handleInputChange}
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Will"
        />
        <label for="floatingInput">First Name</label>
      </div>
      <div className="form-floating mt-3">
        <input
          name="lastName"
          value={state.lastName}
          onChange={handleInputChange}
          type="text"
          className="form-control"
          id="floatingPassword"
          placeholder="Smith"
        />
        <label for="floatingPassword">Last Name</label>
      </div>

      <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">
        Create
      </button>
    </form>
  );
};

export default AddCustomerForm;
