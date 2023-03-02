import './Header.css';
import Logo from  '../../images/rkn.png'

function Header() {
    return (
      <header className='header'>
        <img className='header__logo' src={Logo} alt="Logo" />
      </header>
    );
  }
  
  export default Header;
  