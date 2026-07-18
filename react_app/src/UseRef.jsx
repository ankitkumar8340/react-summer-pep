import { useRef, useState } from "react";

const UseRef = ()=>{
    const [count, setCount]= useState(0);



    return (
        <>
        <input ref={inputRef} type="text" />
        <button onClick={focusInput}>focus</button>

        <button onClick={()=>setCount(count+1)}>count++</button>
        {count}
        </>
    )
}

export default UseRef;