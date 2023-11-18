import Link from "next/link";

export default function ShoppingCart() {
  return (
    <>
      <div className="shopcart" id="shopcart">
        <div className="container">
          <h3>Shopping Cart</h3>
          <div className="row justify-content-start gy-2 order-1 ">
            <div className="col-md-8">
              <div className="card">
                <div className="row g-0 flex">
                  <div className="col-6 col-md-5">
                    <img
                      src="/imgs/l1.jpg"
                      className="card-img img-fluid rounded-start"
                      alt="t-shirt"
                    />
                  </div>
                  <div className="col-6 col-md-7">
                    <div className="card-body d-flex flex-column">
                      <div className="h-100">
                        <h3 className="card-title"> Walking Tour</h3>
                        <h2 className="card-title">Coffee Tour for Men</h2>
                        <h6 className="card-title my-3">
                          Price: $ <strong>79</strong>
                        </h6>
                      </div>
                      <div className="d-flex flex-column flex-md-row justify-content-between align-items-stretch mt-2">
                        <div className="d-flex flex-row mb-3 align-items-center">
                          <h3 className="card-title me-1">
                            <strong> Qty:</strong>
                          </h3>
                          <input type="number" className=" px-2" />
                        </div>
                        <button type="button" className="btn btn-dark">
                          <i className="bi bi-trash me-1"></i> Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 order-md-2">
              <div className="card">
                <div className="row g-0 flex">
                  <div className="col-6 col-md-5">
                    <img
                      src="/imgs/l1.jpg"
                      className="card-img img-fluid rounded-start"
                      alt="t-shirt"
                    />
                  </div>
                  <div className="col-6 col-md-7">
                    <div className="card-body d-flex flex-column">
                      <div className="h-100">
                        <h3 className="card-title"> Walking Tour</h3>
                        <h2 className="card-title">Coffee Tour for Men</h2>
                        <h6 className="card-title my-3">
                          Price: $ <strong>79</strong>
                        </h6>
                      </div>
                      <div className="d-flex flex-column flex-md-row justify-content-between align-items-stretch mt-2">
                        <div className="d-flex flex-row mb-3 align-items-center">
                          <h3 className="card-title me-1">
                            <strong> Qty:</strong>
                          </h3>
                          <input type="number" className=" px-2" />
                        </div>
                        <button type="button" className="btn btn-dark">
                          <i className="bi bi-trash me-1"></i> Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 d-flex flex-column py-3 rounded-2 bg-light order-2 order-md-1">
              <p className=" d-flex justify-content-between p-1 m-0">
                <span>Subtotal</span> <span>$120</span>
              </p>
              <hr className="m-0" />
              <p className=" d-flex justify-content-between p-1 m-0">
                <span>Tax (5%)</span> <span>$6</span>
              </p>
              <hr className="m-0" />
              <p className=" d-flex justify-content-between p-1 m-0">
                <span>Shipping</span> <span>$15</span>
              </p>
              <hr className="m-0" />
              <p className=" d-flex justify-content-between p-1 m-0">
                <strong>Total</strong> <strong>$6</strong>
              </p>
              <button type="button" className="btn btn-dark">
                <i className="bi bi-cart-fill me-1"></i> Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
