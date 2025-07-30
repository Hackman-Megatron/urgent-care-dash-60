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
            Welcome Patient
          </h1>
          
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Manage your medical emergencies easily and securely. 
            Access emergency centers with real-time waiting times.
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
                <h3 className="font-semibold text-foreground mb-1">Real-time waiting times</h3>
                <p className="text-sm text-muted-foreground">Check current delays before traveling</p>
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
                <h3 className="font-semibold text-foreground mb-1">Nearby centers</h3>
                <p className="text-sm text-muted-foreground">Find the nearest and available emergency center</p>
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
                <h3 className="font-semibold text-foreground mb-1">Optimized care</h3>
                <p className="text-sm text-muted-foreground">Color code adapted to your health condition</p>
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
                <h3 className="font-semibold text-foreground mb-1">Secure data</h3>
                <p className="text-sm text-muted-foreground">Your medical information protected according to GDPR standards</p>
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
                Start
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer mobile */}
      <div className="p-6 text-center bg-white border-t">
        <p className="text-sm text-muted-foreground">
          In case of life-threatening emergency, call 15
        </p>
      </div>
    </div>
  );
};