import React, { useReducer } from 'react';
import './style.css';
import reducer from './PolygonReducer';

function Square() {
    const [{ sqlength, answer, found }, dispatch] = useReducer(reducer, 0);
    return (
        <div className="shape square">
            <div className="details" >
                <h1 className="mainHead">Square</h1>
                <p className="info">A square is a regular quadrilateral, which means that it has four equal sides and four equal angles (90-degree angles, π/2 radian angles, or right angles). It can also be defined as a rectangle in which two adjacent sides have equal length. The diagonals of a square are √2 times the length of a side of the square. A square has a larger area than any other quadrilateral with the same perimeter.</p>
                <div className="image">
                    <img src={require('./assets/images/Square.png')} alt="square" />
                </div>
                <div className="formulae">
                    <h3>Formulaes :</h3>
                    <h5>Perimeter = 4 * length</h5>
                    <h5>Area = (length ^ 2)</h5>
                </div>
                <p className="note"><b>Note </b>: Unit of answer will be same as input's unit.Here, No unit is used as they do not affect the calculations. Any other base unit can be substituted. Also, enter the valid input value.</p>
            </div>
            <div className="input1" >
                <div className="inputOutput">
                    <h4 className="subHead">Enter Dimensions of a Square</h4>
                    <div>
                        <label>Length</label><br></br>
                        <input onChange={(event) => dispatch({ type: 'square-length', value: event.target.value })} className="inputTxt" type="number" value={sqlength}></input><br></br>
                    </div>
                    <label>Answer {found}</label><br></br>
                    <div className="answer"><span>{answer}</span></div>
                </div>
                <button onClick={(event) => dispatch({ type: 'square-peri' })} >Calculate Perimeter</button><br></br>
                <button onClick={(event) => dispatch({ type: 'square-area' })} >Calculate Area</button>
                <button onClick={(event) => dispatch({ type: 'clear' })} >Clear</button>
            </div>
        </div>
    )
}

export default Square
