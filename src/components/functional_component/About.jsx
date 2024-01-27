import '../../css/about.css'
import {useState } from 'react'
function Aboutme()
{
    // return(
    //     <div className="about">
    //         <p>Hello I am Kishore Anand. I am pursuing my B.E Degree in Kongu Engineering College.</p>
            
    //     </div>
    // )
    const [tabName,setTabName]=useState("You don't have ")
    const updateTab=()=>{
        setTabName("the Tablet")
    }
    // const updateTab1=()=>{
    //     setTabName("welcome to cold club of the tablet")
    // }
    // const updateTab2=()=>{
    //     setTabName("welcome to cold club go to die")
    // }
    return(
        
        <div className='about'>
            <h1>Welcome to cold club take {tabName}</h1>
            <button onClick={updateTab}>Update College Name</button>
            
        </div>
        
    )
    
}
export default Aboutme;

