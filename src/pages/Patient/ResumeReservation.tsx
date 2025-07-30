import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAppStore } from '@/stores/useAppStore';
import { 
  CheckCircleIcon,
  ClockIcon,
  MapPinIcon,
  HeartIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';

const getUrgenceConfig = (code: string) => {
  const configs = {
    rouge: { 
      color: 'bg-urgence-rouge', 
      textColor: 'text-white', 
      label: 'Urgence vitale',
      priority: 'Priorité absolue'
    },
    orange: { 
      color: 'bg-urgence-orange', 
      textColor: 'text-white', 
      label: 'Très urgent',
      priority: 'Haute priorité'
    },
    jaune: { 
      color: 'bg-urgence-jaune', 
      textColor: 'text-gray-900', 
      label: 'Urgent',
      priority: 'Priorité normale'
    },
    vert: { 
      color: 'bg-urgence-vert', 
      textColor: 'text-white', 
      label: 'Peu urgent',
      priority: 'Priorité basse'
    },
    bleu: { 
      color: 'bg-urgence-bleu', 
      textColor: 'text-white', 
      label: 'Non urgent',
      priority: 'Consultation'
    },
    blanc: { 
      color: 'bg-urgence-blanc border-2 border-gray-300', 
      textColor: 'text-gray-900', 
      label: 'Consultation',
      priority: 'Rendez-vous'
    }
  };
  return configs[code as keyof typeof configs] || configs.blanc;
};

export const ResumeReservation = () => {
  const { selectedCentre, patients, currentUser } = useAppStore();
  
  // Récupérer le dernier patient ajouté pour cet utilisateur
  const currentPatient = patients
    .filter(p => p.nom === currentUser?.nom && p.prenom === currentUser?.prenom)
    .slice(-1)[0];

  const urgenceConfig = currentPatient ? getUrgenceConfig(currentPatient.codeUrgence) : null;
  const tempsAttente = selectedCentre?.tempsAttente[currentPatient?.codeUrgence as keyof typeof selectedCentre.tempsAttente] || 0;

  return (
    <div className="min-h-screen bg-background">
      {/* Header mobile */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="flex items-center justify-center p-4">
          <h1 className="text-lg font-semibold text-foreground">Réservation confirmée</h1>
        </div>
      </div>

      <div className="p-4 max-w-md mx-auto">
        {/* Confirmation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircleIcon className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Réservation confirmée !
          </h2>
          <p className="text-muted-foreground">
            Votre demande a été transmise au centre d'urgence
          </p>
        </motion.div>

        {/* Informations de la réservation */}
        {currentPatient && selectedCentre && urgenceConfig && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 mb-8"
          >
            {/* Code d'urgence */}
            <div className={`${urgenceConfig.color} rounded-2xl p-6 text-center`}>
              <h3 className={`text-xl font-bold ${urgenceConfig.textColor} mb-2`}>
                Code: {currentPatient.codeUrgence.toUpperCase()}
              </h3>
              <p className={`${urgenceConfig.textColor}/90 mb-1`}>
                {urgenceConfig.label}
              </p>
              <p className={`text-sm ${urgenceConfig.textColor}/80`}>
                {urgenceConfig.priority}
              </p>
            </div>

            {/* Temps d'attente estimé */}
            <div className="bg-card rounded-2xl p-6 shadow-card">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <ClockIcon className="w-8 h-8 text-primary" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">{tempsAttente} min</p>
                  <p className="text-sm text-muted-foreground">Temps d'attente estimé</p>
                </div>
              </div>
            </div>

            {/* Informations du centre */}
            <div className="bg-card rounded-2xl p-6 shadow-card">
              <div className="flex items-start space-x-3">
                <MapPinIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-card-foreground mb-1">
                    {selectedCentre.nom}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {selectedCentre.adresse}
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <CalendarIcon className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        {new Date().toLocaleDateString('fr-FR')}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <ClockIcon className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        {currentPatient.heureArrivee}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Informations patient */}
            <div className="bg-card rounded-2xl p-6 shadow-card">
              <div className="flex items-start space-x-3">
                <HeartIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h4 className="font-semibold text-card-foreground mb-1">
                    Patient: {currentPatient.prenom} {currentPatient.nom}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Symptômes déclarés:
                  </p>
                  <p className="text-sm text-foreground bg-muted rounded-xl p-3">
                    {currentPatient.etatSante}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-accent/50 rounded-2xl p-6 mb-8"
        >
          <h4 className="font-semibold text-foreground mb-3">Prochaines étapes:</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start space-x-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
              <span>Rendez-vous au centre d'urgence avec votre carte d'identité</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
              <span>Présentez-vous à l'accueil avec votre code d'urgence</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
              <span>Un professionnel de santé vous prendra en charge</span>
            </li>
          </ul>
        </motion.div>

        {/* Note d'urgence */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-destructive/10 rounded-2xl p-4 mb-8"
        >
          <p className="text-sm text-destructive text-center">
            <strong>Important:</strong> Si votre état s'aggrave, 
            appelez immédiatement le 15 ou rendez-vous directement aux urgences.
          </p>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="space-y-3"
        >
          <Link to="/patient">
            <Button 
              size="lg" 
              className="w-full py-4 text-lg font-semibold rounded-2xl"
            >
              Nouvelle réservation
            </Button>
          </Link>
          
          <Link to="/">
            <Button 
              variant="outline"
              size="lg" 
              className="w-full py-4 text-lg font-semibold rounded-2xl"
            >
              Retour à l'accueil
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};