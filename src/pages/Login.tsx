import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Header } from '@/components/ui/Header';
import { useAppStore } from '@/stores/useAppStore';
import { 
  HeartIcon,
  UserGroupIcon,
  CogIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';

const userTypes = [
  {
    id: 'operateur',
    label: 'Opérateur Sanitaire',
    description: 'Gestion des patients et soins médicaux',
    icon: HeartIcon,
    color: 'bg-primary text-primary-foreground',
    route: '/operateur'
  },
  {
    id: 'admin',
    label: 'Administrateur',
    description: 'Gestion du système et des utilisateurs',
    icon: CogIcon,
    color: 'bg-secondary text-secondary-foreground',
    route: '/admin'
  }
];

export const Login = () => {
  const navigate = useNavigate();
  const { setCurrentUser, setAuthenticated, setDeviceType } = useAppStore();
  const [step, setStep] = useState<'choice' | 'login'>('choice');
  const [selectedType, setSelectedType] = useState<'operateur' | 'admin' | null>(null);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleUserTypeSelect = (type: 'operateur' | 'admin') => {
    setSelectedType(type);
    setStep('login');
    setDeviceType('desktop');
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!credentials.username || !credentials.password) return;
    
    setIsLoading(true);
    
    // Simulation de l'authentification
    setTimeout(() => {
      setCurrentUser({
        id: '1',
        nom: selectedType === 'admin' ? 'Admin' : 'Dr. Martin',
        prenom: selectedType === 'admin' ? 'Système' : 'Jean',
        email: `${selectedType}@pros.com`,
        role: selectedType || 'operateur'
      });
      setAuthenticated(true);
      setIsLoading(false);
      
      const route = userTypes.find(type => type.id === selectedType)?.route || '/';
      navigate(route);
    }, 1500);
  };

  if (step === 'choice') {
    return (
      <div className="min-h-screen bg-background">
        <Header variant="app" />
        
        <div className="max-w-4xl mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Connexion Professionnelle
            </h1>
            <p className="text-xl text-muted-foreground">
              Choisissez votre type de compte pour accéder à l'interface dédiée
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {userTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <motion.div
                  key={type.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => handleUserTypeSelect(type.id as 'operateur' | 'admin')}
                  className="bg-card border-2 border-border hover:border-primary/30 rounded-3xl p-8 cursor-pointer transition-all shadow-card hover:shadow-elegant"
                >
                  <div className={`w-16 h-16 ${type.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground text-center mb-2">
                    {type.label}
                  </h3>
                  <p className="text-muted-foreground text-center">
                    {type.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              Retour à l'accueil
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header variant="app" />
      
      <div className="max-w-md mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-3xl shadow-elegant p-8"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              {selectedType === 'admin' ? (
                <CogIcon className="w-8 h-8 text-primary" />
              ) : (
                <HeartIcon className="w-8 h-8 text-primary" />
              )}
            </div>
            <h2 className="text-2xl font-bold text-card-foreground mb-2">
              {userTypes.find(type => type.id === selectedType)?.label}
            </h2>
            <p className="text-muted-foreground">
              Connectez-vous à votre espace professionnel
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <Label htmlFor="username" className="text-card-foreground">
                Nom d'utilisateur
              </Label>
              <Input
                id="username"
                type="text"
                value={credentials.username}
                onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                placeholder="Votre nom d'utilisateur"
                className="rounded-2xl"
                required
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-card-foreground">
                Mot de passe
              </Label>
              <Input
                id="password"
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                placeholder="Votre mot de passe"
                className="rounded-2xl"
                required
              />
            </div>

            <Button 
              type="submit"
              disabled={isLoading}
              size="lg" 
              className="w-full py-4 text-lg font-semibold rounded-2xl"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Connexion...</span>
                </div>
              ) : (
                'Se connecter'
              )}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <button 
              onClick={() => setStep('choice')}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Changer de type de compte
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};