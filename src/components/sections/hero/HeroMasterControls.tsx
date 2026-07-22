// ============================================================
// Hero free-position responsive controls
// ============================================================
// Positive translateX moves right. Negative translateX moves left.
// Positive translateY moves down. Negative translateY moves up.
//
// Every finished breakpoint below is explicit. No breakpoint inherits from
// another finished breakpoint, and every emitted CSS variable is consumed by
// the Hero structural styles in globals.css.

type BreakpointId =
  | "smallPhone"
  | "largePhone"
  | "smallTabletPortrait"
  | "largeTabletPortrait"
  | "smallTabletLandscape"
  | "tabletLandscape"
  | "desktop"
  | "largeDesktop";

type SectionControls = {
  maxWidth: string;
  minHeight: string;
  paddingTop: string;
  paddingBottom: string;
  compositionHeight: string;
};

type StageControls = {
  left: string;
  top: string;
  width: string;
  height: string;
  translateX: string;
  translateY: string;
  zIndex: number;
};

type RightStageControls = StageControls & {
  overflow: "visible" | "hidden" | "clip";
};

type TextElementControls = {
  left: string;
  top: string;
  width: string;
  maxWidth: string;
  translateX: string;
  translateY: string;
  fontSize: string;
  lineHeight: string;
  letterSpacing?: string;
  opacity: string;
  zIndex: number;
};

type ButtonControls = {
  left: string;
  top: string;
  width: string;
  maxWidth: string;
  translateX: string;
  translateY: string;
  scale: string;
  opacity: string;
  zIndex: number;
};

type GraphPaperControls = {
  left: string;
  top: string;
  width: string;
  height: string;
  translateX: string;
  translateY: string;
  scale: string;
  opacity: string;
  zIndex: number;
};

type BlueprintControls = {
  left: string;
  top: string;
  width: string;
  maxWidth: string;
  translateX: string;
  translateY: string;
  scale: string;
  opacity: string;
  zIndex: number;
};

type OverviewControls = {
  left: string;
  right: string;
  top: string;
  bottom: string;
  width: string;
  maxWidth: string;
  translateX: string;
  translateY: string;
  scale: string;
  opacity: string;
  zIndex: number;
  borderColor: string;
  borderWidth: string;
  borderRadius: string;
  shadow: string;
};

type GradientControls = {
  left: string;
  right: string;
  top: string;
  bottom: string;
  width: string;
  maxWidth: string;
  translateX: string;
  translateY: string;
  scale: string;
  gap: string;
  opacity: string;
  zIndex: number;
};

type ImageSizeControls = {
  blueprint: string;
  overview: string;
};

type HeroBreakpointControls = {
  id: BreakpointId;
  comment: string;
  mediaQuery: string;
  section: SectionControls;
  leftStage: StageControls;
  rightStage: RightStageControls;
  eyebrow: TextElementControls;
  headline: TextElementControls;
  paragraph: Omit<TextElementControls, "letterSpacing">;
  primaryButton: ButtonControls;
  contactButton: ButtonControls;
  resumeLink: ButtonControls;
  graphPaper: GraphPaperControls;
  blueprint: BlueprintControls;
  overview: OverviewControls;
  gradients: GradientControls;
  imageSizes: ImageSizeControls;
};

const overviewBorder = "rgba(190, 198, 195, 0.32)";
const overviewShadow = "0 18px 38px rgba(0, 0, 0, 0.28)";

const smallPhone: HeroBreakpointControls = {
  id: "smallPhone",
  comment: "SMALL PHONE - 0px TO 389px",
  mediaQuery: "(max-width: 389px)",
  section: {
    maxWidth: "1180px",
    minHeight: "auto",
    paddingTop: "44px",
    paddingBottom: "64px",
    compositionHeight: "1125px",
  },
  leftStage: {
    left: "0px",
    top: "0px",
    width: "calc(100vw - 24px)",
    height: "1080px",
    translateX: "0px",
    translateY: "0px",
    zIndex: 2,
  },
  rightStage: {
    left: "0px",
    top: "265px",
    width: "calc(100vw - 24px)",
    height: "430px",
    translateX: "0px",
    translateY: "0px",
    zIndex: 1,
    overflow: "visible",
  },
  eyebrow: {
    left: "0px",
    top: "0px",
    width: "auto",
    maxWidth: "100%",
    translateX: "0px",
    translateY: "0px",
    fontSize: "0.76rem",
    lineHeight: "1.2",
    letterSpacing: "0",
    opacity: "1",
    zIndex: 1,
  },
  headline: {
    left: "0px",
    top: "34px",
    width: "calc(100vw - 24px)",
    maxWidth: "100%",
    translateX: "0px",
    translateY: "0px",
    fontSize: "clamp(2.15rem, 9.2vw, 2.45rem)",
    lineHeight: "1.02",
    letterSpacing: "0",
    opacity: "1",
    zIndex: 1,
  },
  paragraph: {
    left: "0px",
    top: "928px",
    width: "min(calc(100vw - 48px), 28ch)",
    maxWidth: "min(calc(100vw - 48px), 28ch)",
    translateX: "0px",
    translateY: "0px",
    fontSize: "0.96rem",
    lineHeight: "1.64",
    opacity: "1",
    zIndex: 1,
  },
  primaryButton: {
    left: "0px",
    top: "748px",
    width: "calc(100vw - 24px)",
    maxWidth: "100%",
    translateX: "0px",
    translateY: "0px",
    scale: "1",
    opacity: "1",
    zIndex: 2,
  },
  contactButton: {
    left: "0px",
    top: "804px",
    width: "calc(100vw - 24px)",
    maxWidth: "100%",
    translateX: "0px",
    translateY: "0px",
    scale: "1",
    opacity: "1",
    zIndex: 2,
  },
  resumeLink: {
    left: "0px",
    top: "860px",
    width: "calc(100vw - 24px)",
    maxWidth: "100%",
    translateX: "0px",
    translateY: "0px",
    scale: "1",
    opacity: "1",
    zIndex: 2,
  },
  graphPaper: {
    left: "0px",
    top: "0px",
    width: "100%",
    height: "420px",
    translateX: "0px",
    translateY: "0px",
    scale: "1",
    opacity: "0.55",
    zIndex: 0,
  },
  blueprint: {
    left: "0px",
    top: "12px",
    width: "100%",
    maxWidth: "100%",
    translateX: "0px",
    translateY: "0px",
    scale: "1",
    opacity: "1",
    zIndex: 2,
  },
  overview: {
    left: "50%",
    right: "auto",
    top: "190px",
    bottom: "auto",
    width: "78vw",
    maxWidth: "300px",
    translateX: "-50%",
    translateY: "0px",
    scale: "1",
    opacity: "1",
    zIndex: 4,
    borderColor: overviewBorder,
    borderWidth: "1px",
    borderRadius: "8px",
    shadow: overviewShadow,
  },
  gradients: {
    left: "50%",
    right: "auto",
    top: "355px",
    bottom: "auto",
    width: "78vw",
    maxWidth: "300px",
    translateX: "-50%",
    translateY: "0px",
    scale: "1",
    gap: "9px",
    opacity: "1",
    zIndex: 3,
  },
  imageSizes: {
    blueprint: "calc(100vw - 24px)",
    overview: "78vw",
  },
};

const largePhone: HeroBreakpointControls = {
  id: "largePhone",
  comment: "LARGE PHONE - 390px TO 767px",
  mediaQuery: "(min-width: 390px) and (max-width: 767px)",
  section: {
    maxWidth: "1180px",
    minHeight: "auto",
    paddingTop: "44px",
    paddingBottom: "64px",
    compositionHeight: "1150px",
  },
  leftStage: {
    left: "0px",
    top: "0px",
    width: "calc(100vw - 24px)",
    height: "1100px",
    translateX: "0px",
    translateY: "0px",
    zIndex: 2,
  },
  rightStage: {
    left: "0px",
    top: "275px",
    width: "calc(100vw - 24px)",
    height: "455px",
    translateX: "0px",
    translateY: "0px",
    zIndex: 1,
    overflow: "visible",
  },
  eyebrow: {
    left: "0px",
    top: "0px",
    width: "auto",
    maxWidth: "100%",
    translateX: "0px",
    translateY: "0px",
    fontSize: "0.76rem",
    lineHeight: "1.2",
    letterSpacing: "0",
    opacity: "1",
    zIndex: 1,
  },
  headline: {
    left: "0px",
    top: "34px",
    width: "min(calc(100vw - 48px), 30ch)",
    maxWidth: "min(calc(100vw - 48px), 30ch)",
    translateX: "0px",
    translateY: "0px",
    fontSize: "clamp(2.25rem, 7.2vw, 2.65rem)",
    lineHeight: "1.02",
    letterSpacing: "0",
    opacity: "1",
    zIndex: 1,
  },
  paragraph: {
    left: "0px",
    top: "948px",
    width: "min(calc(100vw - 48px), 30ch)",
    maxWidth: "min(calc(100vw - 48px), 30ch)",
    translateX: "0px",
    translateY: "0px",
    fontSize: "clamp(0.98rem, 2.5vw, 1.03rem)",
    lineHeight: "1.66",
    opacity: "1",
    zIndex: 1,
  },
  primaryButton: {
    left: "0px",
    top: "768px",
    width: "calc(100vw - 24px)",
    maxWidth: "100%",
    translateX: "0px",
    translateY: "0px",
    scale: "1",
    opacity: "1",
    zIndex: 2,
  },
  contactButton: {
    left: "0px",
    top: "824px",
    width: "calc(100vw - 24px)",
    maxWidth: "100%",
    translateX: "0px",
    translateY: "0px",
    scale: "1",
    opacity: "1",
    zIndex: 2,
  },
  resumeLink: {
    left: "0px",
    top: "880px",
    width: "calc(100vw - 24px)",
    maxWidth: "100%",
    translateX: "0px",
    translateY: "0px",
    scale: "1",
    opacity: "1",
    zIndex: 2,
  },
  graphPaper: {
    left: "0px",
    top: "0px",
    width: "100%",
    height: "445px",
    translateX: "0px",
    translateY: "0px",
    scale: "1",
    opacity: "0.55",
    zIndex: 0,
  },
  blueprint: {
    left: "0px",
    top: "10px",
    width: "100%",
    maxWidth: "100%",
    translateX: "0px",
    translateY: "0px",
    scale: "1",
    opacity: "1",
    zIndex: 2,
  },
  overview: {
    left: "50%",
    right: "auto",
    top: "205px",
    bottom: "auto",
    width: "76vw",
    maxWidth: "330px",
    translateX: "-50%",
    translateY: "0px",
    scale: "1",
    opacity: "1",
    zIndex: 4,
    borderColor: overviewBorder,
    borderWidth: "1px",
    borderRadius: "8px",
    shadow: overviewShadow,
  },
  gradients: {
    left: "50%",
    right: "auto",
    top: "382px",
    bottom: "auto",
    width: "76vw",
    maxWidth: "330px",
    translateX: "-50%",
    translateY: "0px",
    scale: "1",
    gap: "9px",
    opacity: "1",
    zIndex: 3,
  },
  imageSizes: {
    blueprint: "calc(100vw - 24px)",
    overview: "76vw",
  },
};

const smallTabletPortrait: HeroBreakpointControls = {
  id: "smallTabletPortrait",
  comment: "SMALL TABLET PORTRAIT - 768px TO 899px portrait",
  mediaQuery: "(min-width: 768px) and (max-width: 899px) and (orientation: portrait)",
  section: {
    maxWidth: "980px",
    minHeight: "auto",
    paddingTop: "60px",
    paddingBottom: "72px",
    compositionHeight: "1165px",
  },
  leftStage: {
    left: "0px",
    top: "0px",
    width: "710px",
    height: "1120px",
    translateX: "0px",
    translateY: "0px",
    zIndex: 2,
  },
  rightStage: {
    left: "0px",
    top: "305px",
    width: "720px",
    height: "570px",
    translateX: "0px",
    translateY: "0px",
    zIndex: 1,
    overflow: "visible",
  },
  eyebrow: {
    left: "0px",
    top: "0px",
    width: "auto",
    maxWidth: "100%",
    translateX: "0px",
    translateY: "0px",
    fontSize: "0.76rem",
    lineHeight: "1.2",
    letterSpacing: "0",
    opacity: "1",
    zIndex: 1,
  },
  headline: {
    left: "0px",
    top: "36px",
    width: "700px",
    maxWidth: "700px",
    translateX: "0px",
    translateY: "0px",
    fontSize: "clamp(3.7rem, 5.6vw, 4.3rem)",
    lineHeight: "1",
    letterSpacing: "0",
    opacity: "1",
    zIndex: 1,
  },
  paragraph: {
    left: "0px",
    top: "1004px",
    width: "640px",
    maxWidth: "640px",
    translateX: "0px",
    translateY: "0px",
    fontSize: "clamp(1.06rem, 1.7vw, 1.18rem)",
    lineHeight: "1.72",
    opacity: "1",
    zIndex: 1,
  },
  primaryButton: {
    left: "0px",
    top: "915px",
    width: "auto",
    maxWidth: "none",
    translateX: "0px",
    translateY: "0px",
    scale: "1",
    opacity: "1",
    zIndex: 2,
  },
  contactButton: {
    left: "205px",
    top: "915px",
    width: "auto",
    maxWidth: "none",
    translateX: "0px",
    translateY: "0px",
    scale: "1",
    opacity: "1",
    zIndex: 2,
  },
  resumeLink: {
    left: "350px",
    top: "915px",
    width: "auto",
    maxWidth: "none",
    translateX: "0px",
    translateY: "0px",
    scale: "1",
    opacity: "1",
    zIndex: 2,
  },
  graphPaper: {
    left: "0px",
    top: "0px",
    width: "720px",
    height: "560px",
    translateX: "0px",
    translateY: "0px",
    scale: "1",
    opacity: "0.55",
    zIndex: 0,
  },
  blueprint: {
    left: "0px",
    top: "12px",
    width: "720px",
    maxWidth: "none",
    translateX: "0px",
    translateY: "-6px",
    scale: "1",
    opacity: "1",
    zIndex: 2,
  },
  overview: {
    left: "auto",
    right: "8px",
    top: "auto",
    bottom: "105px",
    width: "320px",
    maxWidth: "46%",
    translateX: "0px",
    translateY: "0px",
    scale: "1",
    opacity: "1",
    zIndex: 4,
    borderColor: overviewBorder,
    borderWidth: "1px",
    borderRadius: "8px",
    shadow: overviewShadow,
  },
  gradients: {
    left: "12px",
    right: "auto",
    top: "auto",
    bottom: "24px",
    width: "380px",
    maxWidth: "54%",
    translateX: "0px",
    translateY: "0px",
    scale: "1",
    gap: "9px",
    opacity: "1",
    zIndex: 3,
  },
  imageSizes: {
    blueprint: "90vw",
    overview: "330px",
  },
};

const largeTabletPortrait: HeroBreakpointControls = {
  id: "largeTabletPortrait",
  comment: "LARGE TABLET PORTRAIT - 900px TO 1365px portrait",
  mediaQuery: "(min-width: 900px) and (max-width: 1365px) and (orientation: portrait)",
  section: {
    maxWidth: "980px",
    minHeight: "auto",
    paddingTop: "64px",
    paddingBottom: "78px",
    compositionHeight: "1235px",
  },
  leftStage: {
    left: "0px",
    top: "0px",
    width: "820px",
    height: "1185px",
    translateX: "0px",
    translateY: "0px",
    zIndex: 2,
  },
  rightStage: {
    left: "0px",
    top: "330px",
    width: "840px",
    height: "610px",
    translateX: "0px",
    translateY: "0px",
    zIndex: 1,
    overflow: "visible",
  },
  eyebrow: {
    left: "0px",
    top: "0px",
    width: "auto",
    maxWidth: "100%",
    translateX: "0px",
    translateY: "0px",
    fontSize: "0.76rem",
    lineHeight: "1.2",
    letterSpacing: "0",
    opacity: "1",
    zIndex: 1,
  },
  headline: {
    left: "0px",
    top: "36px",
    width: "780px",
    maxWidth: "780px",
    translateX: "0px",
    translateY: "0px",
    fontSize: "clamp(4rem, 5.2vw, 4.75rem)",
    lineHeight: "1",
    letterSpacing: "0",
    opacity: "1",
    zIndex: 1,
  },
  paragraph: {
    left: "0px",
    top: "1062px",
    width: "660px",
    maxWidth: "660px",
    translateX: "0px",
    translateY: "0px",
    fontSize: "clamp(1.06rem, 1.7vw, 1.18rem)",
    lineHeight: "1.72",
    opacity: "1",
    zIndex: 1,
  },
  primaryButton: {
    left: "0px",
    top: "975px",
    width: "auto",
    maxWidth: "none",
    translateX: "0px",
    translateY: "0px",
    scale: "1",
    opacity: "1",
    zIndex: 2,
  },
  contactButton: {
    left: "205px",
    top: "975px",
    width: "auto",
    maxWidth: "none",
    translateX: "0px",
    translateY: "0px",
    scale: "1",
    opacity: "1",
    zIndex: 2,
  },
  resumeLink: {
    left: "350px",
    top: "975px",
    width: "auto",
    maxWidth: "none",
    translateX: "0px",
    translateY: "0px",
    scale: "1",
    opacity: "1",
    zIndex: 2,
  },
  graphPaper: {
    left: "0px",
    top: "0px",
    width: "840px",
    height: "600px",
    translateX: "0px",
    translateY: "0px",
    scale: "1",
    opacity: "0.55",
    zIndex: 0,
  },
  blueprint: {
    left: "0px",
    top: "14px",
    width: "840px",
    maxWidth: "none",
    translateX: "0px",
    translateY: "-8px",
    scale: "1",
    opacity: "1",
    zIndex: 2,
  },
  overview: {
    left: "auto",
    right: "14px",
    top: "auto",
    bottom: "106px",
    width: "350px",
    maxWidth: "44%",
    translateX: "0px",
    translateY: "0px",
    scale: "1",
    opacity: "1",
    zIndex: 4,
    borderColor: overviewBorder,
    borderWidth: "1px",
    borderRadius: "8px",
    shadow: overviewShadow,
  },
  gradients: {
    left: "18px",
    right: "auto",
    top: "auto",
    bottom: "24px",
    width: "420px",
    maxWidth: "52%",
    translateX: "0px",
    translateY: "0px",
    scale: "1",
    gap: "9px",
    opacity: "1",
    zIndex: 3,
  },
  imageSizes: {
    blueprint: "86vw",
    overview: "360px",
  },
};

const smallTabletLandscape: HeroBreakpointControls = {
  id: "smallTabletLandscape",
  comment: "SMALL TABLET LANDSCAPE - 768px TO 1099px landscape",
  mediaQuery: "(min-width: 768px) and (max-width: 1099px) and (orientation: landscape)",
  section: {
    maxWidth: "980px",
    minHeight: "calc(100vh - var(--header-height))",
    paddingTop: "70px",
    paddingBottom: "86px",
    compositionHeight: "560px",
  },
  leftStage: {
    left: "0px",
    top: "0px",
    width: "520px",
    height: "500px",
    translateX: "0px",
    translateY: "0px",
    zIndex: 2,
  },
  rightStage: {
    left: "500px",
    top: "0px",
    width: "460px",
    height: "520px",
    translateX: "0px",
    translateY: "0px",
    zIndex: 1,
    overflow: "visible",
  },
  eyebrow: {
    left: "0px",
    top: "0px",
    width: "auto",
    maxWidth: "100%",
    translateX: "0px",
    translateY: "0px",
    fontSize: "0.76rem",
    lineHeight: "1.2",
    letterSpacing: "0",
    opacity: "1",
    zIndex: 1,
  },
  headline: {
    left: "0px",
    top: "34px",
    width: "520px",
    maxWidth: "520px",
    translateX: "0px",
    translateY: "0px",
    fontSize: "clamp(2.7rem, 5.2vw, 4rem)",
    lineHeight: "0.98",
    letterSpacing: "0",
    opacity: "1",
    zIndex: 1,
  },
  paragraph: {
    left: "0px",
    top: "235px",
    width: "500px",
    maxWidth: "500px",
    translateX: "0px",
    translateY: "0px",
    fontSize: "1.02rem",
    lineHeight: "1.62",
    opacity: "1",
    zIndex: 1,
  },
  primaryButton: {
    left: "0px",
    top: "382px",
    width: "auto",
    maxWidth: "none",
    translateX: "0px",
    translateY: "0px",
    scale: "1",
    opacity: "1",
    zIndex: 2,
  },
  contactButton: {
    left: "205px",
    top: "382px",
    width: "auto",
    maxWidth: "none",
    translateX: "0px",
    translateY: "0px",
    scale: "1",
    opacity: "1",
    zIndex: 2,
  },
  resumeLink: {
    left: "350px",
    top: "382px",
    width: "auto",
    maxWidth: "none",
    translateX: "0px",
    translateY: "0px",
    scale: "1",
    opacity: "1",
    zIndex: 2,
  },
  graphPaper: {
    left: "0px",
    top: "0px",
    width: "460px",
    height: "500px",
    translateX: "0px",
    translateY: "0px",
    scale: "1",
    opacity: "0.55",
    zIndex: 0,
  },
  blueprint: {
    left: "0px",
    top: "40px",
    width: "520px",
    maxWidth: "none",
    translateX: "-12px",
    translateY: "-8px",
    scale: "1",
    opacity: "1",
    zIndex: 2,
  },
  overview: {
    left: "auto",
    right: "-4px",
    top: "auto",
    bottom: "100px",
    width: "270px",
    maxWidth: "46%",
    translateX: "0px",
    translateY: "0px",
    scale: "1",
    opacity: "1",
    zIndex: 4,
    borderColor: overviewBorder,
    borderWidth: "1px",
    borderRadius: "8px",
    shadow: overviewShadow,
  },
  gradients: {
    left: "0px",
    right: "auto",
    top: "auto",
    bottom: "26px",
    width: "340px",
    maxWidth: "62%",
    translateX: "-42px",
    translateY: "0px",
    scale: "1",
    gap: "9px",
    opacity: "1",
    zIndex: 3,
  },
  imageSizes: {
    blueprint: "46vw",
    overview: "270px",
  },
};

const tabletLandscape: HeroBreakpointControls = {
  id: "tabletLandscape",
  comment: "TABLET LANDSCAPE - 1100px TO 1365px landscape",
  mediaQuery: "(min-width: 1100px) and (max-width: 1365px) and (orientation: landscape)",
  section: {
    maxWidth: "1080px",
    minHeight: "calc(100vh - var(--header-height))",
    paddingTop: "70px",
    paddingBottom: "86px",
    compositionHeight: "590px",
  },
  leftStage: {
    left: "0px",
    top: "0px",
    width: "610px",
    height: "540px",
    translateX: "0px",
    translateY: "0px",
    zIndex: 2,
  },
  rightStage: {
    left: "600px",
    top: "0px",
    width: "500px",
    height: "560px",
    translateX: "-10px",
    translateY: "0px",
    zIndex: 1,
    overflow: "visible",
  },
  eyebrow: {
    left: "0px",
    top: "0px",
    width: "auto",
    maxWidth: "100%",
    translateX: "0px",
    translateY: "0px",
    fontSize: "0.76rem",
    lineHeight: "1.2",
    letterSpacing: "0",
    opacity: "1",
    zIndex: 1,
  },
  headline: {
    left: "0px",
    top: "34px",
    width: "610px",
    maxWidth: "610px",
    translateX: "0px",
    translateY: "0px",
    fontSize: "clamp(3.2rem, 5.4vw, 4.8rem)",
    lineHeight: "0.98",
    letterSpacing: "0",
    opacity: "1",
    zIndex: 1,
  },
  paragraph: {
    left: "0px",
    top: "265px",
    width: "560px",
    maxWidth: "560px",
    translateX: "0px",
    translateY: "0px",
    fontSize: "clamp(1.06rem, 1.7vw, 1.18rem)",
    lineHeight: "1.68",
    opacity: "1",
    zIndex: 1,
  },
  primaryButton: {
    left: "0px",
    top: "420px",
    width: "auto",
    maxWidth: "none",
    translateX: "0px",
    translateY: "0px",
    scale: "1",
    opacity: "1",
    zIndex: 2,
  },
  contactButton: {
    left: "205px",
    top: "420px",
    width: "auto",
    maxWidth: "none",
    translateX: "0px",
    translateY: "0px",
    scale: "1",
    opacity: "1",
    zIndex: 2,
  },
  resumeLink: {
    left: "350px",
    top: "420px",
    width: "auto",
    maxWidth: "none",
    translateX: "0px",
    translateY: "0px",
    scale: "1",
    opacity: "1",
    zIndex: 2,
  },
  graphPaper: {
    left: "0px",
    top: "0px",
    width: "500px",
    height: "540px",
    translateX: "0px",
    translateY: "0px",
    scale: "1",
    opacity: "0.55",
    zIndex: 0,
  },
  blueprint: {
    left: "0px",
    top: "34px",
    width: "570px",
    maxWidth: "none",
    translateX: "-24px",
    translateY: "-8px",
    scale: "1",
    opacity: "1",
    zIndex: 2,
  },
  overview: {
    left: "auto",
    right: "-8px",
    top: "auto",
    bottom: "94px",
    width: "292px",
    maxWidth: "46%",
    translateX: "0px",
    translateY: "0px",
    scale: "1",
    opacity: "1",
    zIndex: 4,
    borderColor: overviewBorder,
    borderWidth: "1px",
    borderRadius: "8px",
    shadow: overviewShadow,
  },
  gradients: {
    left: "0px",
    right: "auto",
    top: "auto",
    bottom: "24px",
    width: "370px",
    maxWidth: "60%",
    translateX: "-66px",
    translateY: "0px",
    scale: "1",
    gap: "9px",
    opacity: "1",
    zIndex: 3,
  },
  imageSizes: {
    blueprint: "46vw",
    overview: "292px",
  },
};

const desktop: HeroBreakpointControls = {
  id: "desktop",
  comment: "DESKTOP - 1366px TO 1919px",
  mediaQuery: "(min-width: 1366px) and (max-width: 1919px)",
  section: {
    maxWidth: "1180px",
    minHeight: "calc(100vh - var(--header-height))",
    paddingTop: "70px",
    paddingBottom: "86px",
    compositionHeight: "630px",
  },
  leftStage: {
    left: "0px",
    top: "0px",
    width: "700px",
    height: "610px",
    translateX: "0px",
    translateY: "0px",
    zIndex: 2,
  },
  rightStage: {
    left: "600px",
    top: "0px",
    width: "700px",
    height: "610px",
    translateX: "-20px",
    translateY: "0px",
    zIndex: 1,
    overflow: "visible",
  },
  eyebrow: {
    left: "0px",
    top: "70px",
    width: "auto",
    maxWidth: "100%",
    translateX: "0px",
    translateY: "0px",
    fontSize: "0.76rem",
    lineHeight: "1.2",
    letterSpacing: "0",
    opacity: "1",
    zIndex: 1,
  },
  headline: {
    left: "0px",
    top: "105px",
    width: "700px",
    maxWidth: "700px",
    translateX: "0px",
    translateY: "0px",
    fontSize: "clamp(2.75rem, 5.6vw, 5.05rem)",
    lineHeight: "0.96",
    letterSpacing: "0",
    opacity: "1",
    zIndex: 1,
  },
  paragraph: {
    left: "0px",
    top: "350px",
    width: "660px",
    maxWidth: "660px",
    translateX: "0px",
    translateY: "0px",
    fontSize: "clamp(1.06rem, 1.7vw, 1.18rem)",
    lineHeight: "1.72",
    opacity: "1",
    zIndex: 1,
  },
  primaryButton: {
    left: "0px",
    top: "500px",
    width: "auto",
    maxWidth: "none",
    translateX: "0px",
    translateY: "0px",
    scale: "1",
    opacity: "1",
    zIndex: 2,
  },
  contactButton: {
    left: "205px",
    top: "500px",
    width: "auto",
    maxWidth: "none",
    translateX: "0px",
    translateY: "0px",
    scale: "1",
    opacity: "1",
    zIndex: 2,
  },
  resumeLink: {
    left: "350px",
    top: "500px",
    width: "auto",
    maxWidth: "none",
    translateX: "0px",
    translateY: "0px",
    scale: "1",
    opacity: "1",
    zIndex: 2,
  },
  graphPaper: {
    left: "0px",
    top: "0px",
    width: "700px",
    height: "610px",
    translateX: "0px",
    translateY: "0px",
    scale: "1",
    opacity: "0.55",
    zIndex: 0,
  },
  blueprint: {
    left: "0px",
    top: "0px",
    width: "850px",
    maxWidth: "none",
    translateX: "-70px",
    translateY: "-14px",
    scale: "1",
    opacity: "1",
    zIndex: 2,
  },
  overview: {
    left: "auto",
    right: "-18px",
    top: "auto",
    bottom: "92px",
    width: "300px",
    maxWidth: "none",
    translateX: "0px",
    translateY: "0px",
    scale: "1",
    opacity: "1",
    zIndex: 4,
    borderColor: overviewBorder,
    borderWidth: "1px",
    borderRadius: "8px",
    shadow: overviewShadow,
  },
  gradients: {
    left: "0px",
    right: "auto",
    top: "auto",
    bottom: "20px",
    width: "390px",
    maxWidth: "none",
    translateX: "-130px",
    translateY: "24px",
    scale: "1",
    gap: "9px",
    opacity: "1",
    zIndex: 3,
  },
  imageSizes: {
    blueprint: "700px",
    overview: "300px",
  },
};

const largeDesktop: HeroBreakpointControls = {
  id: "largeDesktop",
  comment: "LARGE DESKTOP - 1920px and above",
  mediaQuery: "(min-width: 1920px)",
  section: {
    maxWidth: "1280px",
    minHeight: "calc(100vh - var(--header-height))",
    paddingTop: "70px",
    paddingBottom: "86px",
    compositionHeight: "650px",
  },
  leftStage: {
    left: "-60px",
    top: "0px",
    width: "760px",
    height: "650px",
    translateX: "0px",
    translateY: "28px",
    zIndex: 2,
  },
  rightStage: {
    left: "560px",
    top: "0px",
    width: "760px",
    height: "650px",
    translateX: "-20px",
    translateY: "0px",
    zIndex: 1,
    overflow: "visible",
  },
  eyebrow: {
    left: "0px",
    top: "70px",
    width: "auto",
    maxWidth: "100%",
    translateX: "0px",
    translateY: "0px",
    fontSize: "0.76rem",
    lineHeight: "1.2",
    letterSpacing: "0",
    opacity: "1",
    zIndex: 1,
  },
  headline: {
    left: "0px",
    top: "105px",
    width: "660px",
    maxWidth: "660px",
    translateX: "0px",
    translateY: "0px",
    fontSize: "70px",
    lineHeight: "0.96",
    letterSpacing: "0",
    opacity: "1",
    zIndex: 1,
  },
  paragraph: {
    left: "0px",
    top: "405px",
    width: "540px",
    maxWidth: "540px",
    translateX: "0px",
    translateY: "0px",
    fontSize: "18px",
    lineHeight: "1.72",
    opacity: "1",
    zIndex: 1,
  },
  primaryButton: {
    left: "0px",
    top: "560px",
    width: "auto",
    maxWidth: "none",
    translateX: "0px",
    translateY: "0px",
    scale: "1",
    opacity: "1",
    zIndex: 2,
  },
  contactButton: {
    left: "215px",
    top: "560px",
    width: "auto",
    maxWidth: "none",
    translateX: "0px",
    translateY: "0px",
    scale: "1",
    opacity: "1",
    zIndex: 2,
  },
  resumeLink: {
    left: "345px",
    top: "560px",
    width: "auto",
    maxWidth: "none",
    translateX: "0px",
    translateY: "0px",
    scale: "1",
    opacity: "1",
    zIndex: 2,
  },
  graphPaper: {
    left: "0px",
    top: "0px",
    width: "860px",
    height: "650px",
    translateX: "0px",
    translateY: "0px",
    scale: "1",
    opacity: "0.55",
    zIndex: 0,
  },
  blueprint: {
    left: "-100px",
    top: "60px",
    width: "900px",
    maxWidth: "none",
    translateX: "-120px",
    translateY: "-10px",
    scale: "1",
    opacity: "1",
    zIndex: 2,
  },
  overview: {
    left: "auto",
    right: "20px",
    top: "auto",
    bottom: "-5px",
    width: "320px",
    maxWidth: "none",
    translateX: "0px",
    translateY: "0px",
    scale: "1",
    opacity: "1",
    zIndex: 4,
    borderColor: overviewBorder,
    borderWidth: "1px",
    borderRadius: "8px",
    shadow: overviewShadow,
  },
  gradients: {
    left: "40px",
    right: "auto",
    top: "auto",
    bottom: "30px",
    width: "430px",
    maxWidth: "none",
    translateX: "-130px",
    translateY: "28px",
    scale: "1",
    gap: "9px",
    opacity: "1",
    zIndex: 3,
  },
  imageSizes: {
    blueprint: "760px",
    overview: "320px",
  },
};

export const heroBreakpoints: HeroBreakpointControls[] = [
  smallPhone,
  largePhone,
  smallTabletPortrait,
  largeTabletPortrait,
  smallTabletLandscape,
  tabletLandscape,
  desktop,
  largeDesktop,
];

type CssValueMap = Record<string, string | number>;

function varsFor(config: HeroBreakpointControls): CssValueMap {
  return {
    "hero-section-min-height": config.section.minHeight,
    "hero-section-padding-top": config.section.paddingTop,
    "hero-section-padding-bottom": config.section.paddingBottom,
    "hero-container-max-width": config.section.maxWidth,
    "hero-composition-height": config.section.compositionHeight,
    "hero-left-stage-left": config.leftStage.left,
    "hero-left-stage-top": config.leftStage.top,
    "hero-left-stage-width": config.leftStage.width,
    "hero-left-stage-height": config.leftStage.height,
    "hero-left-stage-x": config.leftStage.translateX,
    "hero-left-stage-y": config.leftStage.translateY,
    "hero-left-stage-z": config.leftStage.zIndex,
    "hero-right-stage-left": config.rightStage.left,
    "hero-right-stage-top": config.rightStage.top,
    "hero-right-stage-width": config.rightStage.width,
    "hero-right-stage-height": config.rightStage.height,
    "hero-right-stage-x": config.rightStage.translateX,
    "hero-right-stage-y": config.rightStage.translateY,
    "hero-right-stage-z": config.rightStage.zIndex,
    "hero-right-stage-overflow": config.rightStage.overflow,
    "hero-eyebrow-left": config.eyebrow.left,
    "hero-eyebrow-top": config.eyebrow.top,
    "hero-eyebrow-width": config.eyebrow.width,
    "hero-eyebrow-max-width": config.eyebrow.maxWidth,
    "hero-eyebrow-x": config.eyebrow.translateX,
    "hero-eyebrow-y": config.eyebrow.translateY,
    "hero-eyebrow-font-size": config.eyebrow.fontSize,
    "hero-eyebrow-line-height": config.eyebrow.lineHeight,
    "hero-eyebrow-letter-spacing": config.eyebrow.letterSpacing ?? "0",
    "hero-eyebrow-opacity": config.eyebrow.opacity,
    "hero-eyebrow-z": config.eyebrow.zIndex,
    "hero-headline-left": config.headline.left,
    "hero-headline-top": config.headline.top,
    "hero-headline-width": config.headline.width,
    "hero-headline-max-width": config.headline.maxWidth,
    "hero-headline-x": config.headline.translateX,
    "hero-headline-y": config.headline.translateY,
    "hero-headline-font-size": config.headline.fontSize,
    "hero-headline-line-height": config.headline.lineHeight,
    "hero-headline-letter-spacing": config.headline.letterSpacing ?? "0",
    "hero-headline-opacity": config.headline.opacity,
    "hero-headline-z": config.headline.zIndex,
    "hero-paragraph-left": config.paragraph.left,
    "hero-paragraph-top": config.paragraph.top,
    "hero-paragraph-width": config.paragraph.width,
    "hero-paragraph-max-width": config.paragraph.maxWidth,
    "hero-paragraph-x": config.paragraph.translateX,
    "hero-paragraph-y": config.paragraph.translateY,
    "hero-paragraph-font-size": config.paragraph.fontSize,
    "hero-paragraph-line-height": config.paragraph.lineHeight,
    "hero-paragraph-opacity": config.paragraph.opacity,
    "hero-paragraph-z": config.paragraph.zIndex,
    "hero-primary-left": config.primaryButton.left,
    "hero-primary-top": config.primaryButton.top,
    "hero-primary-width": config.primaryButton.width,
    "hero-primary-max-width": config.primaryButton.maxWidth,
    "hero-primary-x": config.primaryButton.translateX,
    "hero-primary-y": config.primaryButton.translateY,
    "hero-primary-scale": config.primaryButton.scale,
    "hero-primary-opacity": config.primaryButton.opacity,
    "hero-primary-z": config.primaryButton.zIndex,
    "hero-contact-left": config.contactButton.left,
    "hero-contact-top": config.contactButton.top,
    "hero-contact-width": config.contactButton.width,
    "hero-contact-max-width": config.contactButton.maxWidth,
    "hero-contact-x": config.contactButton.translateX,
    "hero-contact-y": config.contactButton.translateY,
    "hero-contact-scale": config.contactButton.scale,
    "hero-contact-opacity": config.contactButton.opacity,
    "hero-contact-z": config.contactButton.zIndex,
    "hero-resume-left": config.resumeLink.left,
    "hero-resume-top": config.resumeLink.top,
    "hero-resume-width": config.resumeLink.width,
    "hero-resume-max-width": config.resumeLink.maxWidth,
    "hero-resume-x": config.resumeLink.translateX,
    "hero-resume-y": config.resumeLink.translateY,
    "hero-resume-scale": config.resumeLink.scale,
    "hero-resume-opacity": config.resumeLink.opacity,
    "hero-resume-z": config.resumeLink.zIndex,
    "hero-graph-left": config.graphPaper.left,
    "hero-graph-top": config.graphPaper.top,
    "hero-grid-width": config.graphPaper.width,
    "hero-grid-height": config.graphPaper.height,
    "hero-grid-x": config.graphPaper.translateX,
    "hero-grid-y": config.graphPaper.translateY,
    "hero-grid-scale": config.graphPaper.scale,
    "hero-grid-opacity": config.graphPaper.opacity,
    "hero-graph-z": config.graphPaper.zIndex,
    "hero-blueprint-left": config.blueprint.left,
    "hero-blueprint-top": config.blueprint.top,
    "hero-blueprint-width": config.blueprint.width,
    "hero-blueprint-max-width": config.blueprint.maxWidth,
    "hero-blueprint-x": config.blueprint.translateX,
    "hero-blueprint-y": config.blueprint.translateY,
    "hero-blueprint-scale": config.blueprint.scale,
    "hero-blueprint-opacity": config.blueprint.opacity,
    "hero-blueprint-z": config.blueprint.zIndex,
    "hero-overview-left": config.overview.left,
    "hero-overview-right": config.overview.right,
    "hero-overview-top": config.overview.top,
    "hero-overview-bottom": config.overview.bottom,
    "hero-overview-width": config.overview.width,
    "hero-overview-max-width": config.overview.maxWidth,
    "hero-overview-x": config.overview.translateX,
    "hero-overview-y": config.overview.translateY,
    "hero-overview-scale": config.overview.scale,
    "hero-overview-opacity": config.overview.opacity,
    "hero-overview-z": config.overview.zIndex,
    "hero-overview-border-color": config.overview.borderColor,
    "hero-overview-border-width": config.overview.borderWidth,
    "hero-overview-radius": config.overview.borderRadius,
    "hero-overview-shadow": config.overview.shadow,
    "hero-gradient-left": config.gradients.left,
    "hero-gradient-right": config.gradients.right,
    "hero-gradient-top": config.gradients.top,
    "hero-gradient-bottom": config.gradients.bottom,
    "hero-gradient-width": config.gradients.width,
    "hero-gradient-max-width": config.gradients.maxWidth,
    "hero-gradient-x": config.gradients.translateX,
    "hero-gradient-y": config.gradients.translateY,
    "hero-gradient-scale": config.gradients.scale,
    "hero-gradient-gap": config.gradients.gap,
    "hero-gradient-opacity": config.gradients.opacity,
    "hero-gradient-z": config.gradients.zIndex,
  };
}

function cssVars(vars: CssValueMap) {
  return Object.entries(vars)
    .map(([key, value]) => `  --${key}: ${value};`)
    .join("\n");
}

function cssFor(config: HeroBreakpointControls) {
  return `/* ${config.comment} */\n@media ${config.mediaQuery} {\n.hero-responsive-section {\n${cssVars(
    varsFor(config),
  )}\n}\n}\n`;
}

export const heroBlueprintSizes = heroBreakpoints
  .map((breakpoint) => `${breakpoint.mediaQuery} ${breakpoint.imageSizes.blueprint}`)
  .join(", ");

export const heroOverviewSizes = heroBreakpoints
  .map((breakpoint) => `${breakpoint.mediaQuery} ${breakpoint.imageSizes.overview}`)
  .join(", ");

export function HeroMasterControlStyles() {
  return <style dangerouslySetInnerHTML={{ __html: heroBreakpoints.map(cssFor).join("\n\n") }} />;
}
