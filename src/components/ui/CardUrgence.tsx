import { motion } from 'framer-motion';
import { ClockIcon, MapPinIcon, UsersIcon } from '@heroicons/react/24/outline';
import { CentreUrgence } from '@/stores/useAppStore';

interface CardUrgenceProps {
  centre: CentreUrgence;
  onSelect?: () => void;
  isSelected?: boolean;
}

const getUrgenceColor = (code: string) => {
  const colors = {
    rouge: 'bg-urgence-rouge border-urgence-rouge text-white',
    orange: 'bg-urgence-orange border-urgence-orange text-white', 
    jaune: 'bg-urgence-jaune border-urgence-jaune text-gray-900',
    vert: 'bg-urgence-vert border-urgence-vert text-white',
    bleu: 'bg-urgence-bleu border-urgence-bleu text-white',
    blanc: 'bg-urgence-blanc border-gray-300 text-gray-900'
  };
  return colors[code as keyof typeof colors] || colors.blanc;
};

const getUrgenceLabel = (code: string) => {
  const labels = {
    rouge: 'Urgence vitale',
    orange: 'Très urgent',
    jaune: 'Urgent',
    vert: 'Peu urgent',
    bleu: 'Non urgent',
    blanc: 'Consultation'
  };
  return labels[code as keyof typeof labels] || 'Non défini';
};

export const CardUrgence = ({ centre, onSelect, isSelected = false }: CardUrgenceProps) => {
  const occupationRate = (centre.patientsActuels / centre.capacite) * 100;
  
  // Temps d'attente moyen pour affichage principal
  const tempsAttenteMoyen = Math.round(
    Object.values(centre.tempsAttente).reduce((sum, temps) => sum + temps, 0) / 6
  );
  
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`bg-white rounded-2xl shadow-sm border-2 p-4 cursor-pointer transition-all duration-300 ${
        isSelected ? 'border-primary shadow-md' : 'border-gray-100 hover:border-primary/30 hover:shadow-md'
      }`}
      onClick={onSelect}
    >
      {/* Header */}
      <div className="mb-3">
        <h3 className="text-sm font-semibold text-foreground line-clamp-1">{centre.nom}</h3>
        <div className="flex items-center text-xs text-muted-foreground mt-1">
          <MapPinIcon className="w-3 h-3 mr-1 flex-shrink-0" />
          <span className="line-clamp-1">{centre.adresse}</span>
        </div>
      </div>

      {/* Temps d'attente principal */}
      <div className="mb-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-card-foreground">Temps moyen</span>
          <div className="flex items-center space-x-1">
            <ClockIcon className="w-3 h-3 text-muted-foreground" />
            <span className="text-sm font-bold text-primary">{tempsAttenteMoyen}min</span>
          </div>
        </div>
        
        {/* Barre d'occupation */}
        <div className="w-full bg-gray-100 rounded-full h-1.5">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${occupationRate}%` }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={`h-1.5 rounded-full ${
              occupationRate > 80 ? 'bg-red-400' : 
              occupationRate > 60 ? 'bg-orange-400' : 'bg-primary'
            }`}
          />
        </div>
        <div className="flex justify-between items-center mt-1">
          <span className="text-xs text-muted-foreground">Occupation</span>
          <span className="text-xs text-muted-foreground">{Math.round(occupationRate)}%</span>
        </div>
      </div>

      {/* Temps d'attente par urgence (top 3) */}
      <div className="space-y-1">
        {Object.entries(centre.tempsAttente)
          .sort(([,a], [,b]) => a - b)
          .slice(0, 3)
          .map(([code, temps]) => (
            <div key={code} className="flex items-center justify-between">
              <div className="flex items-center space-x-1.5">
                <div className={`w-2 h-2 rounded-full ${getUrgenceColor(code).split(' ')[0]}`} />
                <span className="text-xs text-muted-foreground capitalize">{code}</span>
              </div>
              <span className="text-xs font-medium">{temps}min</span>
            </div>
          ))}
      </div>

      {/* Capacité */}
      <div className="mt-3 pt-2 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <UsersIcon className="w-3 h-3 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Patients</span>
          </div>
          <span className="text-xs font-medium">
            {centre.patientsActuels}/{centre.capacite}
          </span>
        </div>
      </div>

      {/* Indicateur de sélection */}
      {isSelected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="mt-3 p-2 bg-primary/10 rounded-lg text-center"
        >
          <span className="text-xs font-medium text-primary">Sélectionné</span>
        </motion.div>
      )}
    </motion.div>
  );
};