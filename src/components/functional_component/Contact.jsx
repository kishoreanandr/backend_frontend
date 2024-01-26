// const Contact=()=>
// {
//     return(
//         <div className="contact">
//             <p>Contact:6380679644</p>
//         </div>
//     )
// }
// export default Contact;

import { useReducer } from "react";
const value={count:0}
function countFunction(state,action)
{
    switch(action.type)
    {
        case 'sub':
        {
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
    }
}
const Login =()=>
{
    const[countVal,updateCount]=useReducer(countFunction,value); //updateCount=>countFunction
    return(
        <div>
            <h3>This is a useReducer example</h3>
            <h3>Count:{countVal.count}</h3>
            <button onClick={()=>updateCount({type:"sub"})}> Subtractor</button>
            <button onClick={()=>updateCount({type:"add"})}>Addition</button>
            <button onClick={()=>updateCount({type:"reset"})}>Reset</button>
        </div>
    )
}
export default Login;