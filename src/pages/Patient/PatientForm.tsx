import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useAppStore } from '@/stores/useAppStore';
import { 
  ArrowLeftIcon,
  ExclamationTriangleIcon,
  ClockIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

const urgenceNiveaux = [
  {
    id: 'rouge',
    label: 'Urgence vitale',
    description: 'Danger immédiat de mort',
    color: 'bg-urgence-rouge border-urgence-rouge text-white',
    icon: ExclamationTriangleIcon,
    examples: ['Arrêt cardiaque', 'Traumatisme grave', 'Détresse respiratoire']
  },
  {
    id: 'orange', 
    label: 'Très urgent',
    description: 'Pronostic vital engagé',
    color: 'bg-urgence-orange border-urgence-orange text-white',
    icon: ExclamationTriangleIcon,
    examples: ['Douleur thoracique', 'AVC', 'Traumatisme important']
  },
  {
    id: 'jaune',
    label: 'Urgent',
    description: 'Risque de complications',
    color: 'bg-urgence-jaune border-urgence-jaune text-gray-900',
    icon: ClockIcon,
    examples: ['Fièvre élevée', 'Douleur intense', 'Plaie profonde']
  },
  {
    id: 'vert',
    label: 'Peu urgent',
    description: 'Soins programmables',
    color: 'bg-urgence-vert border-urgence-vert text-white',
    icon: HeartIcon,
    examples: ['Consultation', 'Contrôle', 'Renouvellement']
  }
];

export const PatientForm = () => {
  const navigate = useNavigate();
  const { selectedCentre, currentUser, addPatient } = useAppStore();
  const [selectedUrgence, setSelectedUrgence] = useState<string>('');
  const [symptoms, setSymptoms] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!selectedUrgence || !symptoms.trim()) return;
    
    setIsSubmitting(true);
    
    // Simulation de soumission
    setTimeout(() => {
      const newPatient = {
        id: Date.now().toString(),
        nom: currentUser?.nom || 'Dupont',
        prenom: currentUser?.prenom || 'Marie',
        dateNaissance: '1985-03-15',
        codeUrgence: selectedUrgence as any,
        centreUrgence: selectedCentre?.nom || '',
        etatSante: symptoms,
        heureArrivee: new Date().toLocaleTimeString('fr-FR', { 
          hour: '2-digit', 
          minute: '2-digit' 
        })
      };
      
      addPatient(newPatient);
      setIsSubmitting(false);
      navigate('/patient/resume');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header mobile */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="flex items-center justify-between p-4">
          <Link to="/patient/login-spid" className="p-2 -ml-2">
            <ArrowLeftIcon className="w-6 h-6 text-foreground" />
          </Link>
          <h1 className="text-lg font-semibold text-foreground">État de santé</h1>
          <div className="w-10" />
        </div>
      </div>

      <div className="p-4 max-w-md mx-auto">
        {/* Info centre sélectionné */}
        {selectedCentre && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-primary/5 rounded-2xl p-4 mb-6"
          >
            <p className="text-sm text-muted-foreground mb-1">Centre sélectionné</p>
            <p className="font-medium text-foreground">{selectedCentre.nom}</p>
          </motion.div>
        )}

        {/* Sélection niveau d'urgence */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Label className="text-base font-semibold text-foreground mb-4 block">
            Évaluez votre niveau d'urgence
          </Label>
          
          <div className="space-y-3">
            {urgenceNiveaux.map((niveau, index) => {
              const IconComponent = niveau.icon;
              return (
                <motion.div
                  key={niveau.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  onClick={() => setSelectedUrgence(niveau.id)}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    selectedUrgence === niveau.id 
                      ? 'border-primary shadow-elegant scale-[1.02]' 
                      : 'border-border bg-card hover:border-primary/30'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${niveau.color}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{niveau.label}</p>
                      <p className="text-sm text-muted-foreground mb-2">{niveau.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {niveau.examples.map((example, i) => (
                          <span 
                            key={i}
                            className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-lg"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Description des symptômes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <Label className="text-base font-semibold text-foreground mb-4 block">
            Décrivez vos symptômes
          </Label>
          <Textarea
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            placeholder="Décrivez votre état de santé, vos symptômes, la douleur ressentie..."
            className="min-h-32 rounded-2xl resize-none"
          />
          <p className="text-xs text-muted-foreground mt-2">
            Ces informations aideront le personnel médical à mieux vous prendre en charge
          </p>
        </motion.div>

        {/* Note importante */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-destructive/10 rounded-2xl p-4 mb-8"
        >
          <div className="flex items-start space-x-3">
            <ExclamationTriangleIcon className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-destructive mb-1">
                Urgence vitale ?
              </p>
              <p className="text-xs text-destructive">
                En cas d'urgence vitale immédiate, raccrochez et appelez le 15 (SAMU) 
                ou rendez-vous directement aux urgences les plus proches.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bouton de validation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <Button 
            onClick={handleSubmit}
            disabled={!selectedUrgence || !symptoms.trim() || isSubmitting}
            size="lg" 
            className="w-full py-4 text-lg font-semibold rounded-2xl"
          >
            {isSubmitting ? (
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Traitement...</span>
              </div>
            ) : (
              'Confirmer ma demande'
            )}
          </Button>
        </motion.div>
      </div>
    </div>
  );
};