import "./footer.css";


function Footer() {
    return (
        <div className="footer-containers">
            <div className="logo-footer">
            <img src="seeflix.png" alt="Seeflix Logo" />
            
              </div>

            <div className="navBar">
               
               <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="#media">Media</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>

         
            </div>

           
      <p className="p-footer">Copyright © 2024. All rights reserved by seeflix.</p>

        </div>
    );
}




 export default Footer;