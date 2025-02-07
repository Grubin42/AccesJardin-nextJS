"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Breadcrumb() {
  const pathname = usePathname();
  // Découper le pathname et filtrer les segments vides
  const segments = pathname.split("/").filter((seg) => seg !== "");

  let currentPath = "";
  const crumbs = segments.map((seg) => {
    currentPath += "/" + seg;
    // Mettre la première lettre en majuscule
    const name = seg.charAt(0).toUpperCase() + seg.slice(1);
    return { name, href: currentPath };
  });

  return (
    <nav
      aria-label="breadcrumb"
      className="fixed left-0 top-1/3 z-20 hidden md:block"  // top-4 pour un petit offset depuis le haut
    >
      <ul className="flex flex-col items-start space-y-1 p-0 m-0">
        <li className="block">
          <Link href="/" className="breadcrumb-link">
            Accueil
          </Link>
        </li>
        {crumbs.map((crumb, idx) => (
          <React.Fragment key={idx}>
            <li className="block">
              {/* Séparateur (chevron) placé sous le lien précédent */}
              <span className="text-3xl px-1.5 text-gray-600">-</span>
            </li>
            <li className="block">
              <Link href={crumb.href} className="breadcrumb-link">
                {crumb.name}
              </Link>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
}