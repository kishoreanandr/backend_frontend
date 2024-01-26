// import { Link } from "react-router-dom"

import "../../css/footer.css"
import { useState } from "react"
const Footer =()=>
{
    const [college_name,updatecollge_name]=useState("Kec")
    const updatingclg=()=>
    {
        updatecollge_name("die slowly!😂")
    }
    return(
        <div className="footer">
            <footer>
            <ul>
                <p>&copy;Welcome to {college_name}. <button onDoubleClick={updatingclg}>Click here to die!</button><br></br> 2024 Copyrights.All rights Rserved|</p><br></br>
                <li><a href="https://github.com/kishoreanandr">Git Hub</a>|</li>
                <li><a href="mailto:kishoreanand.r@gmail.com">Gmail</a></li>
            </ul>
            </footer>
        </div>
    )
}
export default Footer