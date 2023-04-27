import { useState } from 'react';
import './App.css';

function App() {

  const [clickedNumbers, setClickedNumber] = useState([0]);
  const [currentOperation, setCurrentOperation] = useState({
    operator: null,
    operand: null
  });
  const clearButton = 'AC';


  function handleClick(number) {
    if(clickedNumbers[0] === 0 || clickedNumbers[0] === 'AC'){
      setClickedNumber([number]);
    } else {
        if(number === clearButton)
          setClickedNumber([0]);
        else 
          setClickedNumber([...clickedNumbers, number]);
    }

    switch(number){
      case '+':
        setCurrentOperation({
          operator: '+',
          operand: Number(clickedNumbers.join(''))
        });
      break;

      default: 
        setCurrentOperation({
          operator: '#',
          operand: Number(clickedNumbers.join(''))
        });
    }
  }

  return (
    <div className="App">
      <div className='calculator'>
        <div className='display' id="display">
          <div className='mainExpression' id="mainExpression">{clickedNumbers.join('')}</div>
          <div className='currentInput' id="currentInput">{clickedNumbers}</div>
        </div>
        <div className='input'>
          <button id="clear" className='clear' onClick={() => handleClick('AC')}>AC</button>
          <button id="divide" className='divide' onClick={() => handleClick("/")}>/</button>
          <button id="multiply" className='multiply' onClick={() => handleClick("x")}>x</button>
          <button id="equals" className='equals' onClick={() => handleClick("=")}>=</button>
          <button id="nine" className='nine' onClick={() => handleClick(9)}>9</button>
          <button id="eight" className='eight' onClick={() => handleClick(8)}>8</button>
          <button id="seven" className='seven' onClick={() => handleClick(7)}>7</button>
          <button id="six" className='six' onClick={() => handleClick(6)}>6</button>
          <button id="five" className='five' onClick={() => handleClick(5)}>5</button>
          <button id="four" className='four' onClick={() => handleClick(4)}>4</button>
          <button id="three" className='three' onClick={() => handleClick(3)}>3</button>
          <button id="two" className='two' onClick={() => handleClick(2)}>2</button>
          <button id="one" className='one' onClick={() => handleClick(1)}>1</button>
          <button id="zero" className='zero' onClick={() => handleClick(0)}>0</button>
          <button id="add" className='add' onClick={() => handleClick("+")}>+</button>
          <button id="subtract" className='subtract' onClick={() => handleClick("-")}>-</button>
          <button id="decimal" className='decimal' onClick={() => handleClick(".")}>.</button>
        </div>
      </div>
      <p>Designed and Coded by <br/> TechSavvySos</p>
    </div>
  );
}

export default App;
