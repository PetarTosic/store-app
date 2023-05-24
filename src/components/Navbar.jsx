import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary container"
      style={{ borderBottom: "1px solid black" }}
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          to={`/`}
          style={{ textDecoration: "none" }}
        >
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                to={`/customers`}
                style={{ textDecoration: "none" }}
              >
                Customers
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                to={`/products`}
                style={{ textDecoration: "none" }}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                to={`/addcustomer`}
                style={{ textDecoration: "none" }}
              >
                Add Customer
              </Link>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
