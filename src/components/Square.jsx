function Square({ id, fromQuadrant }) {
  return (
    <div draggable data-shape-id={id}
      onDragStart={(e) => e.dataTransfer.setData("text/plain", JSON.stringify({ id, fromQuadrant }))}>
      <svg width="100" height="100" viewBox="0 0 100 100">
        <rect x="2" y="2" width="96" height="96" fill="white" stroke="black" strokeWidth="2"/>
      </svg>
    </div>
  );
}

export default Square