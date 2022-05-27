import "./sproduct.css";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function Sproduct() {
  const [path, setPath] = useState(
    "https://firebasestorage.googleapis.com/v0/b/sppu-guru.appspot.com/o/produt%20photo%2Fproduct4.jpeg?alt=media&token=80188c5f-4a45-4219-a20a-bbbdc7129cae"
  );

  const [count, setCount] = useState(1);

  return (
    <section className="container sproduct my-5">
      <div className="row mt-5">
        <div className="col-lg-5 col-md-12 col-12 left">
          <img className="img-fluid image mb-1 desktop-img " src={path} alt="product" />

          {/* slider start */}
          
          <div className="mobile-img">

          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid image"
                src="https://firebasestorage.googleapis.com/v0/b/sppu-guru.appspot.com/o/produt%20photo%2Fproduct4.jpeg?alt=media&token=80188c5f-4a45-4219-a20a-bbbdc7129cae"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid image"
                src="https://firebasestorage.googleapis.com/v0/b/sppu-guru.appspot.com/o/produt%20photo%2Fproduct3.jpeg?alt=media&token=1dc948c4-77bd-411c-8740-0a0d214d5186"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid image"
                src="https://firebasestorage.googleapis.com/v0/b/sppu-guru.appspot.com/o/produt%20photo%2Fproduct2.jpeg?alt=media&token=b0278f6c-9981-4bf7-b90e-7d20fc912b86"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid image"
                src="https://firebasestorage.googleapis.com/v0/b/sppu-guru.appspot.com/o/produt%20photo%2Fproduct%201.jpeg?alt=media&token=4e1cdcb4-fd39-4c4e-ba0e-c2ea38e28b2c"
                alt="forth slide"
              />
            </Carousel.Item>
          </Carousel>
          </div>

          {/* slider end */}

          <div className=" desktop-img small-img-group">
            <div className="small-img-col">
              <img
                onClick={() =>
                  setPath(
                    "https://firebasestorage.googleapis.com/v0/b/sppu-guru.appspot.com/o/produt%20photo%2Fproduct4.jpeg?alt=media&token=80188c5f-4a45-4219-a20a-bbbdc7129cae"
                  )
                }
                src={
                  "https://firebasestorage.googleapis.com/v0/b/sppu-guru.appspot.com/o/produt%20photo%2Fproduct4.jpeg?alt=media&token=80188c5f-4a45-4219-a20a-bbbdc7129cae"
                }
                className="small-img img-fluid"
                alt="small-img"
              />
            </div>
            <div className="small-img-col">
              <img
                onClick={() =>
                  setPath(
                    "https://firebasestorage.googleapis.com/v0/b/sppu-guru.appspot.com/o/produt%20photo%2Fproduct3.jpeg?alt=media&token=1dc948c4-77bd-411c-8740-0a0d214d5186"
                  )
                }
                src={
                  "https://firebasestorage.googleapis.com/v0/b/sppu-guru.appspot.com/o/produt%20photo%2Fproduct3.jpeg?alt=media&token=1dc948c4-77bd-411c-8740-0a0d214d5186"
                }
                className="small-img img-fluid"
                alt="small-img"
              />
            </div>
            <div className="small-img-col">
              <img
                onClick={() =>
                  setPath(
                    "https://firebasestorage.googleapis.com/v0/b/sppu-guru.appspot.com/o/produt%20photo%2Fproduct2.jpeg?alt=media&token=b0278f6c-9981-4bf7-b90e-7d20fc912b86"
                  )
                }
                src={
                  "https://firebasestorage.googleapis.com/v0/b/sppu-guru.appspot.com/o/produt%20photo%2Fproduct2.jpeg?alt=media&token=b0278f6c-9981-4bf7-b90e-7d20fc912b86"
                }
                className="small-img img-fluid"
                alt="small-img"
              />
            </div>
            <div className="small-img-col">
              <img
                onClick={() =>
                  setPath(
                    "https://firebasestorage.googleapis.com/v0/b/sppu-guru.appspot.com/o/produt%20photo%2Fproduct%201.jpeg?alt=media&token=4e1cdcb4-fd39-4c4e-ba0e-c2ea38e28b2c"
                  )
                }
                src={
                  "https://firebasestorage.googleapis.com/v0/b/sppu-guru.appspot.com/o/produt%20photo%2Fproduct%201.jpeg?alt=media&token=4e1cdcb4-fd39-4c4e-ba0e-c2ea38e28b2c"
                }
                className="small-img img-fluid"
                alt="small-img"
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-12 right">
          <h6 className="title">SNEAKERS COMPANY</h6>
          <h2 className="name">
            {" "}
            <b> Fall Limited Edition </b>{" "}
          </h2>
          <h2>
            <b> Sneakers</b>
          </h2>
          <p className="para">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <h3 style={{ display: "inline" }}>
            <b> $125.00</b>
          </h3>{" "}
          <span className="discount">50%</span>
          <p>
          <span className="price">$250.00</span>
          </p>


          {/* <div className="count-group" style={{ display: "inline" }}>
            <button
              className="quantity"
              style={{ border: "none" }}
              onClick={() => setCount(count > 0 ? count - 1 : count)}
            >
              -
            </button>
            <h5 className="quantity" style={{ display: "inline" }}>
              {count}
            </h5>
            <button
              className="quantity"
              style={{ border: "none" }}
              onClick={() => setCount(count + 1)}
            >
              +
            </button>
          </div> */}


            <div className="count-group" >
              <span className="quantity" onClick={() => setCount(count > 0 ? count - 1 : count)}>-</span>
              <h5 className="quantity" style={{ display: "inline" }}>
              {count}
            </h5>
            <span className="quantity" onClick={() => setCount(count + 1)}>+</span>
            </div>

          <button className="cart">
            {" "}
            <i class="fa fa-shopping-cart" aria-hidden="true"></i> Add To Cart
          </button>
        </div>
      </div>
    </section>
  );
}

export default Sproduct;
