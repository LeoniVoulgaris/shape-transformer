function Triangle({ id, fromQuadrant }) {
  return (
    <div draggable data-shape-id={id}
      onDragStart={(e) => e.dataTransfer.setData("text/plain", JSON.stringify({ id, fromQuadrant }))}>
      <svg width="100" height="100" viewBox="0 0 100 100">
        <polygon points="50,2 98,98 2,98" fill="white" stroke="black" strokeWidth="2"/>
      </svg>
    </div>
  );
}

export default Triangle