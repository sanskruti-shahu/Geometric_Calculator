import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';


function Main() {
    console.log("main")
    return (
        <div className="App applybg">
            <h1>Geometric Calculator</h1>
            <p>Choose what you want to find</p>
            <Link to="/PolygonPage">
                <button>Perimeter or Area</button><br></br>
            </Link>
            <Link to="/ObjectPage">
                <button>Surface Area or Volume</button>
            </Link>
        </div>
    )
}

export default Main
