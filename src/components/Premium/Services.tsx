import ServicesProvided from "@/data/Premium/Services";

const Services = () => {
  return (
    <div className="h-[571px] w-full pt-[72px] pb-[75px] flex items-center justify-center">
      <div className="h-[424px] w-[1140px] flex flex-col items-center justify-between">
        <div>
          <h1 className="text-[39px] font-bold">The power of Premium</h1>
        </div>
        <div className="h-[303px] w-full grid grid-cols-4">
          {ServicesProvided.map((service, index) => (
            <div
              className="h-full w-full flex flex-col items-center gap-10"
              key={index}
            >
              <div>{service.icon}</div>
              <div className="flex flex-col gap-[11px] items-center">
                <p className="text-xl font-bold">{service.title}</p>
                <p className="w-52 text-center">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
