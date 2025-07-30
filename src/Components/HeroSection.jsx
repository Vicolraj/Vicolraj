import heroPic from '../assets/vicolrajbg.png'
import neon from '../assets/neon.gif'
import './styles/Hero.css'
import useMousePositon from '../Hooks/useMousePositon.js'
import DownloadButton from './DownloadButton.jsx'


const HeroComponent = () => {
  const {handleMouseMove, mouseCord, clientX} = useMousePositon(40)
  return(
    <section onMouseMove={handleMouseMove} id='home' className='heroSection sectionContainer'>
      <div className='hero-name-holder'>
        <h1 data-hero-heading
            data-aos = "fade"
            data-aos-duration = "3000">HI, I'M VICOLRAJ</h1>
            
      </div>
      <div className='hero-article-container'>
        <pre data-aos = "fade-up"
            data-aos-duration = "1500"
            data-aos-delay = "500">
          A FRONT-END DEVELOPER
          PASSIONATE ABOUT CRAFTING
          BOLD AND MEMORABLE PROJECTS 📌
          <br />
        </pre>
        <span className='hero-btn'>
          <DownloadButton />
        </span>
      </div>
      <div data-img-container className='imgcon'
            data-aos = "zoom-out"
            data-aos-duration = "200"
            data-aos-delay = "200">
        <img  style={{transform: `translate( ${clientX}px, ${mouseCord.y/10}px)`, transition : '.2s'}}  draggable='false' src={heroPic} alt="Vicolraj" />
      </div> 
      <img style={{transform: `translate( ${mouseCord.x}px, ${mouseCord.y}px)`, transition : '.2s'}} src={neon} alt="neon"  />   
    </section>
  )
}

export default HeroComponent






{/* Class name for Typing effbect is Output */}

{/* <TypingEffect items={["<span class = 'colored'>Front-end</span> Developer","<span class = 'colored'>Graphic</span> Designer"]}/>|&nbsp; */}

    // let socialLinks = [
    //     {icon: 'bxl-github', url: 'https://github.com/vicolraj'},
    //     {icon: 'bxl-linkedin', url: 'https://linkedin.com/in/vicolraj'},
    //     {icon: 'bxl-instagram', url: 'https://instagram.com/vicolraj_'},
    //     {icon: 'bxl-twitter', url: 'https://x.com/vicolraj'},
    //     {icon: 'bxl-facebook', url: '#'},
    //     {icon: 'bxl-tiktok', url: 'https://tiktok.com/vicolraj'}
    //   ]