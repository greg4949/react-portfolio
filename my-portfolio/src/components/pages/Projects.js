import React from 'react';

export default function Projects() {
  return (
    <div>
      <h1 style={{textAlign: "center"}}>My Projects</h1>

      <div class="work" id="work">                        
                        <div class="main-project">       
                            <figure class="project-figures">
                                <a class="project-link" href="https://greg4949.github.io/challenge-week-1/#search-engine-optimization">
                                    <img class ="main-project-img" src="./assets/images/landingpage.jpg" alt="landing page example"/>                                
                                    <figcaption>Landing Page</figcaption>
                                </a>                               
                            </figure>
                        </div>                    
                        <div class="projects">                            
                            <figure class="project-figures">
                                <a class="project-link" href="https://kerby00.github.io/rainy-day/">
                                    <img class="project-img" src="./assets/images/rainy-day-app.jpg" alt="semi truck"/>
                                    <figcaption>Rainy Day Kid Activities and Jokes</figcaption>
                                </a>
                            </figure>
                            <figure class="project-figures">
                                <a class="project-link" href="https://typeninja.herokuapp.com">
                                    <img class="project-img" src="./assets/images/typeninja.jpg" alt="time machine"/>
                                    <figcaption>TypeNinja Typing Game </figcaption>
                                </a>
                            </figure>
                            <figure class="project-figures">
                                <a class="project-link" href="https://infinite-meadow-71565.herokuapp.com/">
                                    <img class="project-img" src="./assets/images/semi-snitch.png" alt="semi truck idle event tracker"/>
                                    <figcaption>Semi-Truck Idle Event Tracker</figcaption>
                                </a>
                            </figure>
                            <figure class="project-figures">
                                <a class="project-link" href="./placeholder.html">
                                    <img class="project-img" src="./assets/images/repair.jpg" alt="hands of mechanic repairing car"/>
                                    <figcaption>Car Repair Tracker</figcaption>
                                </a>
                            </figure>
                        </div>
                    </div>
    </div>
  );
}
