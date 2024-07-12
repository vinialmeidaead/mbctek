"use client"
import CourseInfoSection from "@/components/Cursoinfo";
import DarkLandingPageHeader from "../../components/DarkLandingPageHeader";
import Modulos from "@/components/Modulos";
import Pronto from "@/components/Pronto";
import Oferta from "@/components/Oferta";
import FAQSection from "@/components/faq";
import CallToActionSection from "@/components/Calltoaction";

export default function Home() {
  return (
    <div className="flex flex-col justify-center bg-gray-900">
      <DarkLandingPageHeader />
      <CourseInfoSection/>
      <Modulos/>
      <Pronto/>
      <Oferta/>
      <FAQSection/>
      <CallToActionSection/>
    </div>
  );
}