import {
  PremiumBanner,
  PremiumFooter,
  PremiumNavbar,
  PremiumPlan,
  PremiumServices,
} from '@spotify-clone/libs/crystals';

export const PremiumPage = () => {
  return (
    <>
      <PremiumNavbar />
      <PremiumBanner />
      <PremiumServices />
      <PremiumPlan />
      <PremiumFooter />
    </>
  );
};
