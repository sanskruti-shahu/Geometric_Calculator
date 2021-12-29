import React from 'react';
import Main from './Main';
import PolygonPage from './PolygonPage';
import ObjectPage from './ObjectPage';
import Circle from './Circle';
import Square from './Square';
import Rectangle from './Rectangle';
import Triangle from './Triangle';
import Trapezium from './Trapezium';
import Rhombus from './Rhombus';
import Sphere from './Sphere';
import Cone from './Cone';
import Cube from './Cube';
import Cuboid from './Cuboid';
import Cylinder from './Cylinder';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={Main()} />
          <Route path="/PolygonPage" element={PolygonPage()} />
          <Route path="/ObjectPage" element={ObjectPage()} />
          <Route path="/Circle" element={Circle()} />
          <Route path="Triangle" element={Triangle()} />
          <Route path="/Square" element={Square()} />
          <Route path="/Rectangle" element={Rectangle()} />
          <Route path="/Trapezium" element={Trapezium()} />
          <Route path="/Rhombus" element={Rhombus()} />
          <Route path="/Sphere" element={Sphere()} />
          <Route path="/Cone" element={Cone()} />
          <Route path="/Cube" element={Cube()} />
          <Route path="/Cuboid" element={Cuboid()} />
          <Route path="/Cylinder" element={Cylinder()} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
