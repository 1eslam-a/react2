import React, { useState,useEffect } from 'react';
import Interval from './Interval';

const Counters = () => {
    
    const[count1,setcount1]=useState(0);
    const[count2,setcount2]=useState(0);
    const[show,setshow]=useState(true);
    useEffect(()=>{
        //1.
        //After first render => After first render & after every render

        //2.
        //with empty depsArray => After first render
        //3.
        //with depsArray => After first render & depsArray
        //4.
        //Cleanup function => Befor destorying the component &  befor next effect
        //console.log("useEffect Hook is called");


        //clean function
        return()=>{
            //console.log("cleanUp");
        }
    },[count1]);
    
   // console.log("render");
   return (
  
   <>

   <div>
    <button onClick={()=> setshow(!show)}>
        Show/hide
    </button>
    {show &&<Interval/>}
   </div>
    <div>
        <h3>count:{count1}</h3>
        <button onClick={()=> setcount1(count1+1)}>+</button>
        </div>
        
        <div>
        <h3>count:{count2}</h3>
        <button onClick={()=> setcount2(count2+1)}>+</button>
    </div>
    
    </> 
     );
}
 
export default Counters;