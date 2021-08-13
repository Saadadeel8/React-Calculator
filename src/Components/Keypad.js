import React from 'react'

function Keypad(props) {
    return (
        <div className="Keypad">
                <tr><td><button className="Operator" id='CE' onClick={() => props.addToDisplay('clear')}>CE</button></td>
                    <td><button className="Operator" id='backspace' onClick={() => props.addToDisplay('backspace')}>BS</button></td></tr>

                <tr><td><button className="Number" id='1' onClick={() => props.addToDisplay(1)}>1</button></td>
                    <td><button className="Number" id='2' onClick={() => props.addToDisplay(2)}>2</button></td>
                    <td><button className="Number" id='3' onClick={() => props.addToDisplay(3)}>3</button></td>
                    <td><button className="Operator" id='Plus' onClick={() => props.addToDisplay("+")} >+</button></td></tr>
                <tr><td><button className="Number" id='4' onClick={() => props.addToDisplay(4)}>4</button></td>
                    <td><button className="Number" id='5' onClick={() => props.addToDisplay(5)}>5</button></td>
                    <td><button className="Number" id='6' onClick={() => props.addToDisplay(6)}>6</button></td>
                    <td><button className="Operator" id='Minus' onClick={() => props.addToDisplay("-")}>-</button></td></tr>
                <tr><td><button className="Number" id='7' onClick={() => props.addToDisplay(7)}>7</button></td>
                    <td><button className="Number" id='8' onClick={() => props.addToDisplay(8)}>8</button></td>
                    <td><button className="Number" id='9' onClick={() => props.addToDisplay(9)}>9</button></td>
                    <td><button className="Operator" id='Divide' onClick={() => props.addToDisplay("/")}>/</button></td></tr>
                <tr><td><button className="Number" id='Point' onClick={() => props.addToDisplay(".")}>.</button></td>
                    <td><button className="Number" id='0' onClick={() => props.addToDisplay(0)}>0</button></td>
                    <td><button className="Operator" id='Equal' onClick={() => props.addToDisplay('equal')}>=</button></td>
                    <td><button className="Operator" id='Multiply' onClick={() => props.addToDisplay("*")}>*</button></td></tr>
            </div>
    )
}

export default Keypad

            