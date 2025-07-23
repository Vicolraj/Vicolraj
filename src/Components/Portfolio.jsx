import { useEffect } from 'react';
import './styles/Portfolio.css'
import GlareHover from '../ReactBits/GlareHover/GlareHover.jsx';
import SpotlightCard from '../ReactBits/SpotlightCard/SpotlightCard.jsx';
import useAPIData from '../Hooks/useAPIData.js';import { SpotLight } from '@react-three/drei';
 


const Portfolio = () => {
    
    return(
    <section className='portfolio' data-aos="fade-up" data-aos-duration="800">
        <h3 className='heading'>Portfolio</h3>
        <small></small>
        <div className="projectList">
             <div className=" " data-aos="zoom-in">
            <SpotlightCard className="custom-spotlight-card projectItems"
                            spotlightColor="rgba(255, 0, 221, 0.3)">
               
                
                    <h4>Project 1</h4>
                    {/* <img src="https://vicolraj.github.io/Pictures/cover.png" alt="" /> */}
                    <div>
                        <GlareHover  as="button" className="projectActionButton" color="cyan" speed="5s"><a href='live'>Live</a></GlareHover>
                        <GlareHover as="button" className="projectActionButton" color="cyan" speed="5s"><a href="live">github</a></GlareHover>
                    </div>
               
            </SpotlightCard>
             </div>
            
            <div className="projectItems">
            
                <h4>Project 1</h4>
                <div>
                    <GlareHover as="button" className="projectActionButton" color="cyan" speed="5s"><a href='live'>Live</a></GlareHover>
                    <GlareHover as="button" className="projectActionButton" color="cyan" speed="5s"><a href="live">github</a></GlareHover>
                </div>
            </div> 

            <div data-aos="zoom-in" className="projectItems">
            
                <h4>Project 1</h4>
                <div>
                    <GlareHover as="button" className="projectActionButton" color="cyan" speed="5s"><a href='live'>Live</a></GlareHover>
                    <GlareHover as="button" className="projectActionButton" color="cyan" speed="5s"><a href="live">github</a></GlareHover>
                </div>
            </div>

            <div data-aos="zoom-in" className="projectItems">
            
                <h4>Project 1</h4>
                <div>
                    <GlareHover as="button" className="projectActionButton" color="cyan" speed="5s"><a href='live'>Live</a></GlareHover>
                    <GlareHover as="button" className="projectActionButton" color="cyan" speed="5s"><a href="live">github</a></GlareHover>
                </div>
            </div>
             
                       
        </div>
       <hr /> 
    </section>)
}

export default Portfolio;
