"use client";
import CourseInfoSection from "@/components/Cursoinfo";
import DarkLandingPageHeader from "../../components/DarkLandingPageHeader";
import Modulos from "@/components/Modulos";
import Pronto from "@/components/Pronto";
import Oferta from "@/components/Oferta";
import FAQSection from "@/components/faq";
import CallToActionSection from "@/components/Calltoaction";
import CurriculumSection from "@/components/Curriculo";

export default function Home() {
  return (
    <div className="flex flex-col justify-center bg-gray-900">
      <DarkLandingPageHeader />
      <CourseInfoSection />
      <Modulos />
      <Pronto />
      <CurriculumSection/>
      <Oferta />
      <FAQSection />
      <CallToActionSection />
      <footer>
        <p className="bg-gradient-to-r from-green-400 to-blue-500 text-center text-blue-950 py-4 ">
          © 2024 <b>MBCTEK IT Solution & EAD</b> - Todos os Direitos Reservados
          || Desenvolvido e Licenciado por{" "}
          <a href="https://ead.support" className="font-bold hover:underline">EAD Support</a>
        </p>
      </footer>
    </div>
  );
}
