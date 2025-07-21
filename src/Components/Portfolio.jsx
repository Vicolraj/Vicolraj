import { useEffect } from 'react';
import './styles/Portfolio.css'
import StarBorder from '../ReactBits/StarBorder/StarBorder.jsx';
 


const Portfolio = () => {
    

    return(
    <section className='portfolio'>
        <h3>Portfolio</h3>
        <div className="projectList">
            <div className="projectItems">
                <h4>Project 1</h4>
                 <div>
                    <StarBorder as="button" className="custom-class" color="cyan" speed="5s"><a href='live'>Live</a></StarBorder>
                    <StarBorder as="button" className="custom-class" color="cyan" speed="5s"><a href="live">github</a></StarBorder>
                </div>
            </div>
                


                
        </div>
        <hr />
    </section>)
}

export default Portfolio;
