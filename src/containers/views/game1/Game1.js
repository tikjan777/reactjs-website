import React from 'react';
import './Game1.css';


function Game1(){
  const [temp, updateTemp] = React.useState({ f: 0, c: 0 })

  const updateC = ev => updateTemp({
    c: ev.target.value,
    f: (+ev.target.value * 9 / 5 + 32).toFixed(2)
  })
  
  const updateF = ev => updateTemp({
    c: ((+ev.target.value - 32) * 5 / 9).toFixed(2),
    f: ev.target.value
  })

  return(
    <div id="container">
      <h5>This tool calculates equivalent temperature values across several commonly used temperature scales. The Kelvin and Rankine scales are absolute versions of the Celsius and Fahrenheit scales, respectively, meaning that the zero points on these scales reflect a theoretical minimum temperature. In contrast, the zero points on the Celsius and Fahrenheit scales were originally based on observable physical phenomena, such as the freezing point of water.</h5>
      <div id="box1">
        <h1>Celsius</h1>
        <input
            type = "number"
            value = {temp.c}
            onChange = {updateC} >
          </input>
      </div>
      <div id="box2">
          <h1>Fahrenheit</h1>
          <input
            type = "number" 
            value = {temp.f} 
            onChange = {updateF}>
          </input>
          </div>
    </div>
  )
}




export default Game1;