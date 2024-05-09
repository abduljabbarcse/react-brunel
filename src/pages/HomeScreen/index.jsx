import HeroSection from "../../components/Herosection";
import Carousel from "../../components/Carousel";
import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Carousel />
      <FAQ />
      <Footer />
    </>
  );
}

export default Home;
