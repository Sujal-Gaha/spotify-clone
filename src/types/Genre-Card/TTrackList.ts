export type TTrackList = {
  id: number;
  title: {
    image: string;
    name: string;
    artist: string;
    featuring: string[];
  };
  album: {
    name: string;
  };
  dateAdded: string;
  duration: string;
};
