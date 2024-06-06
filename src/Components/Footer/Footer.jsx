import { FaTwitter } from "react-icons/fa";
import { FaFacebook, FaHeart, FaLinkedin, FaSquareInstagram } from "react-icons/fa6";
import './Footer.css';
const Footer=()=>{
    return<>
    <div className="footer">
        <div className='footer-content'>
        <FaFacebook />
        <FaTwitter />
        <FaSquareInstagram />
        <FaLinkedin />
        </div>
        <hr/>
        <div className='footer-foot-content'>
            <p>@ Your Company.All Rights Reserved.</p>
            <p className="para">Supportive Partner <FaHeart className="heart"/> Naman </p>
        </div>
    </div>
    </>

}
export default Footer;