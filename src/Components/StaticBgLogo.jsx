import logo from '/icon-512.png';
import './styles/StaticBgLogo.css';

export const StaticBgLogo = () => {
    return (
        <div className='static-bg-logo'>
            <img onClick={() => window.location.href = "/#home"} src={logo} alt='logo'></img>
        </div>
    );
}

