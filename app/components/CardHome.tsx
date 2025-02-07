"use client";
import Link from "next/link";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  link: string;
  backgroundImage: string;
  flowerImage: string;
}

export default function CardHome({ title, description, link, backgroundImage, flowerImage }: CardProps) {
  return (
    <Link href={link} className="block">
      <div className="relative rounded overflow-hidden transform transition-transform duration-300 hover:scale-105">
        {/* Fond avec deux images */}
        <div className="absolute inset-0">
          {/* Image de fond aquarelle */}
          <Image
            src={backgroundImage}
            alt="Fond aquarelle"
            fill
            className="object-cover opacity-80"
          />
          {/* Image de fleur positionnée à gauche */}
          <div className="absolute inset-y-0 left-0 w-1/3">
            <Image
              src={flowerImage}
              alt="Fleur décorative"
              fill
              className="object-contain"
            />
          </div>
        </div>
        {/* Contenu centré dans la carte */}
        <div className="relative z-10 flex flex-col items-center justify-center h-48 px-4">
          <h2 className="text-2xl font-bold text-center mb-2">{title}</h2>
        </div>
        {/* Texte débordant en bas avec le lien */}
        <div className="relative z-10 bg-white px-4 py-2 -mt-4">
          <p className="text-center">{description}</p>
        </div>
      </div>
    </Link>
  );
}