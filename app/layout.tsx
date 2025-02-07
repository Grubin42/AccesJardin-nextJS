"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Hook pour récupérer le chemin actuel
import './globals.css';
import SideBar from './components/SideBar';
import Footer from "./components/Footer";
import AnimatedLogo from "./components/AnimatedLogo";
import Breadcrumb from "./components/Breadcrumb";

/**
 * Composant RootLayout.
 * Affiche l'overlay uniquement sur la page d'accueil ("/").
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [overlayVisible, setOverlayVisible] = useState(true);
  const pathname = usePathname(); // Récupère le chemin courant

  useEffect(() => {
    const timer = setTimeout(() => {
      setOverlayVisible(false);
    }, 2000); // Durée de l'animation de l'overlay
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="fr">
      <head>
        <title>Accès jardin</title>
      </head>
      <body className="flex flex-col min-h-screen relative">
        <AnimatedLogo />
        <SideBar />
        <Breadcrumb />
        <main className="p-4 flex justify-center flex-1 mt-28 max-w-[1200px] mx-auto relative">
          {children}
        </main>
        <Footer />
        {/* Affichage conditionnel de l'overlay uniquement sur "/" */}
        {pathname === "/" && (
          <div
            className={`absolute inset-0 z-20 pointer-events-none transition-opacity ease-in-out ${
              overlayVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{
              transitionDuration: "2500ms",
              background:
                "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 66%, rgba(255,255,255,0) 100%)",
            }}
          />
        )}
      </body>
    </html>
  );
}