function Circle({ id, fromQuadrant }) {
  return (
    <div draggable
      onDragStart={(e) => e.dataTransfer.setData("text/plain", JSON.stringify({ id, fromQuadrant }))}>
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="48" fill="white" stroke="black" strokeWidth="2"/>
      </svg>
    </div>
  );
}
export default Circle