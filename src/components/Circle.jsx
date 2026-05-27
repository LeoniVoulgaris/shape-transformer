function Circle({ id, fromQuadrant }) {
  return (
    <div className="circle" draggable="true" onDragStart={(e) => e.dataTransfer.setData("text/plain",JSON.stringify({ id: id, fromQuadrant }))}>

    </div>
  )
}

export default Circle