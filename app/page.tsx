import { HeroSection } from "@/components/Home/MainContent/HeroSection";
import { AboutSection } from "../components/Home/MainContent/AboutSection";
import { ServicesSection } from "@/components/Home/MainContent/ServicesSection";
import { ContactSection } from "@/components/Home/MainContent/ContactSection";


export default function HomePage() {
  
  return (
    <div className="flex flex-col items-center w-full md:mt-32 mt-28   text-black">
      <HeroSection/>
      <AboutSection/>
      <ServicesSection/>
      <ContactSection/>
      <div className="h-32"></div>
      <div id="top" className="absolute bg-transparent h-4 w-4 top-0 z-[999]"></div>
    </div>
  );
}