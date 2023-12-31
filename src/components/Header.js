export default function Header() {
  return (
    <>
      <nav
        className=" navbar navbar-expand-md shadow-sm pt-1"
        data-aos="fade-down"
        data-aos-delay="5000"
      >
        <div className="container">
          <a href="/" className="navbar-brand logo ">
            <img
              className="logo rounded-2 mx-1"
              src="hhysuperstore.png"
              width={35}
              height={35}
            />
            HHY Online Store
          </a>
          <button
            className="navbar-toggler border-0 text-light shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main-nav"
            aria-controls="main-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end align-center"
            id="main-nav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  <i className="bi bi-house-fill me-1"></i>
                   Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/about" className="nav-link">
                  <i className="bi bi-slack me-1"></i> About
                </a>
              </li>

              <li className="nav-item">
                <a href="/allProducts" className="nav-link">
                  <i className="bi bi-grid-fill me-1"></i>  All products
                </a>
              </li>

              <li className="nav-item">
                <a href="/categories" className="nav-link">
                  <i className="bi bi-sort-alpha-down me-1"></i> Categories
                </a>
              </li>
              <li className="nav-item">
                <a href="/accounts" className="nav-link">
                  <i className="bi bi-person-fill me-1"></i>  Acount
                </a>
              </li>
              <li className="nav-item">
                <a href="/cart" className="nav-link">
                  <i className="bi bi-cart-fill me-1"></i>  Cart
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/**
      <nav className="navbar navbar-expand-lg shadow-sm">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img
              className="logo rounded-2"
              src="hhysuperstore.jpg"
              width={40}
              height={40}
            />
            HHY Online Store
          </a>

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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item text-white">
                <a href="/allProducts" className="nav-link active">
                  All products
                </a>
              </li>
              <li className="nav-item text-white">
                <a href="/categories" className="nav-link active">
                  Categories
                </a>
              </li>
              <li className="nav-item text-white">
                <a href="/accounts" className="nav-link active">
                  Accounts
                </a>
              </li>
              <li className="nav-item text-white">
                <a href="/cart" className="nav-link active">
                  Cart
                </a>
              </li>
              <li className="nav-item text-white">
                <a href="/signup" className="nav-link active">
                  Signup
                </a>
              </li>

              <li className="nav-item text-white">
                <a href="/login" className="nav-link active">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
       */}
    </>
  );
}
