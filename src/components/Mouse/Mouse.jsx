import { useEffect, useState } from "react";
import "./Mouse.css"; // Make sure to create this CSS file.

const Mouse = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePos({
      x: event.clientX,
      y: event.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div
        className="circle"
        style={{
          left: mousePos.x - 125, // Adjust to center the circle
          top: mousePos.y - 125, // Adjust to center the circle
          position: "fixed", // Position absolute to move with the pointer
        }}
      />
    </div>
  );
};
export default Mouse;
