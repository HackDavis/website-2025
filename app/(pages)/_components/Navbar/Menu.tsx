interface MenuProps {
  width?: string;
  height?: string;
}

export default function Menu({ width = '100%', height = '100%' }: MenuProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 30 23"
      fill="none"
    >
      <line
        x1="1.5"
        y1="1.5"
        x2="28.5"
        y2="1.5"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="1.5"
        y1="11.5"
        x2="28.5"
        y2="11.5"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="1.5"
        y1="21.5"
        x2="28.5"
        y2="21.5"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
