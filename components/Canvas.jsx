// components/Canvas.jsx
import { useDrop } from "react-dnd";
import { useRef } from "react";
import "../app/globals.css";
import "./index.css"; // Ensure you have the correct path to your CSS file

const Canvas = ({ items, updateItemPosition, deleteItem }) => {
  // Using React ref instead of document.getElementById
  const canvasRef = useRef(null);

  // Setting up the drop hook
  const [, drop] = useDrop({
    accept: "CLOTHING_ITEM",
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      if (offset && canvasRef.current) {
        const canvasBound = canvasRef.current.getBoundingClientRect();
        const left = offset.x - canvasBound.left;
        const top = offset.y - canvasBound.top;
        updateItemPosition(item.id, { left, top });
      }
    },
  });

  return (
    <div
      ref={(node) => {
        canvasRef.current = node;
        drop(node);
      }}
      className="CanvasContainer"
      id="canvas"
    >
      <p>CANVAS AREA</p>
      <ul className="eachCanvaItem">
        <li className="margin-30">
        {items.map((item) => (
        <img
          className="CanvasItem"
          key={item.id}
          src={item.icon}
          style={{
            top: item.top,
            left: item.left,
            zIndex: item.zIndex,
            position: "absolute", // Ensuring absolute positioning
          }}
          onClick={() => deleteItem(item.id)}
          draggable="false" // Prevent browser's default drag
        />
      ))}
        </li>
      </ul>
      
    </div>
  );
};

export default Canvas;