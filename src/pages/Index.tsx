import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Button } from '@/components/ui/button';
import { 
  HeartIcon, 
  ClockIcon, 
  ChartBarIcon, 
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';
import heroIllustration from '@/assets/hero-medical-illustration.png';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header variant="landing" />
      
      {/* Section Héros */}
      <section className="relative overflow-hidden bg-gradient-hero text-white">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Gérez vos urgences 
                <span className="block text-primary-light">efficacement</span>
                <span className="block">en temps réel</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Optimisez les temps d'attente, améliorez la qualité des soins et 
                digitalisez votre processus de gestion des urgences médicales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/patient">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto">
                    Espace Patient
                  </Button>
                </Link>
                <Link to="/login">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                    Connexion Pro
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex items-center justify-center"
            >
              <img 
                src={heroIllustration} 
                alt="Illustration médicale montrant des professionnels de santé utilisant la technologie numérique avec une ambulance" 
                className="w-full h-auto max-w-lg rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Fonctionnalités */}
      <section id="features" className="py-20 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Une solution complète
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Notre plateforme révolutionne la gestion des urgences avec des outils 
              adaptés à chaque utilisateur
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Fonctionnalité Patient */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl p-8 shadow-card border"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <DevicePhoneMobileIcon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Interface Patient</h3>
              <p className="text-muted-foreground mb-6">
                Application mobile intuitive pour les patients avec visualisation 
                des temps d'attente en temps réel
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Authentification SPID</li>
                <li>• Choix du centre d'urgence</li>
                <li>• Suivi temps d'attente</li>
                <li>• Réservation simplifiée</li>
              </ul>
            </motion.div>

            {/* Fonctionnalité Opérateur */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl p-8 shadow-card border"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <HeartIcon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Espace Opérateur</h3>
              <p className="text-muted-foreground mb-6">
                Outils professionnels pour optimiser la prise en charge 
                et le suivi des patients
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Gestion codes couleur</li>
                <li>• Paramètres vitaux</li>
                <li>• Diagnostics médicaux</li>
                <li>• Recherche patients</li>
              </ul>
            </motion.div>

            {/* Fonctionnalité Admin */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl p-8 shadow-card border"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <ComputerDesktopIcon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Administration</h3>
              <p className="text-muted-foreground mb-6">
                Tableau de bord complet pour la gestion des utilisateurs 
                et l'analyse des performances
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Gestion utilisateurs</li>
                <li>• Statistiques avancées</li>
                <li>• Configuration système</li>
                <li>• Rapports détaillés</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Choix d'interface */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Choisissez votre interface
            </h2>
            <p className="text-xl text-muted-foreground">
              Accédez à l'application selon votre profil
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-primary to-primary-light text-white rounded-3xl p-8 text-center shadow-elegant"
            >
              <DevicePhoneMobileIcon className="w-16 h-16 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Patient ?</h3>
              <p className="text-white/90 mb-6">
                Accédez à l'interface mobile optimisée pour réserver 
                et suivre votre urgence médicale
              </p>
              <Link to="/patient">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Accès Patient
                </Button>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-card border-2 border-primary/20 rounded-3xl p-8 text-center shadow-card"
            >
              <ComputerDesktopIcon className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Professionnel de Santé ?</h3>
              <p className="text-muted-foreground mb-6">
                Connectez-vous à l'interface professionnelle pour gérer 
                les urgences et les patients
              </p>
              <Link to="/login">
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                  Connexion Pro
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section id="testimonials" className="py-20 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Témoignages
            </h2>
            <p className="text-xl text-muted-foreground">
              Ce que disent nos utilisateurs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl p-6 shadow-card border"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  M
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-card-foreground">Dr. Marco Rossi</h4>
                  <p className="text-sm text-muted-foreground">Médecin urgentiste - Policlinico Sant'Orsola</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "UrgencePro a révolutionné notre façon de gérer les urgences. 
                Les temps d'attente ont considérablement diminué et l'organisation est bien plus fluide."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl p-6 shadow-card border"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  S
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-card-foreground">Sofia Bianchi</h4>
                  <p className="text-sm text-muted-foreground">Patiente</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "Finalement, je peux voir les temps d'attente avant de me déplacer ! 
                Cela m'a fait gagner beaucoup de temps et réduit mon stress."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl p-6 shadow-card border"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  L
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-card-foreground">Luca Ferrari</h4>
                  <p className="text-sm text-muted-foreground">Infirmier - Ospedale Maggiore</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "L'interface est intuitive et nous permet de mieux organiser les soins. 
                La gestion des codes couleur est particulièrement efficace."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Contactez-nous
            </h2>
            <p className="text-xl text-muted-foreground">
              Une question ? Nous sommes là pour vous aider
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">Informations de contact</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Téléphone</h4>
                    <p className="text-muted-foreground">+39 051 2144111</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">contact@pros.it</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Adresse</h4>
                    <p className="text-muted-foreground">Via Università, 1<br />40126 Bologna, Italie</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl p-8 shadow-card border"
            >
              <h3 className="text-2xl font-bold text-card-foreground mb-6">Envoyez-nous un message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Nom</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Votre message..."
                  />
                </div>
                <Button className="w-full bg-primary text-white hover:bg-primary/90">
                  Envoyer le message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
