import React, { useReducer } from 'react';
import './style.css';
import reducer from './PolygonReducer';

function Triangle() {
    const [{ triside1, triside2, triside3, answer, found }, dispatch] = useReducer(reducer, 0);
    return (
        <div className="shape triangle">
            <div className="details" >
                <h1 className="mainHead">Triangle</h1>
                <p className="info">A triangle is a polygon with three edges and three vertices. It is one of the basic shapes in geometry. A triangle with vertices A, B, and C is denoted △ABC. In Euclidean geometry, any three points, when non-collinear, determine a unique triangle and simultaneously, a unique plane.</p>
                <div className="image">
                    <img src={require('./assets/images/Triangle.png')} alt="rectangle" />
                </div>
                <div className="formulae">
                    <h3>Formulaes :</h3>
                    <h5>Perimeter = (side 1 + side 2 + side 3)</h5>
                    <h5>Area = √(s * (s - side 1) * (s - side 2) * (s - side 3))</h5>
                    <h5>s = (side 1 + side 2 + side 3)/2</h5>
                </div>
                <p className="note"><b>Note </b>: Unit of answer will be same as input's unit. Here, No unit is used as they do not affect the calculations. Any other base unit can be substituted. Also, enter the valid input value.</p>
            </div>
            <div className="input1" >
                <div className="inputOutput">
                    <h4 className="subHead">Enter Dimensions of a Rectangle</h4>
                    <div>
                        <label>Side 1</label><br></br>
                        <input onChange={(event) => dispatch({ type: 'tri-side1', value: event.target.value })} className="inputTxt" type="number" value={triside1}></input><br></br>
                        <label>Side 2</label><br></br>
                        <input onChange={(event) => dispatch({ type: 'tri-side2', value: event.target.value })} className="inputTxt" type="number" value={triside2}></input><br></br>
                        <label>Side 3</label><br></br>
                        <input onChange={(event) => dispatch({ type: 'tri-side3', value: event.target.value })} className="inputTxt" type="number" value={triside3}></input><br></br>
                    </div>
                    <label>Answer {found}</label><br></br>
                    <div className="answer"><span>{answer}</span></div>
                </div>
                <button onClick={(event) => dispatch({ type: 'tri-peri' })} >Calculate Perimeter</button><br></br>
                <button onClick={(event) => dispatch({ type: 'tri-area' })} >Calculate Area</button>
                <button onClick={(event) => dispatch({ type: 'clear' })} >Clear</button>
            </div>
        </div>
    )
}

export default Triangle
