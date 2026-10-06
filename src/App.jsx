import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { useRevealOnScroll } from "./hooks/useReveal";

import Home from "./pages/Home";
import About from "./pages/About";
import Vapt from "./pages/Vapt";
import Wapt from "./pages/Wapt";
import DroneTesting from "./pages/DroneTesting";
import IotSecurity from "./pages/IotSecurity";
import AimlSecurity from "./pages/AimlSecurity";
import SocAudit from "./pages/SocAudit";
import Soc3Audit from "./pages/Soc3Audit";
import HipaaAudit from "./pages/HipaaAudit";
import Iso27001 from "./pages/Iso27001";
import Iso27000 from "./pages/Iso27000";
import Iso27701 from "./pages/Iso27701";
import AiCompliance from "./pages/AiCompliance";
import Dpdpa from "./pages/Dpdpa";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

export default function App() {
  useRevealOnScroll();

  useEffect(() => {
    document.title = "CyberSec | Information Security & CyberSec Division of SF";
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vapt" element={<Vapt />} />
          <Route path="/wapt" element={<Wapt />} />
          <Route path="/drone-testing" element={<DroneTesting />} />
          <Route path="/iot-security" element={<IotSecurity />} />
          <Route path="/ai-ml-security" element={<AimlSecurity />} />
          <Route path="/soc-audit" element={<SocAudit />} />
          <Route path="/soc3-audit" element={<Soc3Audit />} />
          <Route path="/hipaa-audit" element={<HipaaAudit />} />
          <Route path="/iso-27001" element={<Iso27001 />} />
          <Route path="/iso-27000" element={<Iso27000 />} />
          <Route path="/iso-27701" element={<Iso27701 />} />
          <Route path="/ai-compliance" element={<AiCompliance />} />
          <Route path="/dpdpa" element={<Dpdpa />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}