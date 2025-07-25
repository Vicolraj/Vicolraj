import { useEffect, useState } from 'react';
import './styles/Portfolio.css'
import GlareHover from '../ReactBits/GlareHover/GlareHover.jsx';
import useAPIData from '../Hooks/useAPIData.js';
import  ProjectListContainer  from './ProjectListContainer.jsx';
import EmblaCarousel from '../Embla/js/EmblaCarousel.jsx';

import '../Embla/css/embla.css';
import '../Embla/css/sandbox.css';

 
 


const Portfolio = () => {
    let url = import.meta.env.VITE_API + import.meta.env.VITE_PROJECTS;
    const { output, isLoading } = useAPIData(url, 'fetch');
    console.table(output);



    const OPTIONS = { loop: true }
 
    const [showAll, setShowAll] = useState(false);

 
    return(
    <section id='projects' className='portfolio' data-aos="fade-up" data-aos-duration="800">
        <h3 className='heading'>Portfolio </h3>
        <div>A few of my latest website builds</div>
        {<div style={{scale: showAll ? 1 : 0, transition: '.5s'}}   className="projectList">
            <button className = "back" onClick={() => setShowAll(false)}>back</button>
            {isLoading && <div className="loading">Loading...</div>}
            {output && output.map((item, i) => (
                <div key={i}  >
                    <ProjectListContainer name={item.Name}
                    description={''}
                    imgUrl={item.Image}
                    githubLink={item.GitHubLink}
                    liveLink={item.LiveLink}
                    coverType = {item["CoverType"]} />
                </div>
            ))}           
       
        </div> }

        <EmblaCarousel showAll = {showAll} setShowAll = {setShowAll} slides={output} options={OPTIONS} />

    </section>)
}

export default Portfolio;
