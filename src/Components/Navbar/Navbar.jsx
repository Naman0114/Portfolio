import { useState } from 'react';
import { Link } from 'react-scroll';
import { assets } from '../../assets/assets';
import './Navbar.css';
const Navbar = () => {
    const [pass, setPass] = useState("home");
    return <>
        <div className='navbar'>
            <div className='navbar-image'>
                <img src={assets.img2} alt="img not found" />
                <p>Naman</p>
            </div>
                <div className='navbar-pics'>
                <img src={assets.img8} className='navbar-pic1' alt="" />
                <img src={assets.img9} className='navbar-pic2' alt="" />
                </div>
            
            <div className='navbar-list'>
                <ul className='navbar-list-info'>
                    <Link to='home' spy={true} smooth={true} offset={-100} duration={500}><p onClick={() => setPass("home")} className={pass === "home" ? "active" : ""}>Home</p></Link>
                    <Link to='about' spy={true} smooth={true} offset={-40} duration={200}><p onClick={() => setPass("About")} className={pass === "About" ? "active" : ""}>About</p></Link>
                    <Link to='projects' spy={true} smooth={true} offset={-40} duration={500}> <p onClick={() => setPass("Projects")} className={pass === "Projects" ? "active" : ""}>Projects</p></Link>
                    <Link to='contact' spy={true} smooth={true} offset={0} duration={400}><p onClick={() => setPass("Contact us")} className={pass === "Contact us" ? "active" : ""}>Contact us </p></Link>
                </ul>
            </div>
        </div>
    </>

}
export default Navbar;