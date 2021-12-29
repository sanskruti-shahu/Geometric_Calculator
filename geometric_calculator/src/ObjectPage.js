import React from 'react';
import { Link } from 'react-router-dom';

function ObjectPage() {
    return (
        <div className="applybg">
            <p>Select Your Preffered Object</p>
            <Link to="/Sphere">
            <button className="shapeBtn">Sphere</button></Link><br></br>
            <Link to="/Cone">
            <button className="shapeBtn">Cone</button></Link><br></br>
            <Link to="/Cube">
            <button className="shapeBtn">Cube</button></Link><br></br>
            <Link to="/Cuboid">
            <button className="shapeBtn">Cuboid</button></Link><br></br>
            <Link to="/Cylinder">
            <button className="shapeBtn">Cylinder</button></Link>
        </div>
    )
}

export default ObjectPage
