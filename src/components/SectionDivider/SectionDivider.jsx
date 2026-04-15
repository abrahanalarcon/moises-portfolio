export default function SectionDivider() {
  return (
    <div style={{ lineHeight: 0 }}>
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        style={{ width: "100%", height: "100px", display: "block" }}
      >
        <path
          d="
            M0,40 
            L800,40 
            C880,40 900,80 1000,80 
            L1440,80 
            L1440,100 
            L0,100 
            Z
          "
          fill="#e5e5e5"
        />
      </svg>
    </div>
  );
}