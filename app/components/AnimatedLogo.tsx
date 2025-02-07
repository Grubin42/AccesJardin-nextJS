"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function AnimatedLogo() {
  const pathname = usePathname();
  // Si on n'est pas sur la page d'accueil, on initialise animate à true
  const [animate, setAnimate] = useState(pathname !== "/");

  useEffect(() => {
    if (pathname === "/") {
      const timer = setTimeout(() => {
        setAnimate(true);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      // On s'assure que animate est true si on n'est pas sur "/"
      setAnimate(true);
    }
  }, [pathname]);

  return (
    <Link href="/" className="block">
      <div className={`logo-container ${animate ? "animate-logo" : ""}`}>
        <Image
          src="/logo.png"
          alt="Logo Accès jardin"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>
    </Link>
  );
}