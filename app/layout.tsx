/**
 * Composant de layout global avec une Navbar.
 */
import './globals.css';
import SideBar from './components/SideBar';
import Footer from "./components/Footer";
import Link from 'next/link';
import Image from 'next/image';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <title>Accès jardin</title>
      </head>
      <body className="flex flex-col min-h-screen">
        <header className="p-4">
            <Link href="/" className="block">
              <Image
                src="/logo.png"
                alt="Logo Accès jardin"
                width={160}  // ajuste la largeur selon tes besoins
                height={160}  // ajuste la hauteur selon tes besoins
                className="object-contain mb-10"
                />
            </Link>
          </header>
        <SideBar />
        <main className='p-4 flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}