import Image from "next/image";
import Link from "next/link";
import SearchBox from "./SearchBox";
export default function Welcome() {
  return (
    <>
      <section className="parallax-header">
        <div className="container">
          <div className="header-content">
            
          </div>
        </div>
      </section>

      <div className="container p-4 pb-lg-0 ">
        <div className="content row justify-content-center align-items-center">
          <div className="col-md-6 left">
            <h3 className="text-justify opacity-75 text-start text-uppercase">
              Welcome to HHY Online Store
            </h3>
            <hr className="p-0 m-0"/>
            <p className="text-justify" >
              Where we sale materials at affordable price
            </p>
            <small>Thank You as you business with us</small>
            <div>
              <div class="text-center text-lg-start">
                <a
                  href="#newProduct"
                  class="get-started mb-2 text-decoration-none d-inline-flex align-items-center justify-content-center align-self-center"
                >
                  <span>Get Started</span>
                  <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6  right">
            <Link
              href="/imgs/l4.jpg"
              data-lightbox="online-store"
              data-title="product picture"
              className="p-0 m-0"
            >
              <img
                data-aos="fade-up"
                data-aos-delay="200"
                src="/imgs/l4.jpg"
                alt="hero img"
                className=" card-img img-fluid rounded welcome-img "
              />
            </Link>
          </div>
        </div>
      </div>
      <div >
       
      </div>
    </>
  );
}
