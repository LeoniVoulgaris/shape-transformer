import { useState } from "react"
import Quadrant from "./components/Quadrant"
import Circle from "./components/Circle"
import Triangle from "./components/Triangle"
import Hexagon from "./components/Hexagon"
import Square from "./components/Square"


export function moveShape(quadrants, shapeId, fromQuadrant, toQuadrant) {
  if (fromQuadrant === toQuadrant) return quadrants;
  const newState = { ...quadrants };
  newState[fromQuadrant] = quadrants[fromQuadrant].filter((id) => id !== shapeId);
  newState[toQuadrant] = [...quadrants[toQuadrant], shapeId];
  return newState;
}

function App() {
  const [quadrants, setQuadrants] = useState({
    "top-left": ["shape-1", "shape-2", "shape-3", "shape-4", "shape-5"],
    "top-right": [],
    "bottom-left": [],
    "bottom-right": [],
  });

  const QuadrantShapes = {
    "top-left": Circle,
    "top-right": Hexagon,
    "bottom-left": Square,
    "bottom-right": Triangle,
  }

  const handleDrop = (shapeId, fromQuadrant, toQuadrant) => {
    setQuadrants(prev => moveShape(prev, shapeId, fromQuadrant, toQuadrant));
  }
  return (
    <div className="wrapper">
      {Object.entries(quadrants).map(([id, shapes]) => (
        <Quadrant key={id} id={id} shapes={shapes} onDrop={handleDrop} component={QuadrantShapes[id]} />
      ))}
    </div>
  )
}

export default App