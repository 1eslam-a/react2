import React, { useState, useEffect } from 'react';
const Timer = () => {
const[timer,settimer]=useState(0);

    useEffect(()=>{
        const incrementtimer =()=>{
            settimer(timer+1);
            }
        const interval= setInterval(incrementtimer,1000);

        return()=>{
            clearInterval(interval)
        }
    },[timer]);

    return ( 
        
    <><h1>Time:{timer}</h1> </>);
}

export default Timer;
