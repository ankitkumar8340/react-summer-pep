import { useRef, useState } from "react";

const UseRef = ()=>{
    const [count, setCount]= useState(0);



    return (
        <>
        <input ref={inputRef} type="text" />
        <button onClick={focusInput}>focus</button>

        <button onClick={()=>setCount(count+1)}>count++</button>

        <h1>count : {count}</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, deleniti.</p>
        </>
    )
}

export default UseRef;