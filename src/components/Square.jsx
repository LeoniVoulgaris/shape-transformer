function Square({ id, fromQuadrant }) {
  return (
    <div className="square" draggable="true" onDragStart={(e) => e.dataTransfer.setData("text/plain",JSON.stringify({ id: id, fromQuadrant }))}>

    </div>
  )
}

export default Square