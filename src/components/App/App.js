import { useState } from 'react';
import './App.css';

function App() {

  const [input, setInput] = useState(0);

  return (
    <div className="App">
      <div className='calculator'>
        <div className='display' id="display">
          <div className='mainExpression' id="mainExpression"></div>
          <div className='currentInput' id="currentInput">{input}</div>
        </div>
        <div className='input'>
          <button id="clear" className='clear'>AC</button>
          <button id="divide" className='divide'>/</button>
          <button id="multiply" className='multiply'>x</button>
          <button id="equals" className='equals'>=</button>
          <button id="nine" className='nine'>9</button>
          <button id="eight" className='eight'>8</button>
          <button id="seven" className='seven'>7</button>
          <button id="six" className='six'>6</button>
          <button id="five" className='five'>5</button>
          <button id="four" className='four'>4</button>
          <button id="three" className='three'>3</button>
          <button id="two" className='two'>2</button>
          <button id="one" className='one'>1</button>
          <button id="zero" className='zero'>0</button>
          <button id="add" className='add'>+</button>
          <button id="subtract" className='subtract'>-</button>
          <button id="decimal" className='decimal'>.</button>
        </div>
      </div>
      <p>Designed and Coded by <br/> TechSavvySos</p>
    </div>
  );
}

export default App;
