import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar></Navbar>
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24">
        <p className="mb-6 text-sm font-medium tracking-[0.25em] text-emerald-400 uppercase">
          Desarrollo web · Alicante
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-7xl">
          Diseño y desarrollo web para hacer crecer tu negocio.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
          Creo páginas web modernas, rápidas y adaptadas a cada negocio,
          con un enfoque en la experiencia de usuario y los resultados.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contacto"
            className="rounded-full bg-emerald-400 px-6 py-3 font-medium text-zinc-950 transition hover:bg-emerald-300"
          >
            Hablemos de tu proyecto
          </a>

          <a
            href="#proyectos"
            className="rounded-full border border-zinc-700 px-6 py-3 font-medium transition hover:border-zinc-400"
          >
            Ver proyectos
          </a>
        </div>
      </section>
      <Services></Services>
      <Projects></Projects>
      <About></About>
    </main>
  );
}