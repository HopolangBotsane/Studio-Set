import { Link } from "react-router";
import Facebook from "./Icons/Facebook.svg";
import Instagram from "./Icons/Instagram.svg";
import Tiktok from "./Icons/Tiktok.svg";
import Twitter from "./Icons/Twitter.svg";
import YouTube from "./Icons/YouTube.svg";

const Footer = () => {

    const currentYear = new Date().getFullYear()

    return (
        <div className="footer">
            <div className="footer-left">
                <p>&copy; {currentYear} Studio&Set</p>
                <ul>
                    <Link to="/">Privacy</Link>
                    <Link to="/">Terms</Link>
                    <Link to="/">Site Map</Link>
                </ul>
            </div>

            <div className="footer-right">
                <Link>
                    <img src={Twitter} alt="twitter logo"/>
                </Link>

                <Link>
                    <img src={YouTube} alt="youtube logo"/>
                </Link>

                <Link>
                    <img src={Instagram} alt="instagram logo"/>
                </Link>

                <Link>
                    <img src={Facebook} alt="facebook logo"/>
                </Link>

                <Link>
                    <img src={Tiktok} alt="tiktok logo"/>
                </Link>
            </div>
        </div>
  )
}

export default Footer