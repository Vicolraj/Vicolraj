import { useEffect } from 'react';
import './styles/Portfolio.css'
import TiltedCard from '../ReactBits/TiltedCard/TiltedCard.jsx'
 


const Portfolio = () => {
    

    return(
    <section className='portfolio'>
        <h3>Portfolio</h3>
        <div className="projectList">
            <TiltedCard
                imageSrc="https://vicolraj.github.io/Pictures/businesslanding.png"
                altText="Kendrick Lamar - GNX Album Cover"
                captionText="Kendrick Lamar - GNX"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="150px"
                imageWidth="150px"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
                action = {
                    <div>
                        <StarBorder as="button" className="custom-class" color="cyan" speed="5s"><a href='live'>Live</a></StarBorder>
                        <StarBorder as="button" className="custom-class" color="cyan" speed="5s"><a href="live">github</a></StarBorder>
                    </div>
                }
                overlayContent={

                    <div className='projectHeading'>
                        <h2 className="tilted-card-demo-text">Kendrick Lamar - GNX</h2>
                        <small>Description</small>
                    </div>
                    
                }
                />
        </div>
        <hr />
    </section>)
}

export default Portfolio;
