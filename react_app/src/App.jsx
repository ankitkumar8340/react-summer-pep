import { useState } from "react";
import './App.css';


function App(){
  const [count, setCount]= useState(0);

  const clicklistenermax = () => {
    setCount(count+1);
  }

  // const clicklistenermin= ()=>{
  //   setCount(count-1);
  // }

  

return(
  //XML :- it is used to store, organise, and transport data in a structured, human-readable, and machine
  <>
  <button onClick={clicklistenermax}>COUNT++</button>
  <button onClick = {()=> {setCount(count-1)}}>COUNT--</button>
  <h1 className="h1Design">Hello world</h1>
  {count}
  
  </>
)
}

export default App;