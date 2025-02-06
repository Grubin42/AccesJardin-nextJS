// app/components/Footer.tsx

"use client";
/** Composant Footer affichant la bannière */
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* L'image est chargée depuis le dossier public */}
      <Image
        src="/banner_bottom3.png"
        alt="Bannière"
        width={1920}  // largeur d'origine ou adaptée
        height={200}  // hauteur d'origine ou adaptée
        className="w-full object-cover"
      />
    </footer>
  );
}