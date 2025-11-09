import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SignaturePies } from "@/components/SignaturePies";
import { ExperienceSection } from "@/components/ExperienceSection";
import { StorySection } from "@/components/StorySection";
import { Testimonials } from "@/components/Testimonials";
import { ReservationForm } from "@/components/ReservationForm";
import { VisitSection } from "@/components/VisitSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-parchment">
      <Header />
      <main>
        <Hero />
        <SignaturePies />
        <ExperienceSection />
        <StorySection />
        <Testimonials />
        <ReservationForm />
        <VisitSection />
      </main>
      <Footer />
    </div>
  );
}
