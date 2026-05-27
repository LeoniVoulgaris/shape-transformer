import { useState } from "react"
import Quadrant from "./components/Quadrant"
import Circle from "./components/Circle"
import Triangle from "./components/Triangle"
import Hexagon from "./components/Hexagon"
import Square from "./components/Square"


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

  const handleDrop = (shapeId,fromQuadrant, toQuadrant) => {
    if (fromQuadrant === toQuadrant) return;

    setQuadrants(prev => { const newState = { ...prev };

      newState[fromQuadrant] = prev[fromQuadrant].filter((id) => id !== shapeId);
      newState[toQuadrant] = [...prev[toQuadrant], shapeId];

      return newState;
    });
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