import React from "react";
import { useParams, Link } from "react-router-dom";
import "./ColorDisplay.css";

function ColorDisplay() {
  const { color: colorParam } = useParams(); // Destructure and rename the parameter
  const [name, hex] = colorParam.split("-"); // Split the parameter into color and hex


  console.log(name, hex);

  return (
    <div className="color-display" style={{ background: `#${hex}` }}>
      <p className="color-name">{name.toUpperCase()}</p>
      <p className="color-hex">{`#${hex}`}</p>
      <Link to="/colors" className="colors-link">BACK</Link>
    </div>
  );
}

export default ColorDisplay;