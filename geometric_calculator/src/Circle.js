import React, { useReducer } from 'react';
import './style.css';
import './Shape.css';
import reducer from './PolygonReducer';

function Circle() {
    console.log("PolygonPage")
    const [{ radi, answer, found }, dispatch] = useReducer(reducer, 0);
    return (
        <div className="shape circle">
            <div className="details" >
                <h1 className="mainHead">Circle</h1>
                <p className="info">A circle is a shape consisting of all points in a plane that are at a given distance from a given point, the centre; equivalently it is the curve traced out by a point that moves in a plane so that its distance from a given point is constant. The distance between any point of the circle and the centre is called the radius. Usually, the radius is required to be a positive number (Circle with r=0 is a degenerated case).</p>
                <div className="image">
                    <img src={require('./assets/images/Circle.png')} alt="circle" />
                </div>
                <div className="formulae">
                    <h5>Circumference = 2 * π * radius</h5>
                    <h5>Area = π * (radius ^ 2)</h5>
                    <h5>π = 3.14</h5>
                </div>
                <p className="note"><b>Note </b>: Unit of answer will be same as input's unit. Here, No unit is used as they do not affect the calculations. Any other base unit can be substituted. Also, enter the valid input value.</p>
            </div>
            <div className="input1" >
                <div className="inputOutput">
                    <h4 className="subHead">Enter Dimensions of a Circle</h4>
                    <div>
                        <label>Radius</label><br></br>
                        <input onChange={(event) => dispatch({ type: 'circle-radius', value: event.target.value })} className="inputTxt" type="number" value={radi}></input><br></br>
                    </div>
                    <label>Answer {found}</label><br></br>
                    <div className="answer"><span>{answer}</span></div>
                </div>
                <button onClick={(event) => dispatch({ type: 'circle-circum' })} >Calculate Circumference</button><br></br>
                <button onClick={(event) => dispatch({ type: 'circle-area' })} >Calculate Area</button><br></br>
                <button onClick={(event) => dispatch({ type: 'clear' })} >Clear</button>
            </div>
        </div>
    )
}

export default Circle
