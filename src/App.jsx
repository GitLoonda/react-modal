import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState('#ccc');

  return (
    <div className='container'>
      <h1>Color App</h1>
      <div 
        className='color-box' 
        style={{ backgroundColor: color}}
      ></div>
      <div className='btn-group'>
        <button onClick={() => setColor("red")}>red</button>
        <button onClick={() => setColor("green")}>green</button>
        <button onClick={() => setColor("blue")}>blue</button>
      </div>
    </div>
  );
}

export default App;
