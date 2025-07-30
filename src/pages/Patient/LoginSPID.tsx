import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAppStore } from '@/stores/useAppStore';
import { 
  ArrowLeftIcon,
  ShieldCheckIcon,
  FingerPrintIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/24/outline';

export const LoginSPID = () => {
  const navigate = useNavigate();
  const { setCurrentUser, setAuthenticated } = useAppStore();
  const [authMethod, setAuthMethod] = useState<'cie' | 'spid' | 'cns'>('spid');
  const [isLoading, setIsLoading] = useState(false);

  const handleAuth = async () => {
    setIsLoading(true);
    
    // Simulation de l'authentification
    setTimeout(() => {
      setCurrentUser({
        id: '1',
        nom: 'Dupont',
        prenom: 'Marie',
        email: 'marie.dupont@email.com',
        role: 'patient'
      });
      setAuthenticated(true);
      setIsLoading(false);
      navigate('/patient/formulaire');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header mobile */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="flex items-center justify-between p-4">
          <Link to="/patient/centres" className="p-2 -ml-2">
            <ArrowLeftIcon className="w-6 h-6 text-foreground" />
          </Link>
          <h1 className="text-lg font-semibold text-foreground">Authentification</h1>
          <div className="w-10" />
        </div>
      </div>

      <div className="p-4 max-w-md mx-auto">
        {/* Logo SPID */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-4">
            <ShieldCheckIcon className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Secure Login
          </h2>
          <p className="text-muted-foreground">
            Authentifiez-vous avec votre identité numérique
          </p>
        </motion.div>

        {/* Méthodes d'authentification */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4 mb-8"
        >
          <div 
            onClick={() => setAuthMethod('spid')}
            className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
              authMethod === 'spid' 
                ? 'border-primary bg-primary/5' 
                : 'border-border bg-card'
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <ShieldCheckIcon className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">SPID</p>
                <p className="text-sm text-muted-foreground">Identité numérique italienne</p>
              </div>
              {authMethod === 'spid' && (
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
              )}
            </div>
          </div>

          <div 
            onClick={() => setAuthMethod('cie')}
            className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
              authMethod === 'cie' 
                ? 'border-primary bg-primary/5' 
                : 'border-border bg-card'
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <FingerPrintIcon className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">CIE 3.0</p>
                <p className="text-sm text-muted-foreground">Carte d'identité électronique</p>
              </div>
              {authMethod === 'cie' && (
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
              )}
            </div>
          </div>

          <div 
            onClick={() => setAuthMethod('cns')}
            className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
              authMethod === 'cns' 
                ? 'border-primary bg-primary/5' 
                : 'border-border bg-card'
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                <DevicePhoneMobileIcon className="w-5 h-5 text-purple-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">CNS</p>
                <p className="text-sm text-muted-foreground">Carte nationale des services</p>
              </div>
              {authMethod === 'cns' && (
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Informations de sécurité */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-accent/50 rounded-2xl p-4 mb-8"
        >
          <div className="flex items-start space-x-3">
            <ShieldCheckIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-foreground mb-1">
                Vos données sont protégées
              </p>
              <p className="text-xs text-muted-foreground">
                L'authentification utilise les standards européens de sécurité. 
                Vos informations personnelles ne sont jamais stockées sur nos serveurs.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bouton d'authentification */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button 
            onClick={handleAuth}
            disabled={isLoading}
            size="lg" 
            className="w-full py-4 text-lg font-semibold rounded-2xl"
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Authentification...</span>
              </div>
            ) : (
              `Sign in with ${authMethod.toUpperCase()}`
            )}
          </Button>
        </motion.div>

        {/* Note légale */}
        <p className="text-xs text-center text-muted-foreground mt-6">
          En vous connectant, vous acceptez nos conditions d'utilisation 
          et notre politique de confidentialité
        </p>
      </div>
    </div>
  );
};