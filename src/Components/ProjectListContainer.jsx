import GlareHover from '../ReactBits/GlareHover/GlareHover.jsx';
import SpotlightCard from '../ReactBits/SpotlightCard/SpotlightCard.jsx';
// STYLING IS FROM THE PARENT COMPONENT
const ProjectListContainer = ({name, imgUrl, description, githubLink, liveLink, coverType}) =>{
    return (
        <div className="itemwrapper" data-aos="zoom-in">
            <SpotlightCard className="custom-spotlight-card projectItems"
                            spotlightColor="rgba(255, 255, 255, 0.21)">
               
                
                    <h4>{name}</h4>
                    {coverType.toLowerCase().trim() == 'picture' && <img src={imgUrl} alt="" />}
                    {coverType.toLowerCase().trim() == 'video' && <video src={imgUrl} autoPlay loop muted />}
                    <small>{description}</small>
                    <div>
                        {liveLink.trim() &&<span onClick={() => window.open(liveLink, "_black")}><GlareHover  as="button" className="projectActionButton" color="cyan" speed="5s"> Live</GlareHover></span>}
                        {githubLink && <span onClick={() => window.open(githubLink, "_blank")}><GlareHover as="button" className="projectActionButton" color="cyan" speed="5s">Github</GlareHover></span>}
                    </div>
               
            </SpotlightCard>
        </div>
    );
}

export default ProjectListContainer;