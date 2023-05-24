import { Routes, Route } from 'react-router-dom';
import './App.css';
import Welcome from './components/Welcome';
import Customers from './pages/Customers';
import Products from './pages/Products';


function App() {
  return (
    <Routes>
      <Route index element={<Welcome />}></Route>
      <Route path="customers" element={<Customers />}></Route>
      <Route path="products" element={<Products />}></Route>

    </Routes>
  );
}

export default App;