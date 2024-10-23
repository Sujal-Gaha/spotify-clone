import ServicesProvided from "@/constants/Premium/Services";
import ServicesProvidedContainer from "./ServicesProvidedContainer";

const Services = () => {
  return (
    <div className="h-[571px] w-full pt-[72px] pb-[75px] flex items-center justify-center">
      <div className="h-[424px] w-[1140px] flex flex-col items-center justify-between">
        <div>
          <h1 className="text-[39px] font-bold">The power of Premium</h1>
        </div>
        <ServicesProvidedContainer servicesProvided={ServicesProvided} />
      </div>
    </div>
  );
};

export default Services;
