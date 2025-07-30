import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CardUrgence } from '@/components/ui/CardUrgence';
import { useAppStore } from '@/stores/useAppStore';
import { 
  ArrowLeftIcon,
  MapPinIcon,
  FunnelIcon
} from '@heroicons/react/24/outline';

export const ChoixCentre = () => {
  const { centres, selectedCentre, setSelectedCentre, initializeMockData } = useAppStore();
  const [sortBy, setSortBy] = useState<'distance' | 'attente'>('attente');

  useEffect(() => {
    if (centres.length === 0) {
      initializeMockData();
    }
  }, [centres, initializeMockData]);

  const handleCentreSelect = (centre: any) => {
    setSelectedCentre(centre);
  };

  const sortedCentres = [...centres].sort((a, b) => {
    if (sortBy === 'attente') {
      const avgA = Object.values(a.tempsAttente).reduce((sum: number, val: number) => sum + val, 0) / 6;
      const avgB = Object.values(b.tempsAttente).reduce((sum: number, val: number) => sum + val, 0) / 6;
      return avgA - avgB;
    }
    return 0; // Tri par distance (simulé)
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header mobile */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="flex items-center justify-between p-4">
          <Link to="/patient" className="p-2 -ml-2">
            <ArrowLeftIcon className="w-6 h-6 text-foreground" />
          </Link>
          <h1 className="text-lg font-semibold text-foreground">Emergency Centers</h1>
          <div className="w-10" />
        </div>
      </div>

      <div className="p-4">
        {/* Localisation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-4 mb-6 shadow-sm border border-gray-100"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
              <MapPinIcon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground">La tua posizione</p>
              <p className="text-sm text-muted-foreground">Bologna, 40100</p>
            </div>
          </div>
        </motion.div>

        {/* Filtre de tri */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-foreground">
            {centres.length} centres disponibles
          </h2>
          <div className="flex items-center space-x-2 bg-white rounded-xl px-3 py-2 shadow-sm border border-gray-100">
            <FunnelIcon className="w-4 h-4 text-muted-foreground" />
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'distance' | 'attente')}
              className="text-sm bg-transparent border-0 text-muted-foreground focus:outline-none"
            >
              <option value="attente">Temps d'attente</option>
              <option value="distance">Distance</option>
            </select>
          </div>
        </div>

        {/* Grille des centres */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 mb-6">
          {sortedCentres.map((centre, index) => (
            <motion.div
              key={centre.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <CardUrgence
                centre={centre}
                onSelect={() => handleCentreSelect(centre)}
                isSelected={selectedCentre?.id === centre.id}
              />
            </motion.div>
          ))}
        </div>

        {/* Message si pas de centre sélectionné */}
        {!selectedCentre && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-8"
          >
            <p className="text-muted-foreground">Sélectionnez un centre pour continuer</p>
          </motion.div>
        )}

        {/* Bouton de validation */}
        {selectedCentre && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-4 left-4 right-4 z-10"
          >
            <Link to="/patient/login-spid">
              <Button 
                size="lg" 
                className="w-full py-4 text-lg font-semibold rounded-2xl shadow-lg bg-primary hover:bg-primary/90"
              >
                Continuer avec {selectedCentre.nom}
              </Button>
            </Link>
          </motion.div>
        )}
        
        {/* Espace pour le bouton fixe */}
        {selectedCentre && <div className="h-20" />}
      </div>
    </div>
  );
};