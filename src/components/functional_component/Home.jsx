// function Home()
// {
//     return (
//         <div className="home">
//             <p>This is your Home Page</p>
//         </div>
//     )
// }
// export default Home;


// import { useState } from "react";
// const Onchange=()=>
// {
//     const [inputvalue,changevalue]=useState("typing..")
//     let onchange=(event)=>
//     {
//         const newvalue=event.target.value;
//         changevalue(newvalue);

//     }
//     return(
//         <div>
//             <input type="text" placeholder="Enetr the input" Onchange={onchange}></input>
//             {inputvalue}
//         </div>
//     )
// }
// export default Onchange;

import React from "react";
import { useState } from "react";
import {Link} from 'react-router-dom';
import '../../css/home.css'
const Counter=()=>
{
    const [counter,setCounter]=useState(0)
    const Add=()=>
    {
        setCounter(counter+1)
    }
    const sub=()=>
    {
        setCounter(counter-1)
        if(counter<1)
        {
            setCounter(0)
        }
        
    }
    const reset=()=>
    {
        setCounter(0)
    }
    return(
        <div class="counter">
            <Link to="/previous">
                <button>Previous Page</button>
            </Link>
            <h2>Count:</h2>{counter}<br></br>
            <button onClick={Add}>Increment</button>
            <button onClick={sub}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )

}
export default Counter;