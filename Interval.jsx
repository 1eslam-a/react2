import React,{useEffect} from 'react';

const Interval = () => {
    useEffect(()=>{
        console.log("Effect - internval");

        const internval = setInterval(()=>{console.log('interval')}
            ,1000);

            return ()=>{
                console.log("clean up - interval");
            
            clearInterval(internval)};
        },[]);
    console.log("Render - interval");
    return ( <h1>Interval</h1> );
}
 
export default Interval;
