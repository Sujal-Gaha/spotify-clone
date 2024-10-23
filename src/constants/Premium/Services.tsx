import FirstServiceIcon from "@/components/icons/premium/FirstService";
import FourthServiceIcon from "@/components/icons/premium/FourthService";
import SecondServiceIcon from "@/components/icons/premium/SecondService";
import ThirdServiceIcon from "@/components/icons/premium/ThirdService";

export type TServices = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ServicesProvided: TServices[] = [
  {
    icon: <FirstServiceIcon />,
    title: "Ad-free music listening",
    description: "Enjoy uninterrupted music.",
  },
  {
    icon: <SecondServiceIcon />,
    title: "Offline playback",
    description: "Save your data by listening offline.",
  },
  {
    icon: <ThirdServiceIcon />,
    title: "Play everywhere",
    description: "Listen on your speakers, TV, and other favourite devices.",
  },
  {
    icon: <FourthServiceIcon />,
    title: "Pay your way",
    description: "Prepay with Paytm, UPI, and more.",
  },
];

export default ServicesProvided;
