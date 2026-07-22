import Image from "next/image";
import type { FeaturedProject } from "@/types/portfolio";

type ProjectPreviewProps = {
  variant: FeaturedProject["preview"];
};

export function ProjectPreview({ variant }: ProjectPreviewProps) {
  const isScreenshotPreview = variant === "finance" || variant === "web";

  return (
    <div
      className={`project-preview project-preview-${variant}`}
      aria-hidden={isScreenshotPreview ? undefined : true}
    >
      {variant === "finance" ? (
        <ScreenshotPair
          primary="/images/projects/finance-operations-matrix.png"
          secondary="/images/projects/finance-portfolio-tracker.png"
          primaryAlt="2 On Finance operations matrix dashboard screenshot."
          secondaryAlt="2 On Finance portfolio tracker dashboard screenshot."
        />
      ) : null}

      {variant === "web" ? (
        <ScreenshotPair
          primary="/images/projects/web-solutions-dark-home.png"
          secondary="/images/projects/web-solutions-light-home.png"
          primaryAlt="2 On Web Solutions dark homepage screenshot."
          secondaryAlt="2 On Web Solutions light homepage screenshot."
        />
      ) : null}

      {variant === "contractor" ? <ContractorPreview /> : null}
      {variant === "archive" ? <ArchivePreview /> : null}
    </div>
  );
}

type ScreenshotPairProps = {
  primary: string;
  secondary: string;
  primaryAlt: string;
  secondaryAlt: string;
};

function ScreenshotPair({
  primary,
  secondary,
  primaryAlt,
  secondaryAlt,
}: ScreenshotPairProps) {
  return (
    <div className="project-screenshot-pair">
      <div className="project-shot project-shot-primary">
        <Image
          src={primary}
          alt={primaryAlt}
          fill
          sizes="(max-width: 600px) 96vw, (max-width: 900px) 88vw, 34vw"
        />
      </div>

      <div className="project-shot project-shot-secondary">
        <Image
          src={secondary}
          alt={secondaryAlt}
          fill
          sizes="(max-width: 600px) 96vw, (max-width: 900px) 88vw, 34vw"
        />
      </div>
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
