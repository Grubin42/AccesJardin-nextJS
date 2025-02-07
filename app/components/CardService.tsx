"use client";
import React from "react";
import Image from "next/image";
import RoughSeparator from "../components/RoughSeparator";

interface CardServiceProps {
  imageUrl: string;
  title: string;
  text: string;
  flip?: boolean;
}

/**
 * Composant CardService en grille.
 * Le parent a 2 colonnes : une pour l'image et une pour le contenu.
 * Dans la colonne contenu, le titre est en haut, le texte au milieu et le séparateur en bas.
 * Sur mobile, l'ordre est fixe (image en haut, contenu en bas).
 * À partir de md, l'ordre alterne selon la prop "flip" et l'alignement du texte est inversé par rapport à sa position :
 * - Si le contenu est à droite (flip=false), le texte est aligné à gauche.
 * - Si le contenu est à gauche (flip=true), le texte est aligné à droite.
 */
const CardService: React.FC<CardServiceProps> = ({
  imageUrl,
  title,
  text,
  flip = false,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-20 items-stretch">
      {/* Colonne contenu */}
      <div
        className={`
          p-4 flex flex-col h-full justify-between order-2
          ${flip ? "md:order-1 md:text-right" : "md:order-2 md:text-left"}
        `}
      >
        {/* Texte au milieu */}
        <div>
          <h2 className="text-2xl font-bold mb-10">{title}</h2>
          <p className="text-lg">{text}</p>
        </div>
        {/* Séparateur en bas */}
        <div>
          <RoughSeparator />
        </div>
      </div>
      {/* Colonne image */}
      <div className={`p-4 order-1 ${flip ? "md:order-2" : "md:order-1"}`}>
        <Image
          src={imageUrl}
          alt="Image du service"
          width={500}
          height={300}
          className="object-cover rounded"
        />
      </div>
    </div>
  );
};

export default CardService;
