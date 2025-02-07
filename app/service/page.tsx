"use client";
import React from "react";
import CardService from "../components/CardService";

const services = [
  {
    imageUrl: "/service_entretien.png",
    title: "Entretien",
    text: "Service 1 : Entretien naturel de vos jardins avec des techniques respectueuses de l'environnement.",
    flip: false,
  },
  {
    imageUrl: "/service_taille.png",
    title: "Taille",
    text: "Service 2 : Mise en valeur de la biodiversité avec des méthodes écologiques.",
    flip: true,
  },
  {
    imageUrl: "/service_tonte.png",
    title: "Tonte",
    text: "Service 3 : Aménagement de jardin avec des plantes locales et un entretien durable.",
    flip: false,
  },
  {
    imageUrl: "/service_creation.png",
    title: "Création",
    text: "Service 4 : Conseil personnalisé en éco-jardinage pour optimiser votre espace vert.",
    flip: true,
  },
  {
    imageUrl: "/service_plantation.png",
    title: "Plantation",
    text: "Service 5 : Aménagement de jardin avec des plantes locales et un entretien durable.",
    flip: false,
  },
];

export default function ServicePage() {
  return (
    <div className="p-8">
    <h1 className="text-6xl font-bold text-center mb-12">Nos Services</h1>
      {services.map((service, index) => (
        <div key={index}>
          <CardService
            imageUrl={service.imageUrl}
            title={service.title}
            text={service.text}
            flip={service.flip}
          />
        </div>
      ))}
    </div>
  );
}
