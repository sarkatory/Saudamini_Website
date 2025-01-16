import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0A0605] via-[#1A0F00] to-[#2C1810]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif mb-4 bg-gradient-to-r from-amber-700 to-maroon-800 bg-clip-text text-transparent">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-amber-100/90 hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-amber-100/90 hover:text-amber-400 transition-colors">About</Link></li>
              <li><Link href="/purchase" className="text-amber-100/90 hover:text-amber-400 transition-colors">Purchase</Link></li>
              <li><Link href="/events" className="text-amber-100/90 hover:text-amber-400 transition-colors">Events</Link></li>
              <li><Link href="/contact" className="text-amber-100/90 hover:text-amber-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-serif mb-4 bg-gradient-to-r from-amber-700 to-maroon-800 bg-clip-text text-transparent">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-100/90 hover:text-amber-400 transition-colors text-2xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-amber-100/90 hover:text-amber-400 transition-colors text-2xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-amber-100/90 hover:text-amber-400 transition-colors text-2xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-amber-100/90 hover:text-amber-400 transition-colors text-2xl">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif mb-4 bg-gradient-to-r from-amber-700 to-maroon-800 bg-clip-text text-transparent">Contact</h3>
            <ul className="space-y-2">
              <li className="text-amber-100/90">Email: contact@saudamini-novel.com</li>
              <li className="text-amber-100/90">Phone: +91 98765 43210</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-serif mb-4 bg-gradient-to-r from-amber-700 to-maroon-800 bg-clip-text text-transparent">Newsletter</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-[#1A0F00] border border-amber-900/20 focus:ring-2 focus:ring-amber-600 text-amber-100/90 placeholder-amber-100/50"
              />
              <button
                type="submit"
                className="w-full py-2 bg-gradient-to-r from-amber-700 to-maroon-800 
                  hover:from-amber-800 hover:to-maroon-900 rounded-lg transition-all duration-300 text-amber-100"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-amber-900/20 text-center">
          <p className="text-amber-100/80">© 2024 Saudamini. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 