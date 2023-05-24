import { Routes, Route } from "react-router-dom";
import "./App.css";
import Welcome from "./components/Welcome";
import Customers from "./pages/Customers";
import Products from "./pages/Products";
import { useState } from "react";

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
    </Routes>
  );
}

export default App;
