import { useEffect, useState } from 'react';
import './styles/TechStack.css'
import SpotlightCard from '../ReactBits/SpotlightCard/SpotlightCard.jsx';

export default function TechStack() {
    const [stacks, setStacks ] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
        

    let url = import.meta.env.VITE_API + import.meta.env.VITE_STACKS
    useEffect(() => {
        fetch(url, {method: "GET"})
        .then(res => res.json())
        .then(data => setStacks(data))
        .finally(() => {setIsLoading(false)})

    },
        [])

    return(

        // use scrolling effect here
        <section  id='techStack'  className={`sectionContainer modSec`}>
            <div>
                <div className='stackHead'>
                    <h3>Tech Stack</h3>
                    <p>Here are some of the technologies I work with</p>
                </div>
                <div className='stackContainer'>
                {!isLoading ? stacks && stacks.map(
                    item => <SpotlightCard className="custom-spotlight-card"
                            spotlightColor="rgba(255, 255, 255, 0.2)">
                                <div className='stack'>
                                    <img src={item["Logo"]} alt="stackLogo" />
                                    <article>
                                        <h3>{item.Stack}</h3>
                                        <p>{item.Type}</p>
                                    </article>
                                </div>
                            </SpotlightCard>)
                        : <i><span class="loader"></span> Loading....</i>}
                </div> 
            </div>
            <hr />
        </section>
    )
}

