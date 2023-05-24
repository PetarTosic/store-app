import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary container" style={{borderBottom: "1px solid black"}}>
      <div class="container-fluid">
        <Link to={`/`} style={{textDecoration: "none"}}><a class="navbar-brand" href="#">Navbar</a></Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to={`/customers`} style={{textDecoration: "none"}}><a class="nav-link active" aria-current="page" href="#">Customers</a></Link>
            </li>
            <li class="nav-item">
              <Link to={`/products`} style={{textDecoration: "none"}}><a class="nav-link active" aria-current="page" href="#">Products</a></Link>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;