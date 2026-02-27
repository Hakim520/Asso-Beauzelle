function OrnamentDivider() {
  return (
    <div className="ornament-divider bg-light" aria-hidden="true">
      <svg
        viewBox="0 0 360 40"
        className="ornament-divider-svg"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        {/* lignes extérieures */}
        <line x1="10" y1="20" x2="105" y2="20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="255" y1="20" x2="350" y2="20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />

        {/* points extérieurs */}
        <circle cx="6" cy="20" r="3" fill="currentColor" />
        <circle cx="354" cy="20" r="3" fill="currentColor" />

        {/* petits losanges */}
        <path d="M112 20l6-6 6 6-6 6-6-6Z" fill="currentColor" />
        <path d="M236 20l6-6 6 6-6 6-6-6Z" fill="currentColor" />

        {/* arabesque gauche */}
        <path
          d="M126 20c8 0 11-10 20-10 7 0 11 4 11 10s-4 10-11 10c-9 0-12-10-20-10Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* arabesque droite */}
        <path
          d="M234 20c-8 0-11-10-20-10-7 0-11 4-11 10s4 10 11 10c9 0 12-10 20-10Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />



        {/* motif central */}
        {/* <path
          d="M170 20c0-6 4-10 10-10s10 4 10 10"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M170 20c0 6 4 10 10 10s10-4 10-10"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="180" cy="20" r="2.5" fill="currentColor" /> */}


         <div className="ornament-divider" aria-hidden="true">
      <div className="ornament-line"></div>
      <span className="ornament-text">Événements</span>
      <div className="ornament-line"></div>
    </div>
      </svg>
    </div>
  );
}

export default OrnamentDivider;

