/**
 * Composant de layout global avec une Navbar.
 */
import './globals.css';
import NavBar from './components/NavBar';
import { Patrick_Hand } from 'next/font/google';

const patrickHand = Patrick_Hand({ subsets: ['latin'], weight: '400' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <title>Accès jardin</title>
      </head>
      <body className={patrickHand.className}>
        <NavBar />
        <main className='p-4'>{children}</main>
      </body>
    </html>
  );
}