export function BlueprintFlowOverlay() {
  const signalPath =
    "M 303 333 " +
    "L 370 333 " +
    "C 372 335 388 340 390 352 " +
    "L 395 465 " ;

  return (
    <svg
      className="hero-blueprint-signal"
      viewBox="0 0 1672 942"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <filter
          id="hero-signal-glow"
          x="-80%"
          y="-80%"
          width="260%"
          height="260%"
        >
          <feGaussianBlur stdDeviation="4" result="blur" />

          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <path
          id="hero-blueprint-signal-path"
          d={signalPath}
        />
      </defs>

      <use
        href="#hero-blueprint-signal-path"
        className="hero-blueprint-signal-path"
      />

      <use
        href="#hero-blueprint-signal-path"
        className="hero-blueprint-signal-rail"
      />

      <g filter="url(#hero-signal-glow)">
        <g className="hero-blueprint-signal-particle">
          <circle
            className="hero-blueprint-signal-core"
            cx="0"
            cy="0"
            r="5"
          />
        </g>

        <animateMotion
          dur="15s"
          repeatCount="indefinite"
          keyPoints="0;1;1"
          keyTimes="0;0.74;1"
          calcMode="linear"
          rotate="auto"
        >
          <mpath href="#hero-blueprint-signal-path" />
        </animateMotion>
      </g>
    </svg>
  );
}