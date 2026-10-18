
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import Index from "./pages/Index";
import About from "./pages/About";
import AboutSection from "./pages/AboutSection";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Insights from "./pages/Insights";
import InsightPost from "./pages/InsightPost";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const App = () => {
  // Keep one QueryClient instance for the lifetime of the app.
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <Routes>
            {/* Home */}
            <Route path="/" element={<Index />} />

            {/* About landing page */}
            <Route path="/about" element={<About />} />

            {/* Dedicated company information pages */}
            <Route
              path="/about/company-background"
              element={
                <AboutSection section="company-background" />
              }
            />

            <Route
              path="/about/team-expertise"
              element={
                <AboutSection section="team-expertise" />
              }
            />

            <Route
              path="/about/geographic-coverage"
              element={
                <AboutSection section="geographic-coverage" />
              }
            />

            {/* Services */}
            <Route path="/services" element={<Services />} />
            <Route
              path="/services/:slug"
              element={<ServiceDetail />}
            />

            {/* Projects */}
            <Route path="/projects" element={<Projects />} />
            <Route
              path="/projects/:slug"
              element={<ProjectDetail />}
            />

            {/* Insights */}
            <Route path="/insights" element={<Insights />} />
            <Route
              path="/insights/:slug"
              element={<InsightPost />}
            />

            {/* Contact */}
            <Route path="/contact" element={<Contact />} />

            {/* Legacy redirects */}
            <Route
              path="/work"
              element={<Navigate to="/projects" replace />}
            />

            <Route
              path="/blog"
              element={<Navigate to="/insights" replace />}
            />

            {/* Unknown routes */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
