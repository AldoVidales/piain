import React, { useRef, useState, useEffect } from 'react';

function Square() {
  const canvasRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Dibuja el cuadrado
    ctx.fillStyle = 'red';
    ctx.fillRect(10, 10, 50, 50);

    // Dibuja el botón redondo
    ctx.beginPath();
    ctx.arc(35, 35, 10, 0, 2 * Math.PI);
    ctx.fillStyle = isClicked ? 'green' : 'white';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
  }, [isClicked]);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <canvas ref={canvasRef} width={50} height={50} onClick={handleClick} />
  );
}

export default Square;
