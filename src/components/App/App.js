import { useState } from 'react';
import './App.css';

export default function App() {

  const [clickedNumbers, setClickedNumber] = useState(['0']);
  const [result, setResult] = useState('0');
  const clearButton = 'AC';

  function handleClick(number) {
    let newClickedNumbers = [];


    if (number === "." && clickedNumbers[0] === 0 ) {
      newClickedNumbers = ['0', '.'];
    } else if (clickedNumbers[0] === 0) {
      newClickedNumbers = [number];
    } else {
      newClickedNumbers = [...clickedNumbers, number];
    }
  
    if (number === clearButton) {
      newClickedNumbers = [0];
      setResult('0');
    }

    setClickedNumber(newClickedNumbers);
  }


  const handleEqualClick = () => {
    let expression = clickedNumbers.join('');
    function parse(str) {
      // eslint-disable-next-line no-new-func
      return Function(`'use strict'; return (${str})`)()
  }
    let finalResult = parse(expression);
    setResult(finalResult);
  }

  

  return (
    <div className="App">
      <div className='calculator'>
        <div className='display' id="display">
          <div className='mainExpression' id="mainExpression">{result}</div>
          <div className='currentInput' id="currentInput">{clickedNumbers}</div>
        </div>
        <div className='input'>
          <button id="clear" className='clear' onClick={() => handleClick('AC')}>AC</button>
          <button id="divide" className='divide' onClick={() => handleClick("/")}>/</button>
          <button id="multiply" className='multiply' onClick={() => handleClick("*")}>x</button>
          <button id="equals" className='equals' onClick={() => handleEqualClick()}>=</button>
          <button id="nine" className='nine' onClick={() => handleClick('9')}>9</button>
          <button id="eight" className='eight' onClick={() => handleClick('8')}>8</button>
          <button id="seven" className='seven' onClick={() => handleClick('7')}>7</button>
          <button id="six" className='six' onClick={() => handleClick('6')}>6</button>
          <button id="five" className='five' onClick={() => handleClick('5')}>5</button>
          <button id="four" className='four' onClick={() => handleClick('4')}>4</button>
          <button id="three" className='three' onClick={() => handleClick('3')}>3</button>
          <button id="two" className='two' onClick={() => handleClick('2')}>2</button>
          <button id="one" className='one' onClick={() => handleClick('1')}>1</button>
          <button id="zero" className='zero' onClick={() => handleClick('0')}>0</button>
          <button id="add" className='add' onClick={() => handleClick("+")}>+</button>
          <button id="subtract" className='subtract' onClick={() => handleClick("-")}>-</button>
          <button id="decimal" className='decimal' onClick={() => handleClick(".")}>.</button>
        </div>
      </div>
      <p>Designed and Coded by <br/> TechSavvySos</p>
    </div>
  );
}