import FirstServiceIcon from "@/icons/Premium/FirstService";
import FourthServiceIcon from "@/icons/Premium/FourthService";
import SecondServiceIcon from "@/icons/Premium/SecondService";
import ThirdServiceIcon from "@/icons/Premium/ThirdService";

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
