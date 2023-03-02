import './Footer.css';

function Footer() {
    return (
      <main className='footer'>
        <p className="footer__contacts">unsait@inbox.ru</p>       
        <p className="footer__copyright">© {new Date().getFullYear()}</p>     
      </main>
    );
  }
  
  export default Footer;