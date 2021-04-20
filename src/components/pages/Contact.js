import React from "react";
// import { Route } from "react-router-dom";
import "./contact.scss";
import Footer from "./Footer";

function Contact() {
  return (
    <>
    <div>
       <h2 className="text-center text-uppercase my-5 pt-5 wow fadeIn" data-wow-delay="0.2s" >Contact <strong>me</strong></h2>
     
      <div className="card-body">
            <div classNmae="container">
              <label for="exampleFormControlInput1" className="form-label">Name</label>
              <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Name" />
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" />
              <label for="exampleFormControlTextarea1" class="form-label">Message</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                placeholder="Message"></textarea>
              <div className="button-color btn btn-primary waves-effect waves-light"> Send</div>
            </div>
            </div>
     
          </div>
         <Footer> </Footer>
         </>
  );
}

export default Contact;
