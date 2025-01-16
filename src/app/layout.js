import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LanguageToggle from '@/components/LanguageToggle';

export const metadata = {
  title: 'Saudamini - A Bengali Novel by Mamata Sarkar',
  description: 'A Journey Through 1870s Bengal - An enchanting historical novel by Mamata Sarkar',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <LanguageToggle />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}