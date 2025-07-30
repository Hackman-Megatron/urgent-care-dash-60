import { create } from 'zustand';

export interface Patient {
  id: string;
  nom: string;
  prenom: string;
  dateNaissance: string;
  codeUrgence: 'rouge' | 'orange' | 'jaune' | 'vert' | 'bleu' | 'blanc';
  centreUrgence: string;
  etatSante: string;
  heureArrivee?: string;
  diagnostic?: string;
  prescription?: string;
  parametresVitaux?: {
    tension: string;
    pouls: string;
    temperature: string;
    saturation: string;
  };
}

export interface CentreUrgence {
  id: string;
  nom: string;
  adresse: string;
  tempsAttente: {
    rouge: number;
    orange: number;
    jaune: number;
    vert: number;
    bleu: number;
    blanc: number;
  };
  capacite: number;
  patientsActuels: number;
}

export interface User {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  role: 'patient' | 'operateur' | 'admin';
  centreAssigne?: string;
}

interface AppState {
  // État général
  currentUser: User | null;
  isAuthenticated: boolean;
  deviceType: 'mobile' | 'desktop';
  
  // Patients
  patients: Patient[];
  currentPatient: Patient | null;
  
  // Centres d'urgence
  centres: CentreUrgence[];
  selectedCentre: CentreUrgence | null;
  
  // Actions
  setCurrentUser: (user: User | null) => void;
  setAuthenticated: (auth: boolean) => void;
  setDeviceType: (type: 'mobile' | 'desktop') => void;
  addPatient: (patient: Patient) => void;
  updatePatient: (id: string, data: Partial<Patient>) => void;
  setCurrentPatient: (patient: Patient | null) => void;
  setSelectedCentre: (centre: CentreUrgence | null) => void;
  
  // Simulation de données
  initializeMockData: () => void;
}

export const useAppStore = create<AppState>((set, get) => ({
  currentUser: null,
  isAuthenticated: false,
  deviceType: 'desktop',
  patients: [],
  currentPatient: null,
  centres: [],
  selectedCentre: null,
  
  setCurrentUser: (user) => set({ currentUser: user }),
  setAuthenticated: (auth) => set({ isAuthenticated: auth }),
  setDeviceType: (type) => set({ deviceType: type }),
  
  addPatient: (patient) => set((state) => ({
    patients: [...state.patients, patient]
  })),
  
  updatePatient: (id, data) => set((state) => ({
    patients: state.patients.map(p => p.id === id ? { ...p, ...data } : p)
  })),
  
  setCurrentPatient: (patient) => set({ currentPatient: patient }),
  setSelectedCentre: (centre) => set({ selectedCentre: centre }),
  
  initializeMockData: () => set({
    centres: [
      {
        id: '1',
        nom: 'Policlinico Sant\'Orsola-Malpighi',
        adresse: 'Via Giuseppe Massarenti, 9',
        tempsAttente: { rouge: 0, orange: 15, jaune: 45, vert: 90, bleu: 120, blanc: 180 },
        capacite: 50,
        patientsActuels: 32
      },
      {
        id: '2',
        nom: 'Ospedale Maggiore',
        adresse: 'Largo Bartolo Nigrisoli, 2',
        tempsAttente: { rouge: 5, orange: 25, jaune: 60, vert: 105, bleu: 140, blanc: 200 },
        capacite: 80,
        patientsActuels: 65
      },
      {
        id: '3',
        nom: 'Ospedale Villa Torri',
        adresse: 'Via delle Vigne, 4',
        tempsAttente: { rouge: 0, orange: 10, jaune: 30, vert: 75, bleu: 100, blanc: 150 },
        capacite: 40,
        patientsActuels: 28
      },
      {
        id: '4',
        nom: 'Casa di Cura Villa Erbosa',
        adresse: 'Via Erbosa, 20',
        tempsAttente: { rouge: 0, orange: 20, jaune: 50, vert: 85, bleu: 110, blanc: 160 },
        capacite: 35,
        patientsActuels: 22
      },
      {
        id: '5',
        nom: 'Istituto Rizzoli',
        adresse: 'Via Giulio Cesare Pupilli, 1',
        tempsAttente: { rouge: 10, orange: 35, jaune: 70, vert: 115, bleu: 150, blanc: 210 },
        capacite: 45,
        patientsActuels: 38
      },
      {
        id: '6',
        nom: 'Casa di Cura Villalba',
        adresse: 'Via Emilio Zago, 2',
        tempsAttente: { rouge: 0, orange: 12, jaune: 35, vert: 70, bleu: 95, blanc: 140 },
        capacite: 30,
        patientsActuels: 18
      },
      {
        id: '7',
        nom: 'Ospedale Bellaria',
        adresse: 'Via Altura, 3',
        tempsAttente: { rouge: 5, orange: 18, jaune: 40, vert: 80, bleu: 105, blanc: 155 },
        capacite: 25,
        patientsActuels: 15
      },
      {
        id: '8',
        nom: 'Ospedale di Bentivoglio',
        adresse: 'Via Marconi, 35',
        tempsAttente: { rouge: 0, orange: 8, jaune: 25, vert: 60, bleu: 85, blanc: 125 },
        capacite: 20,
        patientsActuels: 12
      },
      {
        id: '9',
        nom: 'Ospedale di Imola',
        adresse: 'Viale Giuseppe Amendola, 2',
        tempsAttente: { rouge: 0, orange: 22, jaune: 55, vert: 95, bleu: 125, blanc: 175 },
        capacite: 42,
        patientsActuels: 30
      },
      {
        id: '10',
        nom: 'Casa di Cura Villa Regina',
        adresse: 'Via Brigata Taro, 45',
        tempsAttente: { rouge: 3, orange: 16, jaune: 42, vert: 78, bleu: 102, blanc: 148 },
        capacite: 38,
        patientsActuels: 25
      }
    ],
    patients: [
      {
        id: '1',
        nom: 'Dupont',
        prenom: 'Marie',
        dateNaissance: '1985-03-15',
        codeUrgence: 'orange',
        centreUrgence: 'CHU Saint-Antoine',
        etatSante: 'Douleur thoracique intense',
        heureArrivee: '14:30',
        parametresVitaux: {
          tension: '140/90',
          pouls: '95',
          temperature: '37.2',
          saturation: '98'
        }
      },
      {
        id: '2',
        nom: 'Martin',
        prenom: 'Jean',
        dateNaissance: '1970-08-22',
        codeUrgence: 'vert',
        centreUrgence: 'CHU Saint-Antoine',
        etatSante: 'Consultation de routine',
        heureArrivee: '15:45'
      }
    ]
  })
}));