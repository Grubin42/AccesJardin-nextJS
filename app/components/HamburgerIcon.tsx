"use client";
import React, { useRef, useEffect } from "react";
import rough from "roughjs/bin/rough";

export default function HamburgerIcon() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    // Définir la taille du canvas
    canvas.width = 50;
    canvas.height = 50;
    const rc = rough.canvas(canvas);
    // Effacer le canvas
    const ctx = canvas.getContext("2d");
    ctx?.clearRect(0, 0, canvas.width, canvas.height);

    // Options de dessin pour un effet "rough"
    const options = { roughness: 1, stroke: "black", strokeWidth: 2 };

    // Dessiner 3 traits horizontaux
    rc.line(10, 15, 40, 15, options); // première ligne
    rc.line(10, 25, 40, 25, options); // deuxième ligne
    rc.line(10, 35, 40, 35, options); // troisième ligne
  }, []);

  return <canvas ref={canvasRef} />;
}