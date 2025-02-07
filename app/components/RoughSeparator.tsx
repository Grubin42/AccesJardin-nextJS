"use client";
import React, { useRef, useEffect } from "react";
import rough from "roughjs/bin/rough";

const RoughSeparator: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    // La largeur du canvas s'adapte à son parent
    const parentWidth = canvas.parentElement?.offsetWidth || 300;
    canvas.width = parentWidth;
    canvas.height = 20; // Hauteur fixe pour le séparateur

    const rc = rough.canvas(canvas);
    const ctx = canvas.getContext("2d");
    ctx?.clearRect(0, 0, canvas.width, canvas.height);
    // Dessiner une ligne horizontale au centre du canvas
    rc.line(0, canvas.height / 2, canvas.width, canvas.height / 2, {
      stroke: "#000",
      strokeWidth: 2,
      roughness: 2,
    });
  }, []);

  return <canvas ref={canvasRef} className="w-full" />;
};

export default RoughSeparator;