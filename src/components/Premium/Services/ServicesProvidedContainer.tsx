import { TServices } from "@/constants/Premium/Services";
import Service from "./Service";

interface IServices {
  servicesProvided: TServices[];
}

const ServicesProvidedContainer = ({ servicesProvided }: IServices) => {
  return (
    <div className="h-[303px] w-full grid grid-cols-4">
      {servicesProvided.map((service, index) => (
        <Service service={service} key={index} />
      ))}
    </div>
  );
};

export default ServicesProvidedContainer;
