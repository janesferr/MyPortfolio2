import React from "react";
import Card from "./Card";
import Fade from "react-reveal/Fade";
import data from "./Janedata";
import Footer from "./Footer";
import  "./Project.scss";



function Projects() {
  return (
    <>
     {/* <div class="w3-row-padding w3-center w3-section"> */}
     <Fade bottom>
            <h1>Projects</h1>
          </Fade>
            <div class="w3-col m4">
                    <div class="card"> 
                            {/* <img class="card__img" src="assets/pictures/get-lost-screenshot-1.png" alt="Get Lost"> */}
                            <h2 class="card__title">Get Lost</h2>
                            <p class="card__text">Hiking app utilizing Firebase and API calls to allow a user to find, store, and track their favorite hiking trails.</p>
                           
                          </div>
            </div>
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          <Fade bottom>
            <h1>Projects</h1>
          </Fade>
          <div className="grid">
            <Fade bottom cascade>
              {data.projects.map((project, index) => (
                <Card
                  key={index}
                  heading={project.title}
                  paragraph={project.para}
                  imgUrl={project.imageSrc}
                  projectLink={project.url}
                >
                </Card>
               ))} 
            </Fade>
          </div>
        </div>
      </div>
    </div>
    
   <Footer></Footer> 
   </>
  )
}

export default Projects;
