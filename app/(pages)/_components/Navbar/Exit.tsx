interface ExitProps {
  width?: string;
  height?: string;
}

export default function Exit({ width = '100%', height = '100%' }: ExitProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <line
        x1="2"
        y1="21.0919"
        x2="21.0919"
        y2="1.99999"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="1.5"
        y1="-1.5"
        x2="28.5"
        y2="-1.5"
        transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 21.2129 23.2132)"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
