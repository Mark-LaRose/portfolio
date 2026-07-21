import { contactDetails, navigation } from "@/data/portfolio";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <a
            className="wordmark footer-wordmark"
            href="#top"
            aria-label="Mark LaRose home"
          >
            <span className="monogram">ML</span>
            <span className="wordmark-text">Mark LaRose</span>
          </a>

          <p>
            Built with{" "}
            <span className="footer-heart" aria-hidden="true">
              ♥
            </span>{" "}
            by{" "}
            <a
              href="https://2onwebsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              2 On Web Solutions
            </a>
          </p>
        </div>

        <nav aria-label="Footer navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="footer-contact">
          <span>{contactDetails.location}</span>
          <a href={`mailto:${contactDetails.email}`}>
            {contactDetails.email}
          </a>
          <span>Copyright © {year}</span>
        </div>
      </div>
    </footer>
  );
}