"use client";
/**
 * Composant qui dessine une bordure "sketchy" autour de son contenu
 */
import React, { useRef, useEffect } from 'react';
import rough from 'roughjs';

interface SketchyBorderProps {
  children: React.ReactNode;
}

export default function SketchyBorder({ children }: SketchyBorderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const drawBorder = () => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // Récupérer la taille actuelle du container
    const { width, height } = container.getBoundingClientRect();
    const offset = 0; // Décalage pour que la bordure apparaisse autour du contenu
    // Ajuster la taille du canvas pour couvrir le container + offset
    canvas.width = width + offset * 4;
    canvas.height = height + offset * 3;
    const rc = rough.canvas(canvas);
    const ctx = canvas.getContext('2d');
    // Effacer le canvas pour éviter d'accumuler des dessins
    ctx?.clearRect(0, 0, canvas.width, canvas.height);
    // Dessiner le rectangle "sketchy" autour du container
    rc.rectangle(-offset, -offset, width + offset * 2, height + offset * 2, {
      roughness: 2,
      stroke: 'black',
      strokeWidth: 3,
      fill: 'rgba(0,0,0,0)',
    });
  };

  useEffect(() => {
    // Dessiner initialement la bordure
    drawBorder();

    // Mettre à jour la bordure lors du redimensionnement de la fenêtre
    window.addEventListener('resize', drawBorder);
    return () => {
      window.removeEventListener('resize', drawBorder);
    };
  }, [children]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        display: 'block',
        width: '100%',
      }}
    >
      {/* Canvas servant à dessiner la bordure */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          pointerEvents: 'none',
        }}
      />
      {/* Contenu affiché par-dessus le canvas */}
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
}

// "use client";
// /**
//  * Composant qui dessine une bordure "sketchy" arrondie autour de son contenu
//  */
// import React, { useRef, useEffect } from 'react';
// import rough from 'roughjs';

// interface SketchyBorderProps {
//   children: React.ReactNode;
// }

// export default function SketchyBorder({ children }: SketchyBorderProps) {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);

//   const drawBorder = () => {
//     const canvas = canvasRef.current;
//     const container = containerRef.current;
//     if (!canvas || !container) return;

//     // Récupérer la taille du container
//     const { width, height } = container.getBoundingClientRect();
//     const offset = 5; // Décalage pour que la bordure ne touche pas directement le contenu
//     canvas.width = width + offset * 2;
//     canvas.height = height + offset * 2;
//     const rc = rough.canvas(canvas);
//     const ctx = canvas.getContext('2d');
//     ctx?.clearRect(0, 0, canvas.width, canvas.height);

//     // Définir un chemin SVG pour un rectangle aux coins arrondis
//     // Ici, l'exemple ci-dessous est indicatif, tu devras l'adapter à la taille de ton container.
//     const path = `M${offset} ${offset + 20} 
//                   A20 20 0 0 1 ${offset + 20} ${offset} 
//                   H${width - 20 + offset} 
//                   A20 20 0 0 1 ${width + offset} ${offset + 20} 
//                   V${height - 20 + offset} 
//                   A20 20 0 0 1 ${width - 20 + offset} ${height + offset} 
//                   H${offset + 20} 
//                   A20 20 0 0 1 ${offset} ${height - 20 + offset} 
//                   Z`;
//     // Dessiner le chemin avec Rough.js
//     rc.path(path, {
//       stroke: 'black',
//       strokeWidth: 2,
//       roughness: 2,
//       fill: 'rgba(0,0,0,0)', // pas de remplissage
//     });
//   };

//   useEffect(() => {
//     drawBorder();
//     window.addEventListener('resize', drawBorder);
//     return () => {
//       window.removeEventListener('resize', drawBorder);
//     };
//   }, [children]);

//   return (
//     <div
//       ref={containerRef}
//       style={{
//         position: 'relative',
//         display: 'block',
//         width: '100%',
//       }}
//     >
//       <canvas
//         ref={canvasRef}
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           pointerEvents: 'none',
//         }}
//       />
//       <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
//     </div>
//   );
// }