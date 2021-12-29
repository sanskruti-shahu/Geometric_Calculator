import React, { useReducer } from 'react';
import './style.css';
import './Shape.css';
import reducer from './ObjectReducer';

function Cylinder() {
    const [{ cylinderradius, cylinderheight, answer, found }, dispatch] = useReducer(reducer, 0);
    return (
        <div className="shape Cylinder">
            <div className="details" >
                <h1 className="mainHead">Cylinder</h1>
                <p className="info">A cylinder is a 3D solid shape that consists of two identical and parallel bases linked by a curved surface. These bases are like circular disks. The line passing from the center or joining the centers of two circular bases is called the axis of the cylinder shape. The distance between the two bases is called perpendicular distance and is represented as height, “h”. The two circular bases have a distance from the center to the outer boundary which is known as the radius of the cylinder, represented by “r”. The cylinder is a combination of 2 circles + 1 rectangle.</p>
                <div className="image">
                    <img src={require('./assets/images/Cylinder.png')} alt="Cylinder" />
                </div>
                <div className="formulae">
                    <h5>Surface Area = 2 * π * radius * (radius +  height)</h5>
                    <h5>Volume = π * (radius ^ 2) * height</h5>
                    <h5>π = 3.14</h5>
                </div>
                <p className="note"><b>Note </b>: Unit of answer will be same as input's unit. Here, No unit is used as they do not affect the calculations. Any other base unit can be substituted. Also, enter the valid input value.</p>
            </div>
            <div className="input1" >
                <div className="inputOutput">
                    <h4 className="subHead">Enter Dimensions of a Cylinder</h4>
                    <div>
                        <label>Radius</label><br></br>
                        <input onChange={(event) => dispatch({ type: 'cylinder-radius', value: event.target.value })} className="inputTxt" type="number" value={cylinderradius}></input><br></br>
                        <label>Height</label><br></br>
                        <input onChange={(event) => dispatch({ type: 'cylinder-height', value: event.target.value })} className="inputTxt" type="number" value={cylinderheight}></input><br></br>
                    </div>
                    <label>Answer {found}</label><br></br>
                    <div className="answer"><span>{answer}</span></div>
                </div>
                <button onClick={(event) => dispatch({ type: 'cylinder-surfarea' })} >Calculate Surface Area</button><br></br>
                <button onClick={(event) => dispatch({ type: 'cylinder-volume' })} >Calculate Volume</button><br></br>
                <button onClick={(event) => dispatch({ type: 'clear' })} >Clear</button>
            </div>
        </div>
    )
}

export default Cylinder
