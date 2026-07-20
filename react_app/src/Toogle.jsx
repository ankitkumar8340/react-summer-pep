import React, { useState } from "react";


const Toggle = () =>{


    return(
        <>
        <div style={styles.container}>
      <h1>{darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}</h1>

      <p>
        Click the button below to switch between light and dark mode.
      </p>

      <button
        style={styles.button}
        onClick={() => setDarkMode(!darkMode)}
      >
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
        
        </>
    )

}




export default Toggle;