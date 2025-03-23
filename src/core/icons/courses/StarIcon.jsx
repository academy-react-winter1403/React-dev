import React from "react";
import storeFill from "../../../assets/pics/star/star-fill.png";

const StarIcon = ({ repeatNum }) => {
  const repeat = repeatNum * 14;

  return (
    <div className="flex mr-2 relative">
      <svg
        width="14"
        height="14"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.13162 2.47847C8.16158 2.40539 8.2126 2.34288 8.27819 2.29888C8.34378 2.25488 8.42097 2.23138 8.49995 2.23138C8.57893 2.23138 8.65613 2.25488 8.72172 2.29888C8.78731 2.34288 8.83833 2.40539 8.86829 2.47847L10.3735 6.09876C10.4017 6.1665 10.448 6.22516 10.5074 6.26827C10.5667 6.31139 10.6368 6.33729 10.71 6.34313L14.6185 6.65622C14.972 6.68455 15.1151 7.12584 14.8459 7.35605L11.8681 9.90747C11.8124 9.95506 11.771 10.0171 11.7482 10.0866C11.7255 10.1562 11.7224 10.2307 11.7392 10.302L12.6494 14.1164C12.6677 14.1929 12.6629 14.2731 12.6356 14.3469C12.6083 14.4208 12.5598 14.4848 12.4961 14.5311C12.4324 14.5773 12.3565 14.6036 12.2779 14.6067C12.1993 14.6098 12.1215 14.5895 12.0544 14.5485L8.7075 12.5049C8.645 12.4667 8.57319 12.4465 8.49995 12.4465C8.42672 12.4465 8.3549 12.4667 8.29241 12.5049L4.94554 14.5492C4.87843 14.5903 4.80065 14.6105 4.72203 14.6074C4.6434 14.6043 4.56746 14.578 4.5038 14.5318C4.44013 14.4855 4.39159 14.4215 4.36432 14.3477C4.33704 14.2739 4.33224 14.1936 4.35054 14.1171L5.26075 10.302C5.27763 10.2308 5.27452 10.1562 5.25178 10.0866C5.22903 10.017 5.18753 9.95501 5.13183 9.90747L2.154 7.35605C2.09403 7.30493 2.05058 7.23717 2.02916 7.16134C2.00773 7.08552 2.00929 7.00503 2.03364 6.93009C2.05799 6.85515 2.10403 6.78913 2.16593 6.74037C2.22783 6.69162 2.30281 6.66233 2.38137 6.65622L6.28995 6.34313C6.36309 6.33729 6.43319 6.31139 6.49256 6.26827C6.55192 6.22516 6.59824 6.1665 6.62641 6.09876L8.13162 2.47847Z"
          stroke="#FFC700"
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <svg
        width="14"
        height="14"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.13162 2.47847C8.16158 2.40539 8.2126 2.34288 8.27819 2.29888C8.34378 2.25488 8.42097 2.23138 8.49995 2.23138C8.57893 2.23138 8.65613 2.25488 8.72172 2.29888C8.78731 2.34288 8.83833 2.40539 8.86829 2.47847L10.3735 6.09876C10.4017 6.1665 10.448 6.22516 10.5074 6.26827C10.5667 6.31139 10.6368 6.33729 10.71 6.34313L14.6185 6.65622C14.972 6.68455 15.1151 7.12584 14.8459 7.35605L11.8681 9.90747C11.8124 9.95506 11.771 10.0171 11.7482 10.0866C11.7255 10.1562 11.7224 10.2307 11.7392 10.302L12.6494 14.1164C12.6677 14.1929 12.6629 14.2731 12.6356 14.3469C12.6083 14.4208 12.5598 14.4848 12.4961 14.5311C12.4324 14.5773 12.3565 14.6036 12.2779 14.6067C12.1993 14.6098 12.1215 14.5895 12.0544 14.5485L8.7075 12.5049C8.645 12.4667 8.57319 12.4465 8.49995 12.4465C8.42672 12.4465 8.3549 12.4667 8.29241 12.5049L4.94554 14.5492C4.87843 14.5903 4.80065 14.6105 4.72203 14.6074C4.6434 14.6043 4.56746 14.578 4.5038 14.5318C4.44013 14.4855 4.39159 14.4215 4.36432 14.3477C4.33704 14.2739 4.33224 14.1936 4.35054 14.1171L5.26075 10.302C5.27763 10.2308 5.27452 10.1562 5.25178 10.0866C5.22903 10.017 5.18753 9.95501 5.13183 9.90747L2.154 7.35605C2.09403 7.30493 2.05058 7.23717 2.02916 7.16134C2.00773 7.08552 2.00929 7.00503 2.03364 6.93009C2.05799 6.85515 2.10403 6.78913 2.16593 6.74037C2.22783 6.69162 2.30281 6.66233 2.38137 6.65622L6.28995 6.34313C6.36309 6.33729 6.43319 6.31139 6.49256 6.26827C6.55192 6.22516 6.59824 6.1665 6.62641 6.09876L8.13162 2.47847Z"
          stroke="#FFC700"
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <svg
        width="14"
        height="14"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.13162 2.47847C8.16158 2.40539 8.2126 2.34288 8.27819 2.29888C8.34378 2.25488 8.42097 2.23138 8.49995 2.23138C8.57893 2.23138 8.65613 2.25488 8.72172 2.29888C8.78731 2.34288 8.83833 2.40539 8.86829 2.47847L10.3735 6.09876C10.4017 6.1665 10.448 6.22516 10.5074 6.26827C10.5667 6.31139 10.6368 6.33729 10.71 6.34313L14.6185 6.65622C14.972 6.68455 15.1151 7.12584 14.8459 7.35605L11.8681 9.90747C11.8124 9.95506 11.771 10.0171 11.7482 10.0866C11.7255 10.1562 11.7224 10.2307 11.7392 10.302L12.6494 14.1164C12.6677 14.1929 12.6629 14.2731 12.6356 14.3469C12.6083 14.4208 12.5598 14.4848 12.4961 14.5311C12.4324 14.5773 12.3565 14.6036 12.2779 14.6067C12.1993 14.6098 12.1215 14.5895 12.0544 14.5485L8.7075 12.5049C8.645 12.4667 8.57319 12.4465 8.49995 12.4465C8.42672 12.4465 8.3549 12.4667 8.29241 12.5049L4.94554 14.5492C4.87843 14.5903 4.80065 14.6105 4.72203 14.6074C4.6434 14.6043 4.56746 14.578 4.5038 14.5318C4.44013 14.4855 4.39159 14.4215 4.36432 14.3477C4.33704 14.2739 4.33224 14.1936 4.35054 14.1171L5.26075 10.302C5.27763 10.2308 5.27452 10.1562 5.25178 10.0866C5.22903 10.017 5.18753 9.95501 5.13183 9.90747L2.154 7.35605C2.09403 7.30493 2.05058 7.23717 2.02916 7.16134C2.00773 7.08552 2.00929 7.00503 2.03364 6.93009C2.05799 6.85515 2.10403 6.78913 2.16593 6.74037C2.22783 6.69162 2.30281 6.66233 2.38137 6.65622L6.28995 6.34313C6.36309 6.33729 6.43319 6.31139 6.49256 6.26827C6.55192 6.22516 6.59824 6.1665 6.62641 6.09876L8.13162 2.47847Z"
          stroke="#FFC700"
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <svg
        width="14"
        height="14"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.13162 2.47847C8.16158 2.40539 8.2126 2.34288 8.27819 2.29888C8.34378 2.25488 8.42097 2.23138 8.49995 2.23138C8.57893 2.23138 8.65613 2.25488 8.72172 2.29888C8.78731 2.34288 8.83833 2.40539 8.86829 2.47847L10.3735 6.09876C10.4017 6.1665 10.448 6.22516 10.5074 6.26827C10.5667 6.31139 10.6368 6.33729 10.71 6.34313L14.6185 6.65622C14.972 6.68455 15.1151 7.12584 14.8459 7.35605L11.8681 9.90747C11.8124 9.95506 11.771 10.0171 11.7482 10.0866C11.7255 10.1562 11.7224 10.2307 11.7392 10.302L12.6494 14.1164C12.6677 14.1929 12.6629 14.2731 12.6356 14.3469C12.6083 14.4208 12.5598 14.4848 12.4961 14.5311C12.4324 14.5773 12.3565 14.6036 12.2779 14.6067C12.1993 14.6098 12.1215 14.5895 12.0544 14.5485L8.7075 12.5049C8.645 12.4667 8.57319 12.4465 8.49995 12.4465C8.42672 12.4465 8.3549 12.4667 8.29241 12.5049L4.94554 14.5492C4.87843 14.5903 4.80065 14.6105 4.72203 14.6074C4.6434 14.6043 4.56746 14.578 4.5038 14.5318C4.44013 14.4855 4.39159 14.4215 4.36432 14.3477C4.33704 14.2739 4.33224 14.1936 4.35054 14.1171L5.26075 10.302C5.27763 10.2308 5.27452 10.1562 5.25178 10.0866C5.22903 10.017 5.18753 9.95501 5.13183 9.90747L2.154 7.35605C2.09403 7.30493 2.05058 7.23717 2.02916 7.16134C2.00773 7.08552 2.00929 7.00503 2.03364 6.93009C2.05799 6.85515 2.10403 6.78913 2.16593 6.74037C2.22783 6.69162 2.30281 6.66233 2.38137 6.65622L6.28995 6.34313C6.36309 6.33729 6.43319 6.31139 6.49256 6.26827C6.55192 6.22516 6.59824 6.1665 6.62641 6.09876L8.13162 2.47847Z"
          stroke="#FFC700"
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <svg
        width="14"
        height="14"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.13162 2.47847C8.16158 2.40539 8.2126 2.34288 8.27819 2.29888C8.34378 2.25488 8.42097 2.23138 8.49995 2.23138C8.57893 2.23138 8.65613 2.25488 8.72172 2.29888C8.78731 2.34288 8.83833 2.40539 8.86829 2.47847L10.3735 6.09876C10.4017 6.1665 10.448 6.22516 10.5074 6.26827C10.5667 6.31139 10.6368 6.33729 10.71 6.34313L14.6185 6.65622C14.972 6.68455 15.1151 7.12584 14.8459 7.35605L11.8681 9.90747C11.8124 9.95506 11.771 10.0171 11.7482 10.0866C11.7255 10.1562 11.7224 10.2307 11.7392 10.302L12.6494 14.1164C12.6677 14.1929 12.6629 14.2731 12.6356 14.3469C12.6083 14.4208 12.5598 14.4848 12.4961 14.5311C12.4324 14.5773 12.3565 14.6036 12.2779 14.6067C12.1993 14.6098 12.1215 14.5895 12.0544 14.5485L8.7075 12.5049C8.645 12.4667 8.57319 12.4465 8.49995 12.4465C8.42672 12.4465 8.3549 12.4667 8.29241 12.5049L4.94554 14.5492C4.87843 14.5903 4.80065 14.6105 4.72203 14.6074C4.6434 14.6043 4.56746 14.578 4.5038 14.5318C4.44013 14.4855 4.39159 14.4215 4.36432 14.3477C4.33704 14.2739 4.33224 14.1936 4.35054 14.1171L5.26075 10.302C5.27763 10.2308 5.27452 10.1562 5.25178 10.0866C5.22903 10.017 5.18753 9.95501 5.13183 9.90747L2.154 7.35605C2.09403 7.30493 2.05058 7.23717 2.02916 7.16134C2.00773 7.08552 2.00929 7.00503 2.03364 6.93009C2.05799 6.85515 2.10403 6.78913 2.16593 6.74037C2.22783 6.69162 2.30281 6.66233 2.38137 6.65622L6.28995 6.34313C6.36309 6.33729 6.43319 6.31139 6.49256 6.26827C6.55192 6.22516 6.59824 6.1665 6.62641 6.09876L8.13162 2.47847Z"
          stroke="#FFC700"
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <div
        className="star-fill h-[18px] absolute top-[0] left-[0]"
        style={{
          width: repeat + "px",
          backgroundImage: "url(" + storeFill + ")",
          backgroundRepeat: "repeat-x",
          backgroundSize: "14px 14px"
        }}
      ></div>
    </div>
  );
};

export default StarIcon;
