import React, { useState } from 'react'

function App() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');

    const [res, setRes] = useState(null);
    const [msg, setMsg] = useState(null);

    const calculate = (result) => {
        if(!num1) {
            setRes('Num1 Cannot Be Empty')
            setMsg('Error')
        }
        else if(!num2) {
            setRes('Num2 Cannot Be Empty')
            setMsg('Error')
        }
        else if(isNaN(Number(num1))){
            setRes('Num1 Should Be Either Integer, Floating-Point Number, Positive, Or Negative')
            setMsg('Error')
        }
        else if(isNaN(Number(num2))){
            setRes('Num2 Should Be Either Integer, Floating-Point Number, Positive, Or Negative')
            setMsg('Error')
        }
        else{
            setRes('Result : ' + result);
            setMsg('Success')
        }
    }

    return (
        <div className='app'>
            <div className="main">
                <h1>React Calculator</h1>
                <div className="calculator">
                    <input type="text" placeholder='Num 1' value={num1} onChange={(e) => {setRes(null); setNum1(e.target.value)}} />
                    <input type="text" placeholder='Num 2' value={num2} onChange={(e) => {setRes(null); setNum2(e.target.value)}} />
                    <div className="btns">
                        <button onClick={() => calculate(Number(num1) + Number(num2))}>+</button>
                        <button onClick={() => calculate(Number(num1) - Number(num2))}>-</button>
                        <button onClick={() => calculate(Number(num1) * Number(num2))}>*</button>
                        <button onClick={() => calculate(Number(num1) / Number(num2))}>/</button>
                    </div>
                </div>

                {
                    res && (
                        <>
                            <div className={`msg ${msg}`}>{msg}!</div>
                            <div className="result">{res}</div>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default App