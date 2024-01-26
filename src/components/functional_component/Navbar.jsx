import "../../css/navbar.css"
import { Link } from "react-router-dom";
function Navbaar(){
    return (
        <div class="Navbar">
            <h3>Portfolio</h3>
            <ul>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Skills">Skills</Link></li>
                <li><Link to="/Project">Project</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
        </div>)
}
export default Navbaar;

//npm i react-router-dom