import { useEffect, useState } from 'react';
import './styles/TechStack.css'
import SpotlightCard from '../ReactBits/SpotlightCard/SpotlightCard.jsx';
import useAPIData from '../Hooks/useAPIData.js';

export default function TechStack() {
    let url = import.meta.env.VITE_API + import.meta.env.VITE_STACKS
    const{output: stacks, isLoading} = useAPIData(url, 'fetch')


    return(

        // use scrolling effect here
        <section  id='techStack'  className={`sectionContainer modSec`}>
            <div>
                <div className='stackHead' data-aos="fade-right" data-aos-duration="800">
                    <h3>Tech Stack</h3>
                    <p>Here are some of the technologies I work with</p>
                </div>
                <div data-aos="fade-left" data-aos-duration="800" className='stackContainer'>
                {!isLoading ? stacks && stacks.map(
                    item => <SpotlightCard key={item.Stack} className="custom-spotlight-card"
                            spotlightColor="rgba(255, 255, 255, 0.3)">
                                <div className='stack'>
                                    <img src={item["Logo"]} alt="stackLogo" />
                                    <article>
                                        <h3>{item.Stack}</h3>
                                        <p>{item.Type}</p>
                                    </article>
                                </div>
                            </SpotlightCard>)
                        : <i><span className="loader"></span> Loading....</i>}
                </div> 
            </div>
            <hr />
        </section>
    )
}

