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
        <p>Lorem ipsum dolor sit amet.
        </p>

        <h1>hello world</h1>
        <h2>updating on git</h2>
        </>
    )
}

export default UseRef;