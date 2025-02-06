"use client";
import React, { useRef, useEffect, useState } from "react";
import rough from "roughjs";

interface SketchyButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

/**
 * Composant bouton avec bordure sketchy aux coins arrondis et fond orange,
 * qui change de style au survol.
 */
export default function SketchyButton({
  children,
  onClick,
}: SketchyButtonProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const drawSketchyBorder = () => {
    const canvas = canvasRef.current;
    const button = buttonRef.current;
    if (!canvas || !button) return;

    // Récupère la taille actuelle du bouton
    const { width, height } = button.getBoundingClientRect();
    canvas.width = width;
    canvas.height = height;

    const rc = rough.canvas(canvas);
    const ctx = canvas.getContext("2d");
    // Effacer le canvas avant chaque dessin
    ctx?.clearRect(0, 0, canvas.width, canvas.height);

    // Définir un rayon pour les coins arrondis
    const radius = 10;

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

    // Modifier les options en fonction du hover
    const options = {
      stroke: isHovered ? "#3E3E3E" : "black",
      strokeWidth: 1,
      roughness: 1,
      fill: "#F37A20",
      fillStyle: "solid",
    };
    rc.path(path, options);
  };

  useEffect(() => {
    drawSketchyBorder();
    window.addEventListener("resize", drawSketchyBorder);
    return () => window.removeEventListener("resize", drawSketchyBorder);
  }, [children, isHovered]);

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="block w-full relative bg-transparent border-none p-2 cursor-pointer"
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
      <span
        style={{
          position: "relative",
          zIndex: 1,
          color: isHovered ? "#3E3E3E" : "#fff", // gris au hover, blanc sinon
        }}
      >
        {children}
      </span>
    </button>
  );
}
