"use client";

import useSongStore from "@/stores/songStore";

const PauseIcon = () => {
  const { setIsSongPlaying } = useSongStore();
  return (
    <svg
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => setIsSongPlaying(true)}
      className="cursor-pointer"
    >
      <rect y="0.203125" width="32" height="32" rx="16" fill="white" />
      <g clipPath="url(#clip0_0_1017)">
        <path
          d="M11 9.91611C10.9999 9.79317 11.0321 9.67236 11.0935 9.56584C11.1549 9.45932 11.2432 9.37084 11.3497 9.30931C11.4561 9.24778 11.5769 9.21537 11.6998 9.21533C11.8227 9.2153 11.9435 9.24764 12.05 9.30911L22.94 15.5971C23.0463 15.6586 23.1346 15.7469 23.1959 15.8533C23.2573 15.9597 23.2896 16.0803 23.2896 16.2031C23.2896 16.3259 23.2573 16.4466 23.1959 16.5529C23.1346 16.6593 23.0463 16.7476 22.94 16.8091L12.05 23.0971C11.9436 23.1585 11.8229 23.1909 11.7001 23.1909C11.5772 23.1909 11.4565 23.1586 11.3501 23.0972C11.2437 23.0358 11.1553 22.9474 11.0939 22.841C11.0324 22.7347 11 22.614 11 22.4911V9.91611Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_0_1017">
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

export default PauseIcon;
