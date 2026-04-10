import Navigation from "./components/Navigation";
import BackgroundTextures from "./components/BackgroundTextures";
import Hero from "./components/Hero";
import Scripture from "./components/Scripture";
import Speakers from "./components/Speakers";
import RegistrationForm from "./components/RegistrationForm";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div style={{ position: "relative" }}>
      <BackgroundTextures />
      <Navigation />
      <main style={{ position: "relative", zIndex: 2 }}>
        <Hero />
        <Scripture />
        <Speakers />
        <RegistrationForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
