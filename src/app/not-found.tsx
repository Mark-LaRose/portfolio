import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="container">
        <p className="eyebrow">404</p>
        <h1>Page not found.</h1>
        <p>The portfolio page you are looking for is not available.</p>
        <Link className="button button-primary" href="/">
          Return home
        </Link>
      </div>
    </main>
  );
}
