import { DiJavascript } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoHtml5, IoLogoReact } from "react-icons/io5";
import { ReactTyped } from "react-typed";
import { assets } from '../../assets/assets';
import './Header.css';
const Header = () => {
    return <>
        <div  className='header-section'>
        <div className='header-section-middle'>
                <div className='header-sec-middle-image'>
                    <img src={assets.img2} alt="" />
                </div>
            </div>
        </div>
            <div className='header-section-left'>
                <div className='header-section-info'>
                    <span>Welcome in My Feed</span>
                    <div className='header-section-info-1'>
                        <h1>Hello,I'm a</h1>
                        <span><ReactTyped
                            strings={[
                                "Developer.",
                                "Coder.",
                                "Programmer.",
                            ]}
                            typeSpeed={40}
                            backSpeed={50}
                            loop
                        /></span>
                    </div>
                </div>
                <div className='header-section-left-bottom'>
                        <h5>Currently working on</h5>
                        <div className="header-section-icon">
                            <IoLogoHtml5 />
                            <DiJavascript />
                            <IoLogoCss3 />
                            <IoLogoReact />
                        </div>
                </div>
            </div>
    </>
}
export default Header;