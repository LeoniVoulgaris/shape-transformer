function Triangle({ id, fromQuadrant }) {
  return (
    <div className="triangle" draggable="true" onDragStart={(e) => e.dataTransfer.setData("text/plain",JSON.stringify({ id: id, fromQuadrant }))}>

    </div>
  )
}

export default Triangle