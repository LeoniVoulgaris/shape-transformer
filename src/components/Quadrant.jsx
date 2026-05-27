function Quadrant({ id, onDrop, shapes, component: ComponentType }){
  return (
    <div className="rectangle"
    onDragOver={(e) => {e.preventDefault();}}
    onDrop={(e) => {const data = JSON.parse(e.dataTransfer.getData("text/plain"));
    onDrop(data.id, data.fromQuadrant, id);
    }}>

      {shapes.map((shapeId) => (
        <ComponentType key={shapeId} id={shapeId} fromQuadrant={id} />
      ))}

    </div>
  )
}


export default Quadrant