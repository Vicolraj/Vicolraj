import './styles/SocialNav.css' 
 
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter, FaTiktok } from 'react-icons/fa6'

const SocialNav = () => {
  const socials = [
    { icon: <FaGithub />, link: 'https://github.com/Vicolraj', label: 'GitHub' },
    { icon: <FaLinkedin />, link: 'https://linkedin.com/in/Vicolraj', label: 'LinkedIn' },
    { icon: <FaInstagram />, link: 'https://instagram.com/Vicolraj_', label: 'Instagram' },
    { icon: <FaXTwitter />, link: 'https://x.com/Vicolraj', label: 'X' },
    { icon: <FaTiktok />, link: 'https://tiktok.com/@Vicolraj', label: 'TikTok' },
  ]

  return (
    <div className="social-nav">
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          className="social-icon"
        >
          {item.icon}
        </a>
      ))}
    </div>
  )
}

export default SocialNav
