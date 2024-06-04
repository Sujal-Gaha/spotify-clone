type TTrackList = {
  "#": number;
  title: {
    image: string;
    name: string;
    artist: string;
    featuring: Tfeaturing[];
  };
  album: {
    name: string;
  };
  dateAdded: string;
  duration: string;
  isHovering: boolean;
};

type Tfeaturing = {
  name: string;
};

export default TTrackList;
