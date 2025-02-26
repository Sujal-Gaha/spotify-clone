const Merch = () => {
  type TMerch = {
    image: string;
    name: string;
  };

  const merchandises: TMerch[] = [
    {
      image: '/albumCoverRight.png',
      name: 'The Highlights (Deluxe) Digital Album',
    },
    {
      image: '/albumCoverRight.png',
      name: 'Live at SoFi Stadium Clean Digital Album',
    },
    {
      image: '/albumCoverRight.png',
      name: 'Live at SoFi Stadium Digital Album',
    },
  ];

  return (
    <div className="bg-smallerSectionColour w-[388px] h-[265px] pt-3 px-2 pb-0 flex flex-col justify-center rounded-xl">
      <div className="w-full h-[22px] flex items-center">
        <span className="text-white px-2 font-bold">Merch</span>
      </div>
      <div className="w-full h-[216px] flex flex-col py-3">
        {merchandises.map((merch, index) => {
          return (
            <div
              className="w-full h-16 flex items-center justify-start gap-3 pl-2 rounded-lg hover:bg-hoverSmallerSectionColour ease-in-out duration-[400ms] cursor-pointer"
              key={index}
            >
              <img
                alt={`merch ${index}`}
                src={merch.image}
                className="w-12 h-12"
              />
              <p className="text-white font-medium w-[276px] truncate hover:underline">
                {merch.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Merch;
