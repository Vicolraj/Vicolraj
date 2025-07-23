import { useEffect } from 'react';
import './styles/Portfolio.css'
import GlareHover from '../ReactBits/GlareHover/GlareHover.jsx';
 


const Portfolio = () => {
    

    return(
    <section className='portfolio' data-aos="fade-left" data-aos-duration="1500">
        <h3>Portfolio</h3>
        <div className="projectList">
            <div className="projectItems">
            
                <h4>Project 1</h4>
                <div>
                    <GlareHover width as="button" className="projectActionButton" color="cyan" speed="5s"><a href='live'>Live</a></GlareHover>
                    <GlareHover as="button" className="custom-class" color="cyan" speed="5s"><a href="live">github</a></GlareHover>
                </div>
            </div>               
        </div>
        <hr />
    </section>)
}

export default Portfolio;
