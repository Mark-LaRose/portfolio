import type { FeaturedProject } from "@/types/portfolio";

type ProjectPreviewProps = {
  variant: FeaturedProject["preview"];
};

export function ProjectPreview({ variant }: ProjectPreviewProps) {
  return (
    <div className={`project-preview project-preview-${variant}`} aria-hidden="true">
      <div className="preview-topbar">
        <span />
        <span />
        <span />
      </div>
      {variant === "finance" ? <FinancePreview /> : null}
      {variant === "web" ? <WebPreview /> : null}
      {variant === "contractor" ? <ContractorPreview /> : null}
      {variant === "archive" ? <ArchivePreview /> : null}
    </div>
  );
}

function FinancePreview() {
  return (
    <div className="preview-grid finance-grid">
      <div className="preview-panel wide">
        <span className="tiny-label">Portfolio</span>
        <div className="chart-line" />
      </div>
      <div className="preview-panel">
        <span className="tiny-label">Calendar</span>
        <div className="mini-bars">
          <i />
          <i />
          <i />
          <i />
        </div>
      </div>
      <div className="preview-panel">
        <span className="tiny-label">Notes</span>
        <b />
        <b />
        <b />
      </div>
    </div>
  );
}

function WebPreview() {
  return (
    <div className="preview-grid web-grid">
      <div className="wire-hero" />
      <div className="wire-column">
        <span />
        <span />
        <span />
      </div>
      <div className="wire-card" />
      <div className="wire-card accent" />
    </div>
  );
}

function ContractorPreview() {
  return (
    <div className="measurement-board">
      <div className="measure-line horizontal" />
      <div className="measure-line vertical" />
      <div className="panel-outline one" />
      <div className="panel-outline two" />
      <div className="calc-chip">LOAD</div>
      <div className="calc-chip secondary">EST</div>
    </div>
  );
}

function ArchivePreview() {
  return (
    <div className="archive-preview">
      <div className="font-sample">Aa</div>
      <div className="swatches">
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
