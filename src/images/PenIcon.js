import * as React from "react";

const PenIcon = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    viewBox="0,0,24,24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)" fillRule="evenodd" clipRule="evenodd" fill="#000">
      <path d="m5.282 14.475 9.193-9.193a1.5 1.5 0 0 1 2.121 0l2.122 2.122a1.5 1.5 0 0 1 0 2.121l-9.193 9.193a1.5 1.5 0 0 1-2.121 0l-2.122-2.122a1.5 1.5 0 0 1 0-2.121Z" />
      <path
        opacity={0.3}
        d="m3.515 18.364.707-.707a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 0 1 0 .707l-.707.707a1.5 1.5 0 1 1-2.121-2.121Zm14.849-14.85a1.5 1.5 0 1 1 2.121 2.122l-.707.707a.5.5 0 0 1-.707 0L17.657 4.93a.5.5 0 0 1 0-.707l.707-.707Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default PenIcon;
