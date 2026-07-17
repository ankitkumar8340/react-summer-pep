import { useState, useEffect } from "react";

const Dom = () => {

    /*
    VIRTUAL DOM WORKING
    1. React creates a virtual DOM tree.
    2. When state or props change, React will make a new Virtual DOM.
    3. It compares the old and new trees using a process called reconcillation.
    4. It finds the parts that changed.
    5. Then it updates only those parts in the real DOM.

    */

    /*
    1. Calling and API.
    2. Setup a timer.
    3. Adding event listeners.
    4. Sync with browser features like localstorage, or document.title.

    */
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`
    }, [count]);

    // [] means it will run only one after the first render
    // [dependencies] it will run at first after the first render 
    useEffect(() => {
        let num = 0;
        const timer = setInterval(() => {
            console.log(`Count: ${num++}`)
        }, 2000);

        //cleanup: if the effect creates something that should be removed later, return a cleanup function
        return () => {
            clearInterval(timer)
        }
    }, [])


    return (
        <>
            <button type="button" onClick={() => setCount((count) => count + 1)}>Count 1</button>
        </>
    )
}

export default Dom;