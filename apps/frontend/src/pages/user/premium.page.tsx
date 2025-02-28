import Banner from '../../components/Premium/Banner';
import { Services } from '../../components/Premium/Services/Services';
import { Plan } from '../../components/Premium/Plan/Plan';
import { FooterPremium } from '../../components/Premium/FooterPremium';
import { PremiumNavbar } from '../../components/Premium/Navbar';

export const PremiumPage = () => {
  return (
    <>
      <PremiumNavbar />
      <Banner />
      <Services />
      <Plan />
      <FooterPremium />
    </>
  );
};
