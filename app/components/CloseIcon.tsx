"use client";
import React, { useRef, useEffect } from "react";
import rough from "roughjs/bin/rough";

/**
 * Composant affichant une croix (close icon) en style rough
 */
export default function CloseIcon() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = 50;
    canvas.height = 50;
    const rc = rough.canvas(canvas);
    const ctx = canvas.getContext("2d");
    ctx?.clearRect(0, 0, canvas.width, canvas.height);
    const options = { roughness: 1, stroke: "black", strokeWidth: 2 };
    // Dessiner deux lignes formant une croix
    rc.line(10, 10, 40, 40, options);
    rc.line(40, 10, 10, 40, options);
  }, []);

  return <canvas ref={canvasRef} />;
}