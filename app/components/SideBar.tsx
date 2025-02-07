"use client";
import React, { useState } from "react";
import Link from "next/link";
import SketchyBorder from "./SketchyBorder";
import HamburgerIcon from "./HamburgerIcon";
import CloseIcon from "./CloseIcon";
import SketchyButton from "./SketchyButton";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Bouton de toggle positionné en haut à droite, avec décalage conditionnel */}
      <button
        className={`p-2 text-black rounded transition-all duration-300 fixed top-2 right-2 z-50 ${open ? "mr-64" : ""}`}
        onClick={() => setOpen(!open)}
      >
        {open ? <CloseIcon /> : <HamburgerIcon />}
      </button>

      {/* Overlay qui ferme la sidebar au clic */}
      {open && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Sidebar positionnée à droite */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-white z-50 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
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