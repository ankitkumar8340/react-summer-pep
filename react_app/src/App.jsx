import { useState } from "react";
import './App.css';
import Card from "./Card.jsx";
import Navbar from "./Navbar.jsx";
import Dom from "./Dom.jsx";

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
  {/* <Navbar name="Ankit"/> */}
  

  {/* <button onClick={clicklistenermax}>COUNT++</button>
  <button onClick = {()=> {setCount(count-1)}}>COUNT--</button> */}
  {/* <h1 className="h1Design">Hello world</h1>
  <div className="flex flex-wrap">
  {count}
  <Card />
  <Card />
  <Card />
  <Card />
  <Card />
  <Card />
  <Card />
  <Card />
  <Card /> */}
  {/* </div> */}
  <Dom />
  
  </>
)
}

export default App;