import React from "react";
// import { Route } from "react-router-dom";
import Fade from "react-reveal/Fade"
import "./contact.scss"


function Footer(){
    return (
<div className="section" id="contact">
<div className="container">
  <div className="footer-container">
    <Fade bottom cascade>
      <h1>Contact</h1>
    </Fade>
    <a className="email-link" href={`mailto:jane@sferrazza.io`}>
jane@sferrazza.io
</a>
    <div className="social-icons">
    </div>
    <span>
Made With <icon>❤</icon> by{" "}
      <a href="https://jane.sferrazza.io/">Jane Sferrazza</a>
    </span>
    <div class="col-md-8">
            <ul class="contact-icons list-unstyled text-center">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p>East Meadow, NY 11554, USA</p>
                </li>
                <li><i class="fas fa-phone fa-2x"></i>
                <a href="tel:516-808-4553">516-808-4553</a>
                </li>
                <li><i class="fas fa-envelope fa-2x"></i>
                    <a className="email-link" href={`mailto:jane.sferrazza888@gmail.com`}>Jane.sferrazza888@gmail.com</a>
                </li>
            </ul>
        </div>          
  </div>
</div>
</div>

    )
}
export default Footer;
