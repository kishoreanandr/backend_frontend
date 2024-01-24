import React from "react";
/*
class Reitreatorclasscomp extends React.Component  //it will be class only if we want to convert into react use extend
{
    render() //it is a object
    {
        return (
            <div>
                <p>Reiterating class component</p>
            </div>)
    }
}
//default => Call all the tags inside
export default Reitreatorclasscomp*/

class Learned extends React.Component
{
    render()
    {
        return(
            <div>
                <p>Learned Class Component</p>
            </div>
        )
    }
}

class classlearn extends Learned 
{
    render()
    {
        return(
            <div>
                <p>From Rampex</p>
            </div>
        )
    }
}

export default classlearn;
