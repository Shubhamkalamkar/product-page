import "./sproduct.css";
import { useState } from "react";

function Sproduct() {
  const [path, setPath] = useState(
    "https://firebasestorage.googleapis.com/v0/b/sppu-guru.appspot.com/o/produt%20photo%2F1.jpg?alt=media&token=16044f62-7c28-45ec-90d1-2cb214b1550b"
  );

  const [count, setCount] = useState(1)

  return (
    <section className="container sproduct my-5 pt-5">
      <div className="row mt-5">
        <div className="col-lg-5 col-md-12 col-12 left">
          <img className="img-fluid image mb-1 " src={path} alt="product" />

          <div className="small-img-group">
            <div className="small-img-col">
              <img
                onClick={() =>
                  setPath(
                    "https://firebasestorage.googleapis.com/v0/b/sppu-guru.appspot.com/o/produt%20photo%2F1.jpg?alt=media&token=16044f62-7c28-45ec-90d1-2cb214b1550b"
                  )
                }
                src={
                  "https://firebasestorage.googleapis.com/v0/b/sppu-guru.appspot.com/o/produt%20photo%2F1.jpg?alt=media&token=16044f62-7c28-45ec-90d1-2cb214b1550b"
                }
                className="small-img img-fluid"
                alt="small-img"
              />
            </div>
            <div className="small-img-col">
              <img
                onClick={() =>
                  setPath(
                    "https://firebasestorage.googleapis.com/v0/b/sppu-guru.appspot.com/o/produt%20photo%2F2.jpg?alt=media&token=0d92f12c-0267-4e50-9be6-7932878f2788"
                  )
                }
                src={
                  "https://firebasestorage.googleapis.com/v0/b/sppu-guru.appspot.com/o/produt%20photo%2F2.jpg?alt=media&token=0d92f12c-0267-4e50-9be6-7932878f2788"
                }
                className="small-img img-fluid"
                alt="small-img"
              />
            </div>
            <div className="small-img-col">
              <img
                onClick={() =>
                  setPath(
                    "https://firebasestorage.googleapis.com/v0/b/sppu-guru.appspot.com/o/produt%20photo%2F3.jpg?alt=media&token=594fffa5-7f6e-4845-8e58-e2067f3241b7"
                  )
                }
                src={
                  "https://firebasestorage.googleapis.com/v0/b/sppu-guru.appspot.com/o/produt%20photo%2F3.jpg?alt=media&token=594fffa5-7f6e-4845-8e58-e2067f3241b7"
                }
                className="small-img img-fluid"
                alt="small-img"
              />
            </div>
            <div className="small-img-col">
              <img
                onClick={() =>
                  setPath(
                    "https://firebasestorage.googleapis.com/v0/b/sppu-guru.appspot.com/o/produt%20photo%2F4.jpg?alt=media&token=922ae631-dee2-45fb-ad4c-e06f427fe9a9"
                  )
                }
                src={
                  "https://firebasestorage.googleapis.com/v0/b/sppu-guru.appspot.com/o/produt%20photo%2F4.jpg?alt=media&token=922ae631-dee2-45fb-ad4c-e06f427fe9a9"
                }
                className="small-img img-fluid"
                alt="small-img"
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-12 right">
          <h6 className="title">SNEAKERS COMPANY</h6>
          <h2 className="name"> <b> Fall Limited Edition </b> </h2>
          <h2><b> Sneakers</b></h2>
          <p className="para">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <h3 style={{display:"inline"}}><b> $125.00</b></h3> <span className="discount">50%</span>
          <p className="discount">$250.00</p>
          <div style={{ display:"inline"}}>
          <button className="quantity" style={{border:"none"}} onClick={()=> setCount(count>0? count-1 : count)}>-</button>
          <h5 className="quantity" style={{ display: "inline" }}>{count}</h5>
          <button className="quantity" style={{border:"none"}} onClick={()=> setCount(count+1)} >+</button>
          </div>
          <button className="cart">  <i class="fa fa-shopping-cart" aria-hidden="true"></i> Add To Cart</button>
         
        </div>
      </div>
    </section>
  );
}

export default Sproduct;
