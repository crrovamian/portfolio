'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from './lib/projects';
import { ProjectCard } from './components/ProjectCard';
import { Footer } from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const headerItems = headerRef.current?.querySelectorAll('.animate-item');
      if (headerItems) {
        gsap.fromTo(
          headerItems,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
            ease: 'power4.out',
            delay: 0.3,
          }
        );
      }

      gsap.fromTo(
        '.project-card',
        { y: 80, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: projectsRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.to('.project-card', {
        y: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      const cards = document.querySelectorAll('.project-card');
      cards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { scale: 1.02, duration: 0.3, ease: 'power2.out' });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { scale: 1, duration: 0.3, ease: 'power2.out' });
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="grid-bg" />

      <header ref={headerRef} className="header">
        <div className="header-decoration header-decoration-1" />
        <div className="header-decoration header-decoration-2" />
        <div className="header-decoration header-decoration-3" />

        <p className="animate-item header-label">
          Portfolio
        </p>

        <h1 className="animate-item header-title">
          DESARROLLADOR
          <br />
          <span className="header-title-accent">FULLSTACK</span>
        </h1>

        <p className="animate-item header-description">
          Construcción de soluciones digitales robustas.{' '}
          <span className="text-zinc-600">/</span>/ ERP, apps médicas, plataformas de video y más.
        </p>

        <div className="animate-item flex gap-4">
          <div className="badge-stats">
            <span className="text-lime-400">▶</span> 5 PROYECTOS
          </div>
          <div className="badge-stats">
            <span className="text-yellow-400">⚡</span> FULLSTACK
          </div>
        </div>
      </header>

      <section ref={projectsRef} className="projects-section">
        <div className="section-header">
          <div className="section-line" />
          <h2 className="section-title">Proyectos</h2>
        </div>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
