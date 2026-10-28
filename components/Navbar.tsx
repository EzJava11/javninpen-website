import Link from "next/link";
export default function Navbar() {
    return (
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
            <Link href="/" className="text-lg font-semibold">
                Javier Niño
            </Link>
            <div className="flex gap-6 text-sm text-zinc-400">
                <a href="#proyectos" className="transition hover:text-white">
                    Proyectos
                </a>
                <a href="#servicios" className="transition hover:text-white">
                    Servicios
                </a>
                <a href="#contacto" className="transition hover:text-white">
                    Contacto
                </a>
            </div>
        </nav>
    );
}