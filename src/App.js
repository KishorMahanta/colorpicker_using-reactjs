import { useState } from 'react';
import {SketchPicker} from 'react-color'


function App() {

  const [currentColor, setCurrentColor] =useState("#ff6")
  const hanleOnChange =(color)=>{
    setCurrentColor(color.hex)
   // console.log(color.hex)
  }

  const appStyle ={
    backgroundColor: currentColor,
   height:"100vh",
  textAlign: "center",
  }
  return (
<div className="App" style={appStyle}>
   <h1>Color Picker</h1>
   <h3>Color Code:{currentColor}</h3>
   
   <SketchPicker
    color={currentColor}
    onChangeComplete={hanleOnChange}
   />
   
   </div>
  );
}

export default App;
