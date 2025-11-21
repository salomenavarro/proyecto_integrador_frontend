import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-4 p-4 border-b">
      <Link href="/">Inicio</Link>
      <Link href="/equipos">equipos</Link>
      <Link href="/pilotos">pilotos</Link>
      <Link href="/carreras">carreras</Link>
    </nav>
  );
}
