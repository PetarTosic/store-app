import { Routes, Route } from "react-router-dom";
import "./App.css";
import Welcome from "./components/Welcome";
import Customers from "./pages/Customers";
import Products from "./pages/Products";
import { useState } from "react";
import AddCustomer from "./pages/AddCustomer";

const listOfPeople = [
  {
    firstName: "John",
    lastName: "Doe",
  },
  {
    firstName: "Pera",
    lastName: "Peric",
  },
  {
    firstName: "Someone",
    lastName: "Something",
  },
  {
    firstName: "What",
    lastName: "Ever",
  },
  {
    firstName: "Marko",
    lastName: "Markovic",
  },
];

function App() {
  const [people, setPeople] = useState(listOfPeople);
  
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

  const handleSubmit = (event) => {
    event.preventDefault();

    let newPerson = {
      firstName: state.firstName,
      lastName: state.lastName
    }
    console.log(state);
    
    setPeople((prevState) => prevState = [...prevState, newPerson]);

    state.firstName = "";
    state.lastName = "";
  }

  const onRemove = (firstName) => {
    setPeople((prevState) =>
      prevState.filter((person) => person.firstName !== firstName)
    );
  };

  return (
    <Routes>
      <Route index element={<Welcome />}></Route>
      <Route
        path="customers"
        element={<Customers people={people} onRemove={onRemove} />}
      ></Route>
      <Route path="products" element={<Products />}></Route>
      <Route path="addcustomer" element={<AddCustomer handleSubmit={handleSubmit} handleInputChange={handleInputChange} state={state}/>}></Route>
    </Routes>
  );
}

export default App;
