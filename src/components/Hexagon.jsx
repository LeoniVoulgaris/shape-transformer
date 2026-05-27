function Hexagon({ id, fromQuadrant }) {
  return (
    <div className="hexagon" draggable="true" onDragStart={(e) => e.dataTransfer.setData("text/plain",JSON.stringify({ id: id, fromQuadrant }))}>

    </div>
  )
}

export default Hexagon