type AnimatedCTAProps = {
  href: string;
  children: string;
  ariaLabel?: string;
};

function ArrowRightIcon() {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function AnimatedCTA({ href, children, ariaLabel }: AnimatedCTAProps) {
  return (
    <a className="animated-cta" href={href} aria-label={ariaLabel}>
      <span className="animated-cta__label">
        {children}
        <ArrowRightIcon />
      </span>
    </a>
  );
}
