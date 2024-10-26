export type TTrackList = {
  id: number;
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
};

export type Tfeaturing = {
  name: string;
};
