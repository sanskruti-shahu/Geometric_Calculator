import React, { useReducer } from 'react';
import './style.css';
import reducer from './PolygonReducer';

function Trapezium() {
    const [{ traparaside1, traparaside2, traside1, traside2, traheight, answer, found }, dispatch] = useReducer(reducer, 0);
    return (
        <div className="shape trapezium">
            <div className="details" >
                <h1 className="mainHead">Trapezium</h1>
                <p className="info">The trapezium is a quadrilateral with one pair of parallel opposite sides. The parallel sides of a trapezium are called bases and the non-parallel sides of a trapezium are called legs. It is also called a trapezoid. Sometimes the parallelogram is also called a trapezoid with two parallel sides.</p>
                <div className="image">
                    <img src={require('./assets/images/Trapezium.png')} alt="rectangle" />
                </div>
                <div className="formulae">
                    <h3>Formulaes :</h3>
                    <h5>Perimeter = (Parallel Side 1 + Parallel Side 2 + Side 1 + Side 2)</h5>
                    <h5>Area = ((Parallel Side 1 + Parallel Side 2) / 2) * Height</h5>
                    <h5>|| = Parallel Symbol</h5>
                </div>
                <p className="note"><b>Note </b>: Unit of answer will be same as input's unit. Here, No unit is used as they do not affect the calculations. Any other base unit can be substituted. Also, enter the valid input value.</p>
            </div>
            <div className="input1" >
                <div className="inputOutput">
                    <h4 className="subHead">Enter Dimensions of a Trapezium</h4>
                    <div>
                        <label>Parallel Side 1</label><br></br>
                        <input onChange={(event) => dispatch({ type: 'tra-paraside1', value: event.target.value })} className="inputTxt" type="number" value={traparaside1}></input><br></br>
                        <label>Parallel Side 2</label><br></br>
                        <input onChange={(event) => dispatch({ type: 'tra-paraside2', value: event.target.value })} className="inputTxt" type="number" value={traparaside2}></input><br></br>
                        <label>Side 1</label><br></br>
                        <input onChange={(event) => dispatch({ type: 'tra-side1', value: event.target.value })} className="inputTxt" type="number" value={traside1}></input><br></br>
                        <label>Side 2</label><br></br>
                        <input onChange={(event) => dispatch({ type: 'tra-side2', value: event.target.value })} className="inputTxt" type="number" value={traside2}></input><br></br>
                        <label>Height</label><br></br>
                        <input onChange={(event) => dispatch({ type: 'tra-height', value: event.target.value })} className="inputTxt" type="number" value={traheight}></input><br></br>
                    </div>
                    <label>Answer {found}</label><br></br>
                    <div className="answer"><span>{answer}</span></div>
                </div>
                <button onClick={(event) => dispatch({ type: 'tra-peri' })} >Calculate Perimeter</button><br></br>
                <button onClick={(event) => dispatch({ type: 'tra-area' })} >Calculate Area</button>
                <button onClick={(event) => dispatch({ type: 'clear' })} >Clear</button>
            </div>
        </div>
    )
}

export default Trapezium
