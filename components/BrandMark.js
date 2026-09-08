export default function BrandMark({ fill = "#0F241F", className }) {
  return (
    <svg className={className} viewBox="0 0 64 68" aria-hidden="true">
      <path
        d="M4 60V28A28 28 0 0 1 60 28v32H4Zm16 0V32a12 12 0 0 1 24 0v28H20Z"
        fill={fill}
        fillRule="evenodd"
      />
      <rect x="0" y="63" width="64" height="5" fill="#C79A5C" />
    </svg>
  );
}
