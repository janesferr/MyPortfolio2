
import React from "react";
import Fade from "react-reveal/Fade"
import './Header.scss';






function Home() {
  return (
  
    <Fade bottom>
<div className="bgimg bgimg-1 w3-display-container" id="home">

     <div className="w3-display-middle title" > 
        <span className="w3-center w3-black w3-xlarge w3-wide">
            <span className="w3-hide-small">HELLO, I'M</span>
            <span> Jane Sferrazza</span>
            
            <span className="w3-hide-small"> FULL STACK WEB DEVELOPER</span>
            <div><a href="mailto:jane.sferrazza888@gmail.com">
           CONNECT WITH ME
          </a></div>
        </span>
     </div> 
</div> 


        </Fade>
  );
}

export default Home;
