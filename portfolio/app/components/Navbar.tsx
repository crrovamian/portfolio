import Link from 'next/link';

interface NavbarProps {
  showBack?: boolean;
}

export function Navbar({ showBack = false }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 navbar">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="navbar-logo">
          MIGUEL CRUZ
        </Link>
        {showBack && (
          <Link href="/" className="navbar-link">
            ← VOLVER
          </Link>
        )}
      </div>
    </nav>
  );
}
