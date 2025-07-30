import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/24/outline';
import { 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaInstagram 
} from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img src="/lovable-uploads/ad9c47fb-76f7-474b-9629-488fc16e6c8d.png" alt="Pro S Logo" className="w-10 h-10 rounded-2xl bg-white" />
              <span className="text-xl font-bold">Pro S</span>
            </Link>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Solution complète de gestion des urgences médicales. 
              Optimisez les temps d'attente et améliorez la qualité des soins.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <FaFacebook className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <FaLinkedin className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Liens utiles */}
          <div>
            <h3 className="font-semibold mb-4">Liens utiles</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/fonctionnalites" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link to="/patient" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Espace Patient
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Connexion Pro
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h3 className="font-semibold mb-4">Légal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/mentions-legales" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link to="/cgu" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  CGU
                </Link>
              </li>
              <li>
                <Link to="/politique-confidentialite" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 Pro S. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};