import React,{useState} from 'react';
const Counter = () => {
    const [state,setstate]=useState({count:0,name:'Ahmed'});
    
    const increment=()=>{
        setstate({...state,count:state.count+1});
    };
    const incrementval=()=>{
        setstate({...state,count:state.count+5});
    };
    
    return ( <>
    <h1>Name:{state.name}</h1>
    <h1> Count :{state.count}</h1>
    <button onClick={increment}>+</button>
    <button onClick={incrementval}>+5</button>
    </> );
}
 
export default Counter;