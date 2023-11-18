import React from "react";

export default function ShippingAddress() {
  return (
    <>
      <div className="shopcart" id="shopcart">
        <div className="container">
          <h5>Shipping Address</h5>
          <div className="row justify-content-start gy-2 order-1">
            <div className="col-lg-8 col-12">
              <form className="row g-1">
                <div className="col-md-6 mb-2 ">
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    placeholder="First name"
                  />
                </div>
                <div className="col-md-6 mb-2">
                  <input
                    type="title"
                    className="form-control "
                    id="lastname"
                    placeholder="Last name"
                  />
                </div>
                <div className="col-md-12 mb-2">
                  <input
                    type="companyname"
                    className="form-control shadow-none border-0"
                    id="companyname"
                    placeholder="Company name"
                  />
                </div>
                <div className="col-md-12 mb-2">
                  <input
                    type="address"
                    className="form-control shadow-none border-0"
                    id="address"
                    placeholder="Address"
                  />
                </div>
                <div className="col-md-6 mb-2">
                  <input
                    type="email"
                    className="form-control shadow-none border-0"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="col-md-6 mb-2">
                  <input
                    type="phone"
                    className="form-control shadow-none border-0"
                    id="phone"
                    placeholder="Phone"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control "
                    id="description"
                    rows="3"
                    placeholder="Additional information"
                  ></textarea>
                </div>
                <h5>Billing Address</h5>
                <div class="form-check">
                  <input
                    class="form-check-input shadow-none border-0 rounded-0"
                    type="checkbox"
                    value=""
                    id=""
                  />
                  <label class="form-check-label" for="">
                    Same as Shipping Address
                  </label>
                </div>
              </form>
            </div>

            <div className="col-md-4 col-12 d-flex flex-column mb-0 rounded-2 order-2 order-md-1">
              <div className="card p-2">
                <p className=" d-flex justify-content-between p-1 m-0">
                  <span>Subtotal</span> <span>$120</span>
                </p>
                <hr />
                <p className=" d-flex justify-content-between p-1 m-0">
                  <span>Tax (5%)</span> <span>$6</span>
                </p>
                <hr />
                <p className=" d-flex justify-content-between p-1 m-0">
                  <span>Shipping</span> <span>$15</span>
                </p>
                <hr />
                <p className=" d-flex justify-content-between p-1 m-0">
                  <strong>Total</strong> <strong>$6</strong>
                </p>
                <button type="button" className="btn btn-dark">
                  <i className="bi bi-cart-fill me-1"></i> PROCEED TO SHIPPING
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
