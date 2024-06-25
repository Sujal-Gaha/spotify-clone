import { TServices } from "@/constants/Premium/Services";

interface IService {
  service: TServices;
}

const Service = ({ service }: IService) => {
  return (
    <div className="h-full w-full flex flex-col items-center gap-10">
      <div>{service.icon}</div>
      <div className="flex flex-col gap-[11px] items-center">
        <p className="text-xl font-bold">{service.title}</p>
        <p className="w-52 text-center">{service.description}</p>
      </div>
    </div>
  );
};

export default Service;
