import { createFileRoute } from "@tanstack/react-router";
import { PageLoader } from "@/components/portfolio/PageLoader";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Showcase } from "@/components/portfolio/Showcase";
import { Clothing } from "@/components/portfolio/Clothing";
import { Skills } from "@/components/portfolio/Skills";
import { Booking } from "@/components/portfolio/Booking";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <PageLoader />
      <Nav />
      <main className="relative">
        <Hero />
        <About />
        <Showcase />
        <Clothing />
        <Skills />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
