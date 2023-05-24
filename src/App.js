import { Routes, Route } from "react-router-dom";
import "./App.css";
import Welcome from "./components/Welcome";
import Customers from "./pages/Customers";
import Products from "./pages/Products";
import { useState } from "react";
import AddCustomer from "./pages/AddCustomer";
import CustomerPurchases from "./pages/CustomerPurchases";

const listOfProducts = [
  {
    name: "Milk",
    price: 1.2,
    quantity: 0,
  },
  {
    name: "Eggs",
    price: 0.2,
    quantity: 0,
  },
  {
    name: "Ham",
    price: 2.3,
    quantity: 0,
  },
  {
    name: "Cheese",
    price: 3.4,
    quantity: 0,
  },
  {
    name: "Bread",
    price: 0.8,
    quantity: 0,
  },
];

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
  const [products, setProducts] = useState(listOfProducts);
  const [productsCopy, setProductsCopy] = useState(listOfProducts);

  const handleSearch = (event, name) => {
    event.preventDefault();
    setProducts(productsCopy.filter((product) => product.name.includes(name)));
  };

  const addQuantity = (index) => {
    setProducts((prevState) =>
      prevState.map((product, id) => {
        if (id === index) {
          product.quantity++;
        }
        return product;
      })
    );
  };

  const decreaseQuantity = (name) => {};

  // const [state, setState] = useState({
  //   firstName: "",
  //   lastName: ""
  // });

  const handleSubmit = (event, state) => {
    event.preventDefault();

    let newPerson = {
      firstName: state.firstName,
      lastName: state.lastName,
    };
    console.log(state);

    setPeople((prevState) => (prevState = [...prevState, newPerson]));

    state.firstName = "";
    state.lastName = "";
  };

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
      <Route
        path="products"
        element={
          <Products
            products={products}
            addQuantity={addQuantity}
            decreaseQuantity={decreaseQuantity}
            handleSearch={handleSearch}
          />
        }
      ></Route>
      <Route
        path="addcustomer"
        element={<AddCustomer handleSubmit={handleSubmit} />}
      ></Route>
      <Route
        path="customers/:id"
        element={<CustomerPurchases people={people} />}
      />
    </Routes>
  );
}

export default App;
