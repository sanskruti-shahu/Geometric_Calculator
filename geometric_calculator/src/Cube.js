import React, { useReducer } from 'react';
import './style.css';
import './Shape.css';
import reducer from './ObjectReducer';

function Cube() {
    const [{ cubelength, answer, found }, dispatch] = useReducer(reducer, 0);
    return (
        <div className="shape Cube">
            <div className="details" >
                <h1 className="mainHead">Cube</h1>
                <p className="info">A cube is a 3D solid object with six square faces and all the sides of a cube are of the same length. A cube consists of six square faces, eight vertices, and twelve edges. The length, breadth, and height are of the same measurement in a cube since the 3D figure is a square that has all sides of the same length. In a cube, the faces share a common boundary called the edge that is considered as the bounding line of the edge. The structure of a cube is defined with each face being connected to four vertices and four edges, vertex connected with three edges and three faces, and edges are in touch with two faces and two vertices.</p>
                <div className="image">
                    <img src={require('./assets/images/Cube.png')} alt="Cube" />
                </div>
                <div className="formulae">
                    <h5>Surface Area = 6 * (side ^ 2)</h5>
                    <h5>Volume = side ^ 3</h5>
                </div>
                <p className="note"><b>Note </b>: Unit of answer will be same as input's unit. Here, No unit is used as they do not affect the calculations. Any other base unit can be substituted. Also, enter the valid input value.</p>
            </div>
            <div className="input1" >
                <div className="inputOutput">
                    <h4 className="subHead">Enter Dimensions of a Cube</h4>
                    <div>
                        <label>Side</label><br></br>
                        <input onChange={(event) => dispatch({ type: 'cube-length', value: event.target.value })} className="inputTxt" type="number" value={cubelength}></input><br></br>
                    </div>
                    <label>Answer {found}</label><br></br>
                    <div className="answer"><span>{answer}</span></div>
                </div>
                <button onClick={(event) => dispatch({ type: 'cube-surfarea' })} >Calculate Surface Area</button><br></br>
                <button onClick={(event) => dispatch({ type: 'cube-volume' })} >Calculate Volume</button><br></br>
                <button onClick={(event) => dispatch({ type: 'clear' })} >Clear</button>
            </div>
        </div>
    )
}

export default Cube
