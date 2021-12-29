import React from 'react';
import { Link } from 'react-router-dom';

function PolygonPage() {
    console.log("PolygonPage")
    return (
        <div className="applybg">
            <p>Select Your Preffered Polygon</p>
            <Link to="/Circle">
                <button className="shapeBtn">Circle</button></Link><br></br>
            <Link to="/Triangle">
                <button className="shapeBtn">Triangle</button></Link><br></br>
            <Link to="/Square">
                <button className="shapeBtn">Square</button></Link><br></br>
            <Link to="/Rectangle">
                <button className="shapeBtn">Rectangle</button></Link><br></br>
            <Link to="/Trapezium">
                <button className="shapeBtn">Trapezium</button></Link><br></br>
            <Link to="/Rhombus">
                <button className="shapeBtn">Rhombus</button></Link>
        </div>
    )
}

export default PolygonPage
