import GlareHover from '../ReactBits/GlareHover/GlareHover.jsx';
import SpotlightCard from '../ReactBits/SpotlightCard/SpotlightCard.jsx';
// STYLING IS FROM THE PARENT COMPONENT
const ProjectListContainer = ({name, imgUrl, description, githubLink, liveLink, coverType}) => {

    return (
        <div className="itemwrapper" data-aos="zoom-in" data-aos-duration="1000">
            <SpotlightCard className="custom-spotlight-card projectItems"
                            spotlightColor="rgba(255, 255, 255, 0.21)">
                <h4>{name}</h4>
                {coverType?.toLowerCase().trim() === 'picture' && <img src={imgUrl} alt={name} />}
                {coverType?.toLowerCase().trim() === 'video' && (
                    <video src={imgUrl} autoPlay loop muted playsInline />
                )}
                <small>{description || 'No Description'}</small>
                <div>
                    {liveLink && (
                        <span onClick={() => window.open(liveLink, "_blank")}>
                            <GlareHover as="button" className="projectActionButton" color="cyan" speed="5s">Live</GlareHover>
                        </span>
                    )}
                    {githubLink?.length > 0 && (
                        <span onClick={() => window.open(githubLink, "_blank")}>
                            <GlareHover as="button" className="projectActionButton" color="cyan" speed="5s">Github</GlareHover>
                        </span>
                    )}
                </div>
            </SpotlightCard>
        </div>
    );
}

export default ProjectListContainer;