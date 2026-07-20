import React, { useState } from "react";


const Toggle = () =>{
    const [darkMode, setDarkMode] = useState(false);

  const styles = {
    container: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: darkMode ? "#121212" : "#f4f4f4",
      color: darkMode ? "#ffffff" : "#000000",
      transition: "0.3s ease",
      fontFamily: "Arial, sans-serif",
    },


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