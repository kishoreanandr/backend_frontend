// import '../../css/skills.css'
// function Skills()
// {
//     return(
//         <div className="skills">
//             <p>Hello I am a Full Stack Developer</p>
//         </div>
//     )
// }
// export default Skills;

import '../../css/skills.css'
import { useReducer } from "react";
const value={count:0}
function countFunction(state,action)
{
    switch(action)
    {
        case 'sub':
        {
            if (state.count<1)
            {
                state.count=0
            }
            return {count:state.count-1};

        }
        case 'add':
        {
            return {count:state.count+1};
        }
        case 'reset':
        {
            return {count:value.count}
        }
        default:
        {
            return 0;
        }
    }
}
const Login =()=>
{
    const[countVal,updateCount]=useReducer(countFunction,value); //updateCount=>countFunction
    return(
        <div class="skills">
            <h3>This is a useReducer example</h3>
            <h3>Count:{countVal.count}</h3>
            <button onClick={()=>updateCount("sub")}> Subtractor</button>
            <button onClick={()=>updateCount("add")}>Addition</button>
            <button onClick={()=>updateCount("reset")}>Reset</button>
        </div>
    )
}
export default Login;