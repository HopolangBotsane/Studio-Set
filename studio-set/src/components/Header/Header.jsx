import { Link } from "react-router"

const Header = () => {
  return (
    <div className="Hero">
        <div className="navigation">
            <ul>
                <Link to="/">
                    <img src="" alt="studio and Set logo" />
                </Link>
                <Link to="/">Know Us</Link>
                <Link to="/">Help Center</Link>
                <Link to="/">Login</Link>
            </ul>
        </div>

        <div className="hero-title">
            <h1>
                Top-Quality Film Equipment for Rent—Gear Up for Your Next Production
            </h1>
            <p>
               Ready to bring your vision to life? Explore our reliable, industry-standard equipment designed to meet filmmakers' highest demands. 
               Renting from us means access to expert advice, well-maintained gear, and support every step of the way. 
               Lights, camera, action—start renting with us today!
            </p>
        </div>
    </div>
  )
}

export default Header