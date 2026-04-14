import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BestSellers from "@/components/BestSellers";
import Categories from "@/components/Categories";
import BrandBenefits from "@/components/BrandBenefits";
import NewArrivals from "@/components/NewArrivals";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BestSellers />
      <Categories />
      <BrandBenefits />
      <NewArrivals />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
