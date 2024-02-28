import React, { useState, useEffect } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);
  const [history, setHistory] = useState([]);

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      const newResult = eval(input);
      setResult(newResult);
      setHistory((prevHistory) => [...prevHistory, `${input} = ${newResult}`]);
      setInput('');
    } catch (error) {
      setResult('Error');
    }
  };

  const handleDelete = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const handleClear = () => {
    setInput('');
    setResult(0);
  };

  const handleKeyPress = (event) => {
    const key = event.key;

    if ((key >= '0' && key <= '9') || key === '.' || ['+', '-', '*', '/'].includes(key)) {
      handleButtonClick(key);
    } else if (key === 'Enter') {
      handleCalculate();
    } else if (key === 'Backspace') {
      handleDelete();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [input]);

  return (
    <div style={{justifyContent:'center',alignItems:'center',display:'flex'}}>
    <div className="calculator">
      <h1>Calculator</h1>
      <div className="display">
        <input type="text" value={input} readOnly />
      </div>
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button className="operator" onClick={() => handleButtonClick('+')}>
            +
          </button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button className="operator" onClick={() => handleButtonClick('-')}>
            -
          </button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button className="operator" onClick={() => handleButtonClick('*')}>
            *
          </button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
          <button className="operator" onClick={handleCalculate}>
            =
          </button>
          <button className="operator" onClick={() => handleButtonClick('/')}>
            /
          </button>
        </div>
        <div className="row">
          <button onClick={handleDelete} className="del-button">
            Delete
          </button>
          <button onClick={handleClear} className="clear">
            Clear
          </button>
        </div>
      </div>
      <div className="result">
        <p>Result: {result}</p>
      </div>
      <div className="history">
        <h3>History</h3>
        <ul>
          {history.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
      </div>
    </div>
    </div>

  );
};

export default Calculator;
