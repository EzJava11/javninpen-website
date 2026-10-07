const projects = [
    {
        title: "KickMatch",
        description:
            "Plataforma web para organizar partidos de fútbol, encontrar jugadores y gestionar equipos.",
        technologies: ["React", "Node.js", "Prisma", "PostgreSQL"],
    },
    {
        title: "QuestLog",
        description:
            "Aplicación web de productividad gamificada con tareas, logros y sistema de progresión.",
        technologies: ["React", "Node.js", "Prisma", "PostgreSQL"],
    }
];
export default function Projects() {
    return (
        <section id="proyectos">
            <h2 className="text-3x1 font-semibold mt-10">
                Proyectos
            </h2>
            <p className="mt-4 max-w-2x1 text-zinc-400">
                Algunos proyectos en los que he trabajado
            </p>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
                {projects.map((project) => (
                    <article
                        key={project.title}
                        className="flex flex-col rounded-2x1 border border-zinc-800 bg-zinc-900 p-6">
                        <h3 className="text-x1 font-semibold">
                            {project.title}
                        </h3>
                        <p className="mt-4 flex-1 text-zinc-400">
                            {project.description}
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2">
                            {project.technologies.map((tecnology) => (
                                <span
                                    key={tecnology}
                                    className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
                                        {tecnology}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}