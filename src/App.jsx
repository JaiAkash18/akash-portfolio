import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";

import Hero from "./components/Hero";
import ProfessionalSummary from "./components/ProfessionalSummary";
import Marquee from "./components/Marquee";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Internship from "./components/Internship";
import Training from "./components/Training";
import TrainingStats from "./components/TrainingStats";
import Projects from "./components/Projects";
import LiveProjects from "./components/LiveProjects";
import AdditionalInformation from "./components/AdditionalInformation";
import Contact from "./components/Contact";
function App() {
  return (
    <>
    <CustomCursor />
      <Navbar />
      

      <main>
        {/* 01 — HERO */}
        <Hero />
        
        <Marquee />
        {/* 02 — PROFESSIONAL SUMMARY */}
        <ProfessionalSummary />
        
       
        <Education />
        <Skills />
         <Internship />
         <Training />
         <TrainingStats />
         <Projects />
          <LiveProjects />
         <AdditionalInformation />
        <Contact />

        {/* NEXT SECTIONS WILL COME HERE */}
      </main>
    </>
  );
}

export default App;