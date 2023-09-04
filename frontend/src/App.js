import React, { useState, useEffect } from 'react';
import './App.css';

import axios from 'axios';

function App() {

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [answer, setAnswer] = useState(0);
  const [sign, setSign] = useState(0);

  useEffect(() => {
    let choice = "";
    switch (sign) {
      case 0:
        choice = "add";
        break;
      case 1:
        choice = "subtract";
        break;
      case 2:
        choice = "multiply";
        break;
      case 3:
        choice = "divide";
        break;
      default:
        choice = "add";
        return;
    }


    axios.post("http://localhost:3000/" + choice, {
      num1: num1,
      num2: num2
    })
      .then(results => {
        setAnswer(results.data.result);
      })
      .catch(err => {
        console.log(err)
      })
  }, [num1, num2, sign])

  return (
    <div className="container">
      <div className="calculator">
        <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
        <div className="signs">
          <div onClick={() => setSign(0)} className={sign === 0 ? "selected" : ""}>
            +
          </div>
          <div onClick={() => setSign(1)} className={sign === 1 ? "selected" : ""}>
            -
          </div>
          <div onClick={() => setSign(2)} className={sign === 2 ? "selected" : ""}>
            *
          </div>
          <div onClick={() => setSign(3)} className={sign === 3 ? "selected" : ""}>
            /
          </div>
        </div>
        <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
        <p>= {answer}</p>
      </div>
    </div>
  );
}

export default App;
