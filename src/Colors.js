import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { defaultColors } from "./data/colors.js";
import "./Colors.css";
function Colors() {
  const [savedColors, setSavedColors] = useState({});
  
  useEffect(() => {
    const storedColors = localStorage.getItem('storedColors');
    if (storedColors) {
      setSavedColors(JSON.parse(storedColors));
    } else {
      setSavedColors(defaultColors);
      localStorage.setItem('storedColors', JSON.stringify(defaultColors));
    }
  }, []);

  return(
    <div className="colors">
      <span className="colors-quote">
        <h1>"Color! What a deep and mysterious language, the language of dreams."</h1>
        <i>-Paul Gauguin</i>
      </span>
      {Object.entries(savedColors).map(([name, val]) => (

        <div key={name} style={{border: ` solid ${val}`, borderRadius: '3px', fontWeight:"bold", background:`${val}`}}>
          <Link 
            to={`/colors/${name}-${val.substring(1,)}`} 
            className="colors-link"
          >
            {name.toUpperCase()}
          </Link>
        </div>
      ))}
      <div className="color-form-link">
        <Link to="/color-form" className="colors-link">New Color</Link>
      </div>
    </div>
  )
}

export default Colors;