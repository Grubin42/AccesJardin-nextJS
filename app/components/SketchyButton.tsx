"use client";
import React, { useRef, useEffect } from "react";
import rough from "roughjs";

interface SketchyButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

/**
 * Composant bouton avec bordure sketchy aux coins arrondis et fond orange.
 */
export default function SketchyButton({ children, onClick }: SketchyButtonProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const drawSketchyBorder = () => {
    const canvas = canvasRef.current;
    const button = buttonRef.current;
    if (!canvas || !button) return;
    
    // Récupère la taille actuelle du bouton
    const { width, height } = button.getBoundingClientRect();
    // Définir la taille du canvas pour qu'il recouvre le bouton
    canvas.width = width;
    canvas.height = height;
    
    const rc = rough.canvas(canvas);
    const ctx = canvas.getContext("2d");
    // Effacer le canvas avant chaque dessin
    ctx?.clearRect(0, 0, canvas.width, canvas.height);
    
    // Définir un rayon pour les coins arrondis
    const radius = 10; // ajuste cette valeur selon tes besoins
    
    // Construire un chemin SVG pour un rectangle arrondi
    const path = `
      M${radius},0
      H${width - radius}
      A${radius} ${radius} 0 0 1 ${width} ${radius}
      V${height - radius}
      A${radius} ${radius} 0 0 1 ${width - radius} ${height}
      H${radius}
      A${radius} ${radius} 0 0 1 0 ${height - radius}
      V${radius}
      A${radius} ${radius} 0 0 1 ${radius} 0
      Z
    `;
    
    // Dessiner le chemin avec Rough.js
    rc.path(path, {
      stroke: "black",       // Couleur de la bordure (orange)
      strokeWidth: 1,
      roughness: 1,
      fill: "#F37A20",         // Fond orange
      fillStyle: "solid",
    });
  };

  useEffect(() => {
    drawSketchyBorder();
    window.addEventListener("resize", drawSketchyBorder);
    return () => window.removeEventListener("resize", drawSketchyBorder);
  }, [children]);

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      style={{
        position: "relative",
        backgroundColor: "transparent", // Le fond est géré par le canvas
        border: "none",
        padding: "0.5rem 1rem",
        cursor: "pointer",
        width: "100%",
      }}
    >
      {/* Canvas servant à dessiner la bordure et le fond */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
        }}
      />
      {/* Contenu du bouton */}
      <span style={{ position: "relative", zIndex: 1, color: "#fff" }}>
        {children}
      </span>
    </button>
  );
}