import { SVGProps } from "react";
const CloseButton = (props: SVGProps<SVGSVGElement>) => (
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
      d="M82.4 17.9c-41.3 0-64.6 21.4-64.6 65V533c0 40.8 20.9 62.2 62.2 62.2h452c41.3 0 62.2-20.3 62.2-62.2V83c0-42.6-20.9-65-63.5-65 .1-.1-448.4-.2-448.3-.1Z"
      style={{
        fillRule: "nonzero",
      }}
      transform="translate(-.082 -.585)"
    />
    <path
      d="m-345.6 482.1-180.2-180.2 180.2-180.2h118.9l-137.1 137.1h269.3V346h-268.4l136.3 136.3-119-.2Z"
      style={{
        fill: "#fff",
        fillRule: "nonzero",
      }}
      transform="translate(614.335 -.585)"
    />
  </svg>
);
export default CloseButton;
