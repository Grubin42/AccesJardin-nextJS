"use client";
import CardHome from "./components/CardHome";

export default function Home() {
  return (
    <div className="p-8">
      {/* Phrase d'accueil */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Bienvenue sur Accès Jardin</h1>
        <p className="text-xl">
          Nous sommes des jardiniers spécialisés dans l'entretien naturel de jardin.
        </p>
      </header>

      {/* Petite explication */}
      <section className="mb-12 max-w-3xl mx-auto text-center">
        <p className="text-lg">
          Chez Accès Jardin, nous privilégions des méthodes respectueuses de l'environnement pour entretenir et sublimer vos espaces verts. Notre équipe passionnée s'engage pour un jardinage durable et naturel.
        </p>
      </section>

      {/* Section des cartes */}
      <section className="grid gap-8 grid-cols-1 mt-20 md:grid-cols-2 lg:grid-cols-4">
        <CardHome 
          title="Services" 
          description="Découvrez nos prestations de jardinage naturel." 
          link="/service"
          backgroundImage="/fond_aquarelle1.png"
          flowerImage="/fleur1.png"
        />
        <CardHome 
          title="Équipe" 
          description="Rencontrez notre équipe de jardiniers passionnés." 
          link="/equipe"
          backgroundImage="/fond_aquarelle2.png"
          flowerImage="/fleur2.png"
        />
        <CardHome 
          title="Partenariats" 
          description="Nos collaborations pour un jardinage durable." 
          link="/partenariat"
          backgroundImage="/fond_aquarelle3.png"
          flowerImage="/fleur3.png"
        />
        <CardHome 
          title="Contact" 
          description="Contactez-nous pour un devis personnalisé." 
          link="/contact"
          backgroundImage="/fond_aquarelle4.png"
          flowerImage="/fleur4.png"
        />
      </section>
    </div>
  );
}