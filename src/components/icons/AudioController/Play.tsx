"use client";

import useSongStore from "@/stores/songStore";

const PlayIcon = () => {
  const { setIsSongPlaying } = useSongStore();
  return (
    <svg
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => setIsSongPlaying(false)}
      className="cursor-pointer"
    >
      <rect y="0.203125" width="32" height="32" rx="16" fill="white" />
      <g clip-path="url(#clip0_0_1745)">
        <path
          d="M10.7 9.20312C10.5143 9.20312 10.3363 9.27687 10.205 9.40815C10.0737 9.53943 10 9.71747 10 9.90313V22.5031C10 22.6888 10.0737 22.8668 10.205 22.9981C10.3363 23.1294 10.5143 23.2031 10.7 23.2031H13.3C13.4857 23.2031 13.6637 23.1294 13.795 22.9981C13.9263 22.8668 14 22.6888 14 22.5031V9.90313C14 9.71747 13.9263 9.53943 13.795 9.40815C13.6637 9.27687 13.4857 9.20312 13.3 9.20312H10.7ZM18.7 9.20312C18.5143 9.20312 18.3363 9.27687 18.205 9.40815C18.0738 9.53943 18 9.71747 18 9.90313V22.5031C18 22.6888 18.0738 22.8668 18.205 22.9981C18.3363 23.1294 18.5143 23.2031 18.7 23.2031H21.3C21.4857 23.2031 21.6637 23.1294 21.795 22.9981C21.9262 22.8668 22 22.6888 22 22.5031V9.90313C22 9.71747 21.9262 9.53943 21.795 9.40815C21.6637 9.27687 21.4857 9.20312 21.3 9.20312H18.7Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_0_1745">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(8 8.20312)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PlayIcon;
