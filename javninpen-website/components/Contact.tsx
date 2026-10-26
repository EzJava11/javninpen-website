export default function Contact() {
    return(
        <section id="contacto" className="mx-auto max-w-6xl px-6 py-12">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 sm:p-12">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-emeral-400">
                    Contacto
                </p>
                <h2 className="mt-4 max-w-2xl text-3xl font-semibold sm:text-4xl">
                    ¿Tienes un proyecto en mente?
                </h2>
                <p className="mt-4 max-w-2xl text-3xl font-semibold sm:text-4xl">
                    Cuéntame qué necesita tu negocio y buscaremos una solución
                    adaptada a tus objetivos
                </p>
                <a href="mailto:tuemail@ejemplo.com"
                    className="mt-8 inline-block rounded-full bg-emerald-400 px-6 py-3 font-medium text-zinc-950 transition hover:bg-emerald-300">
                        Hablemos de tu proyecto
                </a>
            </div>
        </section>
    )
};
