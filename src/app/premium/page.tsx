import Banner from "@/components/Premium/Banner";
import FooterPremium from "@/components/Premium/FooterPremium";
import Navbar from "@/components/Premium/Navbar";
import Plan from "@/components/Premium/Plan";
import Services from "@/components/Premium/Services";

const Premium = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <Plan />
      <FooterPremium />
    </>
  );
};

export default Premium;
