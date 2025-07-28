import {useState } from 'react';
import './styles/Portfolio.css';
import useAPIData from '../Hooks/useAPIData.js';
import ProjectListContainer from './ProjectListContainer.jsx';
import EmblaCarousel from '../Embla/js/EmblaCarousel.jsx';

import '../Embla/css/embla.css';
import '../Embla/css/sandbox.css';

const Portfolio = () => {
    const url = import.meta.env.VITE_API + import.meta.env.VITE_PROJECTS;
    const { output, isLoading } = useAPIData(url, 'fetch');

    const [showAll, setShowAll] = useState(false);

    const closeIcon = (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                <path fillRule="evenodd" d="M14 8a.75.75 0 0 1-.75.75H4.56l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 1.06L4.56 7.25h8.69A.75.75 0 0 1 14 8Z" clipRule="evenodd" />
            </svg>
            <span>Back</span>
        </>
    );

    const OPTIONS = { loop: true };

    // Enhanced sanitize function
    const sanitizeLink = (link) => {
        if (!link) return '';
        const val = link.trim();
        return (val === 'null' || val === 'undefined' || val === '') ? '' : val;
    };

    return (
        <section className='portfolio' data-aos="fade-up" data-aos-duration="800">
            <span  id='projects'></span>
            <h3 className='heading'>Portfolio</h3>
            <div>A few of my latest website builds</div>

            <div style={{ scale: showAll ? 1 : 0, transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }} className="projectList">
                <button className="back" onClick={() => setShowAll(false)}>{closeIcon}</button>
                
                {isLoading && <div className="loading">Loading...</div>}

                {output && output.map((item, i) => {
                    // Sanitize links before passing them down
                    const githubLink = sanitizeLink(item?.GithubLink);
                    const liveLink = sanitizeLink(item?.LiveLink);

                    return (
                        <div key={i}>
                            <ProjectListContainer
                                name={item?.Name || ''}
                                description={item?.Description || ''}
                                imgUrl={item?.Image || ''}
                                githubLink={githubLink}
                                liveLink={liveLink}
                                coverType={item?.CoverType || 'picture'} // Default to picture if not specified
                            />
                        </div>
                    );
                })}
            </div>

            <EmblaCarousel showAll={showAll} setShowAll={setShowAll} slides={output} options={OPTIONS} />
        </section>
    );
};

export default Portfolio;