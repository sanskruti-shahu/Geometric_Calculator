import React, { useReducer } from 'react';
import './style.css';
import reducer from './PolygonReducer';

function Rhombus() {
    const [{ rholength, rhodiagonal1, rhodiagonal2, answer, found }, dispatch] = useReducer(reducer, 0);
    return (
        <div className="shape rhombus">
            <div className="details" >
                <h1 className="mainHead">Rhombus</h1>
                <p className="info">Rhombus is a special type of a parallelogram whose all sides are equal. The difference between a square and rhombus is that all angles of a square are right angles, but the angles of a rhombus need not be right angles. So, a rhombus with right angles becomes a square. We can say, “Every square is rhombus but all rhombus are not square.”</p>
                <div className="image">
                    <img src={require('./assets/images/Rhombus.png')} alt="rhombus" />
                </div>
                <div className="formulae">
                    <h3>Formulaes :</h3>
                    <h5>Perimeter = 4 * Length</h5>
                    <h5>Area = (Diagonal 1 * Diagonal 2 ) / 2</h5>
                </div>
                <p className="note"><b>Note </b>: Unit of answer will be same as input's unit.Here, No unit is used as they do not affect the calculations. Any other base unit can be substituted. Also, enter the valid input value.</p>
            </div>
            <div className="input1" >
                <div className="inputOutput">
                    <h4 className="subHead">Enter Dimensions of a Rhombus</h4>
                    <div>
                        <label>Length</label><br></br>
                        <input onChange={(event) => dispatch({ type: 'rho-length', value: event.target.value })} className="inputTxt" type="number" value={rholength}></input><br></br>
                        <label>Diagonal 1</label><br></br>
                        <input onChange={(event) => dispatch({ type: 'rho-diagonal1', value: event.target.value })} className="inputTxt" type="number" value={rhodiagonal1}></input><br></br>
                        <label>Diagonal 2</label><br></br>
                        <input onChange={(event) => dispatch({ type: 'rho-diagonal2', value: event.target.value })} className="inputTxt" type="number" value={rhodiagonal2}></input><br></br>
                    </div>
                    <label>Answer {found}</label><br></br>
                    <div className="answer"><span>{answer}</span></div>
                </div>
                <button onClick={(event) => dispatch({ type: 'rho-peri' })} >Calculate Perimeter</button><br></br>
                <button onClick={(event) => dispatch({ type: 'rho-area' })} >Calculate Area</button>
                <button onClick={(event) => dispatch({ type: 'clear' })} >Clear</button>
            </div>
        </div>
    )
}

export default Rhombus
