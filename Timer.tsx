import { useEffect, useState } from "react";

const Timer=()=>{
    const [count,setCount]=useState(0);
    const timerTick=()=>{
        //count++;
        setCount(count+1);
    }
    useEffect(()=>{
        let id= setInterval(timerTick,1000);
        console.log(id);
        return ()=>clearInterval(id);
    },[count])
   return(
    <>
    {count}
    </>
   )
}
export default Timer;
