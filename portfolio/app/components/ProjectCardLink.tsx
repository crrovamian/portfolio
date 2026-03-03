import Link from 'next/link';
import type { Project } from '@/app/lib/projects';

interface ProjectCardLinkProps {
  project: Project;
}

export function ProjectCardLink({ project }: ProjectCardLinkProps) {
  return (
    <Link
      href={`/proyectos/${project.slug}`}
      className="group p-6 bg-zinc-900 border border-zinc-800 hover:border-lime-400 transition-colors block"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-lime-400 text-xs">
          {project.year}
        </span>
        <span className="w-2 h-2 bg-zinc-700 group-hover:bg-lime-400 transition-colors" />
      </div>
      <h3 className="text-xl font-bold mb-1 group-hover:text-lime-400 transition-colors">
        {project.title}
      </h3>
      <p className="text-zinc-500 text-sm">{project.subtitle}</p>
    </Link>
  );
}
