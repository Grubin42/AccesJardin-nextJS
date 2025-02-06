"use client";
import dynamic from "next/dynamic";

const SketchyBorder = dynamic(() => import("../components/SketchyBorder"), {
  ssr: false,
});

export default function EquipePage() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Carte 1 */}
      <SketchyBorder>
        <div className="p-4 ">
          <h1 className="text-xl font-bold mb-2">Carte 1</h1>
          <p>Description de la carte 1.</p>
        </div>
      </SketchyBorder>
      {/* Carte 2 */}
      <SketchyBorder>
        <div className="p-4 ">
          <h1 className="text-xl font-bold mb-2">Carte 2</h1>
          <p>Description de la carte 2.</p>
        </div>
      </SketchyBorder>
      {/* Carte 3 */}
      <SketchyBorder>
        <div className="p-4 ">
          <h1 className="text-xl font-bold mb-2">Carte 3</h1>
          <p>Description de la carte 3.</p>
        </div>
      </SketchyBorder>
      {/* Carte 4 */}
      <SketchyBorder>
        <div className="p-4 ">
          <h1 className="text-xl font-bold mb-2">Carte 4</h1>
          <p>Description de la carte 4.</p>
        </div>
      </SketchyBorder>
    </div>
  );
}