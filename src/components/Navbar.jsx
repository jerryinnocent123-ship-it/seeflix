import "./nav.css"
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <>
        <div className="nav-container">
            {/* Logo nan nav la */}
            <div className="logo">
                <img src="seeflix.png" alt="SeeFlix Logo" />
                <h5>Seeflix</h5>
            </div>
            {/* Navbar */}
        <nav className="navbar">
            <ul>
                <li> <Link to={"/"}> Home </Link>   </li>
                <li> <Link to={"/media"}> Media </Link> </li>
                <li> <Link to={"/about"}> About </Link> </li>
                <li> <Link to={"/contact"}> Contact </Link> </li>
            </ul>
        </nav>


        </div>
        
        
        </>
    )
}


export default NavBar;