import { useRef } from "react";

const UseRef = ()=>{
    const inputref



    return (
        <>
        <input ref={inputRef} type="text" />
        <button onClick={focusInput}>focus</button>
        
        </>
    )
}

export default UseRef;