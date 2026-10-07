const services = [
    {
        title: "Web corporativa",
        description:
            "Webs profesionales, rápidas y adaptadas a la identidad de cada negocio.",
    },
    {
        title: "E-commerce",
        description:
            "Tiendas online preparadas para mostrar productos y facilitar las ventas.",
    },
    {
        title: "Aplicaciones web",
        description:
            "Soluciones web personalizadas para necesidades más específicas.",
    },
];

export default function Services() {
    return (
        <section id="servicios">
            <h2 className="text-3x1 font-semibold">
                Servicios
            </h2>
            <p className="mt-4 max-w-2x1 text-zinc-400">
                Soluciones digitales adaptadas a las necesidades de cada negocio
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
                {services.map((service) => (
                    <article
                        key={service.title}
                        className="rounded-2x1 border border-zinc-800 bg-zinc-900 p-6">
                        <h3
                            className="text-x1 font-semibold">
                            {service.title}
                        </h3>
                        <p
                            className="mt-3 text-zinc-400">
                            {service.description}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
}