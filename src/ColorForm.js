import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import useSaveColor from "./UseSaveColor.js"
import { colorOptions } from "./data/colors";
import "./ColorForm.css";

function ColorForm() {
    const [selectedColor, setSelectedColor] = useState('');
    const navigate = useNavigate();
    useSaveColor(selectedColor);
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/colors");
    };

    return (
      <div className='color-form'>
        <form onSubmit={handleSubmit}>
          <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
            <option value="">Select a color</option>
            {Object.entries(colorOptions).map(([name, hex]) => (
                <option key={name} value={`${name}:${hex}`}>{name}</option>
            ))}
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}

export default ColorForm;