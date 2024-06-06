import { DiJavascript } from "react-icons/di";
import { FaFacebook, FaLinkedin, FaSquareInstagram } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoHtml5, IoLogoReact } from "react-icons/io5";
import { ReactTyped } from "react-typed";
import { assets } from '../../assets/assets';
import './Header.css';
const Header = () => {
    return <>
        <div  className='header-section'>
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
                    <div className='header-section-info-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis est corporis accusantium deserunt repellendus expedita pariatur aliquid voluptatem nemo vero, itaque nihil in ratione voluptas esse fugiat nostrum! Perferendis animi suscipit natus ut vitae rem veritatis minima dolorem quasi nemo, magni pariatur quas aut similique facilis! Odit eveniet vero maxime architecto officia nesciunt nam. Fuga placeat debitis doloremque. Sunt, iste.
                    </div>
                </div>
                <div className='header-section-left-bottom'>
                    <div className='header-section-left-info'>
                        <h5>Available on</h5>
                        <div className='header-section-icon-left'>
                            <FaFacebook />
                            <FaSquareInstagram />
                            <FaLinkedin />
                        </div>
                    </div>
                    <div className='header-section-right-info'>
                        <h5>Currently working on</h5>
                        <div className="header-section-icon-right">
                            <IoLogoHtml5 />
                            <DiJavascript />
                            <IoLogoCss3 />
                            <IoLogoReact />
                        </div>
                    </div>
                </div>
            </div>
            <div className='header-section-right'>
                <div className='header-sec-right-image'>
                    <img src={assets.img2} alt="" />
                </div>
            </div>
        </div>
        <hr/>
    </>
}
export default Header;