'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects, type Project } from '@/app/lib/projects';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { TechBadge } from '@/app/components/TechBadge';
import { FeatureItem } from '@/app/components/FeatureItem';
import { ProjectCardLink } from '@/app/components/ProjectCardLink';
import { ImageCarousel } from '@/app/components/ImageCarousel';

gsap.registerPlugin(ScrollTrigger);

interface ProjectPageClientProps {
  project: Project | undefined;
  slug: string;
}

export default function ProjectPageClient({ project, slug }: ProjectPageClientProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.animate-in',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.2,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">404</h1>
          <p className="text-zinc-400 mb-8">Proyecto no encontrado</p>
          <Link href="/" className="text-lime-400 hover:underline">
            ← Volver al portfolio
          </Link>
        </div>
      </div>
    );
  }

  const otherProjects: Project[] = projects.filter(p => p.slug !== slug);

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white">
      <Navbar showBack />

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-in mb-4 flex items-center gap-3">
            <span className="font-mono text-lime-400 text-sm">{project.year}</span>
            {project.private && (
              <span className="badge-private">Privado</span>
            )}
          </div>

          <h1 className="animate-in text-5xl md:text-7xl font-black tracking-tighter mb-2 leading-none">
            {project.title}
          </h1>
          <p className="animate-in text-xl text-zinc-500 uppercase tracking-wider mb-8">
            {project.subtitle}
          </p>

          {project.images && project.images.length > 0 && (
            <div className="animate-in mb-12">
              <ImageCarousel images={project.images} alt={project.title} />
            </div>
          )}

          <div className="animate-in mb-12">
            <p className="text-zinc-300 leading-relaxed text-xl">
              {project.fullDescription}
            </p>
          </div>

          <div className="animate-in mb-12">
            <h2 className="section-title mb-4">Tecnologías</h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t: string) => (
                <TechBadge key={t} tech={t} />
              ))}
            </div>
          </div>

          <div className="animate-in mb-16">
            <h2 className="section-title mb-6">Características</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature: string) => (
                <FeatureItem key={feature} feature={feature} />
              ))}
            </div>
          </div>

          {project.repos && project.repos.length > 0 && (
            <div className="animate-in flex gap-4 mb-16">
              {project.repos.map((repo) => (
                <a 
                  key={repo.name} 
                  href={repo.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-secondary"
                >
                  {repo.name.toUpperCase()} →
                </a>
              ))}
            </div>
          )}

          {project.private && (
            <div className="animate-in notice-box mb-16">
              <p className="text-zinc-500 font-mono text-sm">
                Este proyecto está bajo acuerdo de confidencialidad y no puede ser compartido públicamente.
              </p>
            </div>
          )}
        </div>
      </main>

      <section className="px-6 py-16 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title mb-8">Otros proyectos</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {otherProjects.slice(0, 4).map((p: Project) => (
              <ProjectCardLink key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      <Footer minimal />
    </div>
  );
}
