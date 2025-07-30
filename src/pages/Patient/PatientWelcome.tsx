import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  HeartIcon,
  ClockIcon,
  MapPinIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/24/outline';

export const PatientWelcome = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header mobile */}
      <div className="flex items-center justify-between p-4 bg-white">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/lovable-uploads/ad9c47fb-76f7-474b-9629-488fc16e6c8d.png" alt="Pro S Logo" className="w-8 h-8 rounded-xl" />
          <span className="text-lg font-bold text-foreground">Pro S</span>
        </Link>
      </div>

      {/* Contenu principal */}
      <div className="flex-1 flex flex-col justify-center px-6 pb-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-md mx-auto"
        >
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-8">
            <DevicePhoneMobileIcon className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-3xl font-bold mb-4 leading-tight text-foreground">
            Bienvenue Patient
          </h1>
          
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Gérez vos urgences médicales facilement et en toute sécurité. 
            Accédez aux centres d'urgence avec les temps d'attente en temps réel.
          </p>

          {/* Fonctionnalités */}
          <div className="space-y-6 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex items-start space-x-4 text-left"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <ClockIcon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Temps d'attente en temps réel</h3>
                <p className="text-sm text-muted-foreground">Consultez les délais actuels avant de vous déplacer</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex items-start space-x-4 text-left"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPinIcon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Centres à proximité</h3>
                <p className="text-sm text-muted-foreground">Trouvez le centre d'urgence le plus proche et disponible</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex items-start space-x-4 text-left"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <HeartIcon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Prise en charge optimisée</h3>
                <p className="text-sm text-muted-foreground">Code couleur adapté à votre état de santé</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex items-start space-x-4 text-left"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <ShieldCheckIcon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Données sécurisées</h3>
                <p className="text-sm text-muted-foreground">Vos informations médicales protégées selon les normes RGPD</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <Link to="/patient/centres">
              <Button 
                size="lg" 
                className="bg-primary text-white hover:bg-primary/90 w-full py-4 text-lg font-semibold rounded-xl"
              >
                Commencer
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer mobile */}
      <div className="p-6 text-center bg-white border-t">
        <p className="text-sm text-muted-foreground">
          En cas d'urgence vitale, appelez le 15
        </p>
      </div>
    </div>
  );
};