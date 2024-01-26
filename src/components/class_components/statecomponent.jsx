
import React from "react";
class StateComponentaboutme extends React.Component
{
    constructor()
    {
        super()
        this.about={
            name:"Kishore Anand",
            course:"B.E"
        }
    }
    changestate=()=>
    {
        console.log("Kishore") //use state should be change when come to oops
    }
    render()
    {
        return(
            // <div className="aboutme" style={{backgroundColor:"skyblue"}}></div>
            <div className="aboutme">
                <h4>About me:</h4>
                <p>I am {this.about.name} pursuing my {this.about.course} Degree in Kongu Engineering College with Electronics and Communication Engineering as a specialization</p>
                <p>I am changing the state of {this.about.me} to {this.changestate()}</p>
                <button onMouseLeave={this.changestate}>click me to change the name</button>
            </div>
        )
    }
}

export default  StateComponentaboutme;