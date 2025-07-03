import React from "react"; 
import HeroSection from "../components/HeroSection"; 
import SectionHistoireMission from "../components/SectionHistoireMission";
import Departements from "../components/Departements";
import PresidentSpeech from "../components/PresidentSpeech";
import TemoignagesCarousel from "../components/Temoignages";
import Statistiques from "../components/Statistiques";
export default function HomePage (){
  return (
    <>
        <HeroSection />
        <PresidentSpeech />
        <SectionHistoireMission />
        <Departements />
        <Statistiques />
        <TemoignagesCarousel />
        
    </>
  );
}
