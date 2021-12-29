import React, { useReducer } from 'react';
import './style.css';
import './Shape.css';
import reducer from './ObjectReducer';

function Cone() {
    const [{ coneradius, coneheight, answer, found }, dispatch] = useReducer(reducer, 0);
    return (
        <div className="shape Cone">
            <div className="details" >
                <h1 className="mainHead">Cone</h1>
                <p className="info">A cone is a three-dimensional solid geometric shape having a circular base and a pointed edge at the top called the apex. A cone has one face and a vertex. There are no edges for a cone. A cone is a shape that has a curved surface and a circular base. A base of a cone is circular.</p>
                <div className="image">
                    <img src={require('./assets/images/Cone.png')} alt="Cone" />
                </div>
                <div className="formulae">
                    <h5>Surface Area = π * radius * (radius + √((radius^2) + height^2)))</h5>
                    <h5>Volume = 1/3 * π * (radius ^ 2) * height</h5>
                    <h5>π = 3.14</h5>
                </div>
                <p className="note"><b>Note </b>: Unit of answer will be same as input's unit. Here, No unit is used as they do not affect the calculations. Any other base unit can be substituted. Also, enter the valid input value.</p>
            </div>
            <div className="input1" >
                <div className="inputOutput">
                    <h4 className="subHead">Enter Dimensions of a Cone</h4>
                    <div>
                        <label>Radius</label><br></br>
                        <input onChange={(event) => dispatch({ type: 'cone-radius', value: event.target.value })} className="inputTxt" type="number" value={coneradius}></input><br></br>
                        <label>Height</label><br></br>
                        <input onChange={(event) => dispatch({ type: 'cone-height', value: event.target.value })} className="inputTxt" type="number" value={coneheight}></input><br></br>
                    </div>
                    <label>Answer {found}</label><br></br>
                    <div className="answer"><span>{answer}</span></div>
                </div>
                <button onClick={(event) => dispatch({ type: 'cone-surfarea' })} >Calculate Surface Area</button><br></br>
                <button onClick={(event) => dispatch({ type: 'cone-volume' })} >Calculate Volume</button><br></br>
                <button onClick={(event) => dispatch({ type: 'clear' })} >Clear</button>
            </div>
        </div>
    )
}

export default Cone
