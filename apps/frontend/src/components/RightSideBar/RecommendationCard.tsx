import { AddedQuark } from '@spotify-clone/libs/quarks/audio-controller-quark/added.quark';

const RecommendationCard = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="p-4 h-[420px] w-[420px]">
        <img
          src="/theIdol.png"
          alt="Album cover"
          width={388}
          height={388}
          className="rounded-xl"
        />
      </div>
      <div className="flex justify-between items-center h-[51px] w-[388px]">
        <div className="flex flex-col h-full w-full">
          <p className="text-white text-2xl">One Of The Girls</p>
          <p className="text-lessFocusColour text-sm">
            The Weeknd, JENNIE, Lily-Rose Depp
          </p>
        </div>
        <div className="h-full flex items-center">
          <AddedQuark />
        </div>
      </div>
    </div>
  );
};

export default RecommendationCard;
