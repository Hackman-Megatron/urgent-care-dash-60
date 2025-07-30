import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Login } from "./pages/Login";
import { PatientWelcome } from "./pages/Patient/PatientWelcome";
import { ChoixCentre } from "./pages/Patient/ChoixCentre";
import { LoginSPID } from "./pages/Patient/LoginSPID";
import { PatientForm } from "./pages/Patient/PatientForm";
import { ResumeReservation } from "./pages/Patient/ResumeReservation";
import { Dashboard } from "./pages/Dashboard";
import { Patients } from "./pages/Dashboard/Patients";
import { Accettazione } from "./pages/Dashboard/Accettazione";
import { Consultations } from "./pages/Dashboard/Consultations";
import { Settings } from "./pages/Dashboard/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          
          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/patients" element={<Patients />} />
          <Route path="/dashboard/accettazione" element={<Accettazione />} />
          <Route path="/dashboard/consultations" element={<Consultations />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          
          {/* Routes Patient Mobile */}
          <Route path="/patient" element={<PatientWelcome />} />
          <Route path="/patient/centres" element={<ChoixCentre />} />
          <Route path="/patient/login-spid" element={<LoginSPID />} />
          <Route path="/patient/formulaire" element={<PatientForm />} />
          <Route path="/patient/resume" element={<ResumeReservation />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
