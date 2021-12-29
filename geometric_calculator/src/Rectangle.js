import React, { useReducer } from 'react';
import './style.css';
import reducer from './PolygonReducer';

function Rectangle() {
    const [{ reclength, recbreadth, answer, found }, dispatch] = useReducer(reducer, 0);
    return (
        <div className="shape rectangle">
            <div className="details" >
                <h1 className="mainHead">Rectangle</h1>
                <p className="info">A rectangle is a 2D shape in geometry, having 4 sides and 4 corners. Its two sides meet at right angles. Thus, a rectangle has 4 angles, each measuring 90 ̊. The opposite sides of a rectangle have the same lengths and are parallel.  Two sides are said to be parallel, when the distance between them remains the same at all points. Since all the angles of a rectangle are equal, we also call it an equiangular quadrilateral. Also, it has parallel sides, we can also call it a parallelogram. A parallelogram is a quadrilateral whose opposite sides are equal and parallel.</p>
                <div className="image">
                    <img src={require('./assets/images/Rectangle.png')} alt="rectangle" />
                </div>
                <div className="formulae">
                    <h3>Formulaes :</h3>
                    <h5>Perimeter = 2 * (length + breadth)</h5>
                    <h5>Area = (length * breadth)</h5>
                </div>
                <p className="note"><b>Note </b>: Unit of answer will be same as input's unit.Here, No unit is used as they do not affect the calculations. Any other base unit can be substituted. Also, enter the valid input value.</p>
            </div>
            <div className="input1" >
                <div className="inputOutput">
                    <h4 className="subHead">Enter Dimensions of a Rectangle</h4>
                    <div>
                        <label>Length</label><br></br>
                        <input onChange={(event) => dispatch({ type: 'rect-length', value: event.target.value })} className="inputTxt" type="number" value={reclength}></input><br></br>
                        <label>Breadth</label><br></br>
                        <input onChange={(event) => dispatch({ type: 'rect-breadth', value: event.target.value })} className="inputTxt" type="number" value={recbreadth}></input><br></br>
                    </div>
                    <label>Answer {found}</label><br></br>
                    <div className="answer"><span>{answer}</span></div>
                </div>
                <button onClick={(event) => dispatch({ type: 'rect-peri' })} >Calculate Perimeter</button><br></br>
                <button onClick={(event) => dispatch({ type: 'rect-area' })} >Calculate Area</button>
                <button onClick={(event) => dispatch({ type: 'clear' })} >Clear</button>
            </div>
        </div>
    )
}

export default Rectangle
