import { useRef, useState } from "react";

const UseRef = ()=>{
    const [count, setCount]= useState(0);



    return (
        <>
        <input ref={inputRef} type="text" />
        <button onClick={focusInput}>focus</button>

        <button onClick={()=>setCount(count+1)}>count++</button>

        <h1>count : {count}</h1>
        </>
    )
}

export default UseRef;