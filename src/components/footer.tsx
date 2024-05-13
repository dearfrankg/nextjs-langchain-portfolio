import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <nav className="mx-auto flex max-w-3xl gap-3 p-3">
        <Link href="/privacy" className="text-primary hover:underline">
          Privacy
        </Link>
      </nav>
    </footer>
  );
}
