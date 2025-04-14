import React from "react";

const Alarm = ({ classNames }) => {
  return (
    <svg
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames}
    >
      <g filter="url(#filter0_d_493_102)">
        <rect x="2" y="1" width="50" height="50" rx="10" fill="#F7F7F7" />
        <path
          d="M30.8943 32.7789C33.379 32.4848 35.8202 31.8984 38.1675 31.032C36.1797 28.8301 35.0813 25.9679 35.0857 23.0014V22.0013C35.0857 19.8792 34.2427 17.844 32.7421 16.3435C31.2416 14.843 29.2065 14 27.0844 14C24.9623 14 22.9272 14.843 21.4267 16.3435C19.9261 17.844 19.0831 19.8792 19.0831 22.0013V23.0014C19.0872 25.968 17.9883 28.8303 16 31.032C18.311 31.8855 20.7474 32.4789 23.2745 32.7789M30.8943 32.7789C28.3632 33.0792 25.8056 33.0792 23.2745 32.7789M30.8943 32.7789C31.0865 33.3789 31.1343 34.0157 31.0338 34.6375C30.9333 35.2594 30.6874 35.8488 30.3161 36.3576C29.9448 36.8665 29.4585 37.2804 28.8969 37.5658C28.3354 37.8512 27.7143 38 27.0844 38C26.4545 38 25.8334 37.8512 25.2719 37.5658C24.7103 37.2804 24.224 36.8665 23.8527 36.3576C23.4814 35.8488 23.2355 35.2594 23.135 34.6375C23.0345 34.0157 23.0823 33.3789 23.2745 32.7789"
          stroke="#B5B5B5"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_493_102"
          x="0"
          y="0"
          width="54"
          height="54"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_493_102"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_493_102"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Alarm;
