import Link from "next/link";
import ThemeToggle from "./theme-toggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-background">
      <div className="mx-auto flex max-w-3xl flex-wrap justify-between gap-3 px-3 py-4">
        <nav className="space-x-4 font-medium">
          <Link href="/" className="text-primary hover:underline">
            home
          </Link>
          <Link href="/about" className="text-primary hover:underline">
            about me
          </Link>
          <Link href="/social" className="text-primary hover:underline">
            social media
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
