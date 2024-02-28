import Footer from "../component/Footer";
import HeroSection from "../component/HeroSection";
import Navbar from "../component/Navbar";
import SectionFive from "../component/SectionFive";
import SectionFour from "../component/SectionFour";
import SectionOne from "../component/SectionOne";
import SectionThree from "../component/SectionThree";
import SectionTwo from "../component/SectionTwo";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />
    </>
  );
};

export default HomePage;
