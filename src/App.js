import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import Colors from "./Colors.js";
import ColorDisplay from "./ColorDisplay";
import ColorForm from "./ColorForm.js";

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/colors"  element={<Colors />} />
          <Route path="/colors/:color" element={<ColorDisplay />}/>
          <Route path="/color-form"  element={<ColorForm />} />
          <Route path="*" element={<Navigate to="/colors" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
