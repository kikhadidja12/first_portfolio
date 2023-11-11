
import React from 'react';
import './navbar.css';
import { Link } from 'react-scroll';

const NavbarComponent = () => {
  return (
    <nav className='Navbar'>
      <img src={process.env.PUBLIC_URL + '/assests/portfolio.png'} alt='logo' className='logoImg' />
      <div className='MenuNavbar'>
        <Link className='desktopMenuListItem' activeClass="active"
          to="sectionHome"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}>Home</Link>
        <Link className='desktopMenuListItem' to="sectionService"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}>Services</Link>
        <Link className='desktopMenuListItem' to="sectionSkills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}>Skills</Link>
        <Link className='desktopMenuListItem' to="sectionProject"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}>Projects</Link>
        <Link className='desktopMenuListItem' to="sectionContact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}>Contact</Link>
      </div>
      <button className='ButtonNavbar' onClick={() => {
        document.getElementById('sectionContact').scrollIntoView({ behavior: "smooth" });
      }}>
        <img src={process.env.PUBLIC_URL + '/assests/contact.png'} alt='' className='ButtonNavbarImg' />
      </button>
    </nav>
  )
}

export default NavbarComponent;