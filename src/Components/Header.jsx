import { useEffect, useState } from 'react'
import './styles/Header.css'


const HeaderComponent = () => {
  const [showMenu, setSHowMenu] = useState(false)
  
  let links = [
    {icon: 'bxs-home', caption: 'home', ScrollTo: '#home', delay: '0'},
    {icon: 'bxs-briefcase', caption: 'About Me', ScrollTo: '#aboutme', delay: '100'},
    {icon: 'bxs-dashboard', caption: 'Projects', ScrollTo: '#projects', delay: '250'},
    {icon: 'bxs-phone', caption: 'contact', ScrollTo: '#contact', delay: '350'}
  ]

  const cvUpper = (x = "No word") => {
    return (x.replace(x[0], x[0].toUpperCase()))
  }

  return (
    <div className='aos-home' data-aos='fade-down' data-aos-duration='800'>
      <header className='headerComponent sectionContainer'>
        
        <span className='mobile' data-aos='fade-down' data-aos-easing='ease-in-sine' data-aos-duration='1500'>
          <i 
            onClick={() => setSHowMenu(!showMenu)}
            className={`bx mobile menu -pointer ${showMenu ? 'bxs-arrow-from-left' : 'bx-menu'}`}
          ></i>
        </span>
        
        <nav style={{transform: showMenu ? '' : 'var(--translate)'}}>
          <ul >
            {links.map(e => (
              <li data-aos='fade-down' data-aos-easing='ease-in-sine' data-aos-duration='1000' data-aos-delay = {e.delay}
                key={e.ScrollTo}
                onClick={() => {
                  const element = document.querySelector(e.ScrollTo);
                  if (element) element.scrollIntoView({behavior: 'smooth', block: 'start'});
                  setSHowMenu(false); // Close menu after clicking on mobile
                }}
              >
                <a><i className={`bx ${e.icon} mobile`}></i>{cvUpper(e.caption)}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

    </div>
  )
}

export default HeaderComponent