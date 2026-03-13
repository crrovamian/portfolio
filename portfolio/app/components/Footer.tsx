import Link from 'next/link';

interface FooterProps {
  minimal?: boolean;
}

export function Footer({ minimal = false }: FooterProps) {
  if (minimal) {
    return (
      <footer className="footer">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="footer-link">
            ← VOLVER AL PORTFOLIO
          </Link>
          <p className="text-zinc-600 text-sm font-mono">
            © 2026
          </p>
        </div>
      </footer>
    );
  }

  return (
    <footer className="footer-main">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <p className="text-zinc-500 text-sm font-mono">
            © 2026 // Construido con Next.js + GSAP
          </p>
        </div>
        <div className="flex gap-6">
          <a href="https://github.com/crrovamian" className="footer-social">
            GITHUB →
          </a>
          <a href="https://www.linkedin.com/in/miguel-cruz-rodriguez/" className="footer-social">
            LINKEDIN →
          </a>
          <a href="mailto:mavcrespana@gmail.com" className="footer-social">
            EMAIL →
          </a>
        </div>
      </div>
    </footer>
  );
}
