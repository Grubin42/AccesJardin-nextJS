"use client";
import React, { useState } from "react";
import Link from "next/link";
import SketchyBorder from "./SketchyBorder";
import HamburgerIcon from "./HamburgerIcon";
import SketchyButton from "../components/SketchyButton";

/**
 * Composant Sidebar qui s'affiche lorsqu'on clique sur le bouton.
 */
export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Bouton de toggle qui se déplace selon l'état */}
      <button
        className={`p-2 text-black rounded transition-all duration-300 ${
          open ? "ml-64" : ""
        }`}
        onClick={() => setOpen(!open)}
      >
        <HamburgerIcon />
      </button>

      {/* Sidebar fixe qui se déplace avec une translation */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white z-50 transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="">
          <SketchyBorder>
            <nav className="p-4 h-screen">
              <ul className="flex flex-col space-y-6 pt-4">
                <li>
                  <Link href="/">
                    <SketchyButton>Accueil</SketchyButton>
                  </Link>
                </li>
                <li>
                  <Link href="/equipe">
                    <SketchyButton>Équipe</SketchyButton>
                  </Link>
                </li>
                <li>
                  <Link href="/service">
                    <SketchyButton>Service</SketchyButton>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <SketchyButton>Contact</SketchyButton>
                    
                  </Link>
                </li>
              </ul>
            </nav>
          </SketchyBorder>
        </div>
      </div>
    </div>
  );
}