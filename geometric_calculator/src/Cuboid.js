import React, { useReducer } from 'react';
import './style.css';
import './Shape.css';
import reducer from './ObjectReducer';

function Cuboid() {
    const [{ cuboidlength, cuboidbreadth, cuboidheight, answer, found }, dispatch] = useReducer(reducer, 0);
    return (
        <div className="shape Cuboid">
            <div className="details" >
                <h1 className="mainHead">Cuboid</h1>
                <p className="info">A cuboid is a three-dimensional solid shape that has 6 faces, 8 vertices, and 12 edges. It is one of the most commonly seen shapes around us which has three dimensions: length, width, and height. Sometimes a cuboid is confused with a cube since it shares some properties of a cube, however, they are different from each other.</p>
                <div className="image">
                    <img src={require('./assets/images/Cuboid.png')} alt="Cuboid" />
                </div>
                <div className="formulae">
                    <h5>Surface Area = 2 * ((lenth * breadth) + (length * height) + (breadth * height))</h5>
                    <h5>Volume = length * height * breadth</h5>
                </div>
                <p className="note"><b>Note </b>: Unit of answer will be same as input's unit. Here, No unit is used as they do not affect the calculations. Any other base unit can be substituted. Also, enter the valid input value.</p>
            </div>
            <div className="input1" >
                <div className="inputOutput">
                    <h4 className="subHead">Enter Dimensions of a Cuboid</h4>
                    <div>
                        <label>Length</label><br></br>
                        <input onChange={(event) => dispatch({ type: 'cuboid-length', value: event.target.value })} className="inputTxt" type="number" value={cuboidlength}></input><br></br>
                        <label>Breadth</label><br></br>
                        <input onChange={(event) => dispatch({ type: 'cuboid-breadth', value: event.target.value })} className="inputTxt" type="number" value={cuboidbreadth}></input><br></br>
                        <label>Height</label><br></br>
                        <input onChange={(event) => dispatch({ type: 'cuboid-height', value: event.target.value })} className="inputTxt" type="number" value={cuboidheight}></input><br></br>
                    </div>
                    <label>Answer {found}</label><br></br>
                    <div className="answer"><span>{answer}</span></div>
                </div>
                <button onClick={(event) => dispatch({ type: 'cuboid-surfarea' })} >Calculate Surface Area</button><br></br>
                <button onClick={(event) => dispatch({ type: 'cuboid-volume' })} >Calculate Volume</button><br></br>
                <button onClick={(event) => dispatch({ type: 'clear' })} >Clear</button>
            </div>
        </div>
    )
}

export default Cuboid
