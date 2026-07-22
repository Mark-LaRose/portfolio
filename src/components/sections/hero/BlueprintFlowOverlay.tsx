type SignalTiming = {
  moveStart: number;
  moveEnd: number;
};

type SignalPath = SignalTiming & {
  id: string;
  d: string;
  begin: string;
};

const cycleDuration = "10.8s";
const fadeWindow = 0.03;

function motionKeyTimes({ moveStart, moveEnd }: SignalTiming) {
  if (moveStart === 0) {
    return `0;${moveEnd};1`;
  }

  return `0;${moveStart};${moveEnd};1`;
}

function motionKeyPoints({ moveStart }: SignalTiming) {
  if (moveStart === 0) {
    return "0;1;1";
  }

  return "0;0;1;1";
}

function opacityKeyTimes({ moveStart, moveEnd }: SignalTiming) {
  const visibleStart = Math.min(moveStart + fadeWindow, moveEnd);
  const visibleEnd = Math.max(moveEnd - fadeWindow, moveStart);

  if (moveStart === 0) {
    return `0;${visibleStart};${visibleEnd};${moveEnd};1`;
  }

  return `0;${moveStart};${visibleStart};${visibleEnd};${moveEnd};1`;
}

function opacityValues({ moveStart }: SignalTiming) {
  if (moveStart === 0) {
    return "0;1;1;0;0";
  }

  return "0;0;1;1;0;0";
}

export function BlueprintFlowOverlay() {
  const signalPath =
    "M 303 333 " +
    "L 370 333 " +
    "C 372 335 388 340 390 352 " +
    "L 395 465 " ;

  const signalPaths: SignalPath[] = [
    {
      id: "hero-blueprint-signal-path",
      d: signalPath,
      begin: "0s",
      moveStart: 0,
      moveEnd: 0.15,
    },
    {
      id: "hero-blueprint-signal-path-left-middle",
      d:
        "M 303 455 " +
        "L 372 455 " +
        "C 384 455 393 459 395 465",
      begin: "0s",
      moveStart: 0.19,
      moveEnd: 0.34,
    },
    {
      id: "hero-blueprint-signal-path-left-bottom",
      d:
        "M 303 565 " +
        "L 370 565 " +
        "C 388 565 394 538 395 465",
      begin: "0s",
      moveStart: 0.38,
      moveEnd: 0.53,
    },
    {
      id: "hero-blueprint-signal-path-right-top",
      d:
        "M 1248 333 " +
        "C 1188 333 1152 365 1120 416 " +
        "C 1085 448 1032 453 967 453",
      begin: "1.4s",
      moveStart: 0,
      moveEnd: 0.15,
    },
    {
      id: "hero-blueprint-signal-path-right-middle",
      d:
        "M 1248 455 " +
        "L 1062 455 " +
        "C 1028 455 994 454 967 453",
      begin: "1.4s",
      moveStart: 0.19,
      moveEnd: 0.34,
    },
    {
      id: "hero-blueprint-signal-path-right-bottom",
      d:
        "M 1248 565 " +
        "C 1188 565 1150 538 1118 494 " +
        "C 1082 462 1030 454 967 453",
      begin: "1.4s",
      moveStart: 0.38,
      moveEnd: 0.53,
    },
  ];

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

        {signalPaths.map((path) => (
          <path
            key={path.id}
            id={path.id}
            d={path.d}
          />
        ))}
      </defs>

      {signalPaths.map((path) => (
        <use
          key={`${path.id}-path`}
          href={`#${path.id}`}
          className="hero-blueprint-signal-path"
        />
      ))}

      {signalPaths.map((path) => (
        <use
          key={`${path.id}-rail`}
          href={`#${path.id}`}
          className="hero-blueprint-signal-rail"
          style={{ animationDelay: path.begin }}
        />
      ))}

      {signalPaths.map((path) => (
        <g key={`${path.id}-particle`} filter="url(#hero-signal-glow)">
          <g className="hero-blueprint-signal-particle">
            <circle
              className="hero-blueprint-signal-core"
              cx="0"
              cy="0"
              r="5"
            />

            <animate
              attributeName="opacity"
              dur={cycleDuration}
              begin={path.begin}
              repeatCount="indefinite"
              keyTimes={opacityKeyTimes(path)}
              values={opacityValues(path)}
              calcMode="linear"
            />
          </g>

          <animateMotion
            dur={cycleDuration}
            begin={path.begin}
            repeatCount="indefinite"
            keyPoints={motionKeyPoints(path)}
            keyTimes={motionKeyTimes(path)}
            calcMode="linear"
            rotate="auto"
          >
            <mpath href={`#${path.id}`} />
          </animateMotion>
        </g>
      ))}
    </svg>
  );
}
