import {
  PremiumBanner,
  PremiumFooter,
  PremiumNavbar,
  PremiumPlan,
  PremiumServices,
} from '@spotify-clone/libs/crystals';

export const PremiumPage = () => {
  return (
    <div className="w-full">
      <PremiumNavbar />
      <PremiumBanner />
      <PremiumServices />
      <PremiumPlan />
      <PremiumFooter />
    </div>
  );
};
