import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Rooms from "@/components/Rooms";
import Pricing from "@/components/Pricing";
import Gallery from "@/components/Gallery";
import Map from "@/components/Map";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Cinematic preloader screen */}
      <Loader />

      {/* Premium page layout container */}
      <div className="relative flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          {/* Cinematic fullscreen landing */}
          <Hero />

          {/* Core resort descriptions & cards */}
          <About />

          {/* Rooms showcase & specifications */}
          <Rooms />

          {/* Seasonal rates comparison */}
          <Pricing />

          {/* Immersive gallery & lightbox */}
          <Gallery />

          {/* Interactive Google Map details */}
          <Map />

          {/* Contacts info & floating widgets */}
          <Contacts />
        </main>

        {/* Localized brand footer */}
        <Footer />
      </div>
    </>
  );
}
