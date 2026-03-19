import Link from 'next/link';
import type { Project } from '@/app/lib/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link
      href={`/proyectos/${project.slug}`}
      className="project-card group block relative bg-zinc-900 border border-zinc-800 hover:border-lime-400 transition-colors duration-300"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-lime-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      
      <div className="p-6 md:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            {project.private && (
              <span className="badge-private">
                Privado
              </span>
            )}
            {project.unavailable && (
              <span className="badge-unavailable">
                Repo no disponible
              </span>
            )}
          </div>

          <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-1 group-hover:text-lime-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-zinc-500 text-sm uppercase tracking-wider mb-4">
            {project.subtitle}
          </p>

          <p className="text-zinc-400 leading-relaxed max-w-xl">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            {project.tech.map((t) => (
              <span key={t} className="tech-badge group-hover:bg-lime-400/10 group-hover:text-lime-400">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex lg:flex-col items-center gap-4 lg:gap-2">
          <span className="font-mono text-4xl lg:text-5xl font-black text-zinc-700 group-hover:text-zinc-500 transition-colors">
            {project.year}
          </span>
          {!project.private && !project.unavailable && (
            <span className="lg:opacity-0 group-hover:opacity-100 transition-opacity text-lime-400 text-sm font-mono">
              VER →
            </span>
          )}
        </div>
      </div>

      <div className="absolute bottom-6 right-6 w-8 h-8 border border-zinc-700 group-hover:border-lime-400 group-hover:bg-lime-400 transition-all duration-300 rotate-45" />
    </Link>
  );
}
