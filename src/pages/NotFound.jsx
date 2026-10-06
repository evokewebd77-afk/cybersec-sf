import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import { Container } from "../components/ui";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-mint py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-70" />
      <Container className="relative text-center">
        <p className="text-7xl font-extrabold text-gradient sm:text-8xl">404</p>
        <h1 className="mt-4 text-3xl font-extrabold text-ink-950 sm:text-4xl">
          This page slipped past the perimeter
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-600">
          The page you're looking for doesn't exist or has been moved. Let's get
          you back to a secure location.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn btn-primary btn-lg">
            Back to Home
            <Icon path="M5 12h14M12 5l7 7-7 7" className="h-4 w-4" />
          </Link>
          <Link to="/#contact" className="btn btn-outline btn-lg">
            Contact Us
          </Link>
        </div>
      </Container>
    </section>
  );
}