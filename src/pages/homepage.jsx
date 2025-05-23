import React from "react"; 
import HeroSection from "../components/HeroSection"; 
import SectionHistoireMission from "../components/SectionHistoireMission";
import Departements from "../components/Departements";
export default function HomePage (){
  return (
    <>
        <HeroSection />
        <SectionHistoireMission />
        <Departements />
        {/* Ajoutez d'autres sections ou composants ici si nécessaire */}
    </>
  );
}
