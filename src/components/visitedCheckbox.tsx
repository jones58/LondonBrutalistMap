import { SVGProps } from "react";
const VisitedCheckbox = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
      }}
      viewBox="0 0 612 612"
      {...props}
    >
      <path
        d="M15.9 647.3V197.7c.3-1.4.7-2.7.9-4.1.5-5.3 1.4-10.6 3-15.7 4.4-14.1 12.8-24.9 26.4-31.2 7.7-3.6 15.8-5.4 24.3-6 1-.1 2-.3 3-.5h404c.8.1 1.7.3 2.5.3h34.5c7.7 0 15.3.6 22.8 2.6 18 4.8 30.1 15.9 35.7 33.8 2.4 7.6 3.4 15.4 3.4 23.4 0 .8.2 1.5.3 2.3v439.5c-.1.8-.4 1.7-.3 2.5 0 6.8-.7 13.5-2.6 20.1-4.2 15.1-13.1 26.1-27.8 32-6 2.4-12.2 3.7-18.6 4.4-2.3.2-4.5.6-6.8.9H72.5c-.8-.1-1.5-.4-2.3-.4-5.8-.6-11.6-1.3-17.2-2.9-14.9-4.4-25.8-13.4-31.7-27.9-2.5-6-3.8-12.3-4.5-18.8-.2-1.6-.6-3.2-.9-4.7Zm433.3-366.5c-67.6 67.5-134.9 134.8-202.4 202.3-34.8-34.9-69.5-69.5-103.8-103.8l-58.6 58.6 159 159c86.7-86.9 173.7-174 260.8-261.2-18.1-18.1-36.4-36.4-55-54.9Z"
        style={{
          fillRule: "nonzero",
        }}
        transform="translate(-8.183 -145.768) scale(1.05582)"
      />
      <path
        d="M449.2 280.8c18.6 18.5 36.9 36.7 55 54.7-87.1 87.3-174.1 174.3-260.8 261.2l-159-159 58.6-58.6 103.8 103.8c67.5-67.2 134.9-134.5 202.4-202.1Z"
        style={{
          fill: "#fff",
          fillRule: "nonzero",
        }}
        transform="translate(-8.183 -145.768) scale(1.05582)"
      />
    </svg>
  );
};

export default VisitedCheckbox;
