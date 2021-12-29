import React, { useReducer } from 'react';
import './style.css';
import './Shape.css';
import reducer from './ObjectReducer';

function Sphere() {
    const [{ sphereradius, answer, found }, dispatch] = useReducer(reducer, 0);
    return (
        <div className="shape Sphere">
            <div className="details" >
                <h1 className="mainHead">Sphere</h1>
                <p className="info">A sphere is a three-dimensional round-shaped object. Unlike other three-dimensional shapes, a sphere does not have any vertices or edges. All the points on the surface of the sphere are equidistant from its center. In other words, the distance from the center of the sphere to any point on the surface of the sphere is equal. Since a sphere is a three-dimensional shape it also has a volume and a surface area. Our planet Earth is not in a perfect shape of a sphere, but it is called a spheroid. The reason it is called a spheroid is it is almost similar to that of a sphere.</p>
                <div className="image">
                    <img src={require('./assets/images/Sphere.png')} alt="Sphere" />
                </div>
                <div className="formulae">
                    <h5>Surface Area = 4 * π * (radius ^ 2)</h5>
                    <h5>Volume = 4/3 * π * (radius ^ 3)</h5>
                    <h5>π = 3.14</h5>
                </div>
                <p className="note"><b>Note </b>: Unit of answer will be same as input's unit. Here, No unit is used as they do not affect the calculations. Any other base unit can be substituted. Also, enter the valid input value.</p>
            </div>
            <div className="input1" >
                <div className="inputOutput">
                    <h4 className="subHead">Enter Dimensions of a Sphere</h4>
                    <div>
                        <label>Radius</label><br></br>
                        <input onChange={(event) => dispatch({ type: 'sphere-radius', value: event.target.value })} className="inputTxt" type="number" value={sphereradius}></input><br></br>
                    </div>
                    <label>Answer {found}</label><br></br>
                    <div className="answer"><span>{answer}</span></div>
                </div>
                <button onClick={(event) => dispatch({ type: 'sphere-surfarea' })} >Calculate Surface Area</button><br></br>
                <button onClick={(event) => dispatch({ type: 'sphere-volume' })} >Calculate Volume</button><br></br>
                <button onClick={(event) => dispatch({ type: 'clear' })} >Clear</button>
            </div>
        </div>
    )
}

export default Sphere
