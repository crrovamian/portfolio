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
  const aboutRef = useRef<HTMLDivElement>(null);
  const interestsRef = useRef<HTMLDivElement>(null);
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

      gsap.fromTo(
        '.about-content',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: aboutRef.current,
            start: 'top 75%',
          },
        }
      );

      gsap.fromTo(
        '.interest-card',
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: interestsRef.current,
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
          Desarrollo de aplicaciones web.{' '}
          <span className="text-zinc-600">/</span>/ Sistemas de gestión, apps y más.
        </p>

        <div className="animate-item flex gap-4">
          <div className="badge-stats">
            <span className="text-yellow-400">⚡</span> FULLSTACK
          </div>
        </div>
      </header>

      <section ref={aboutRef} className="about-section">
        <div className="section-header">
          <div className="section-line" />
          <h2 className="section-title">Sobre Mí</h2>
        </div>
        <div className="about-content px-6 md:px-16 lg:px-24 pb-32">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">
                Miguel Cruz
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                Desarrollador fullstack con experiencia en desarrollo web. 
                Enfoque práctico orientado a resolver problemas reales con código mantenible.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Lleva proyectos desde el desarrollo hasta su despliegue en producción, 
                siempre con ojo en la escalabilidad y la mantenibilidad.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="stat-card">
                <span className="text-4xl font-black text-lime-400">5+</span>
                <span className="text-zinc-500 text-sm font-mono uppercase tracking-wider">Años de experiencia</span>
              </div>
              <div className="stat-card">
                <span className="text-4xl font-black text-yellow-400">∞</span>
                <span className="text-zinc-500 text-sm font-mono uppercase tracking-wider">Curiosidad</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={interestsRef} className="interests-section">
        <div className="section-header px-6 md:px-16 lg:px-24">
          <div className="section-line" />
          <h2 className="section-title">Stack</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-6 md:px-16 lg:px-24 pb-32">
          {[
            { icon: '⚡', title: 'Frontend', desc: 'Angular, React, Next.js, TypeScript, Thymeleaf' },
            { icon: '🔧', title: 'Backend', desc: 'NestJS, Spring Boot, Node.js, Express, FastAPI' },
            { icon: '💾', title: 'Bases de Datos', desc: 'PostgreSQL, MongoDB, Redis, ChromaDB' },
            { icon: '🐳', title: 'DevOps', desc: 'Docker, Kubernetes, ArgoCD, Terraform, Jenkins, CI/CD' },
            { icon: '📨', title: 'Streaming', desc: 'Apache Kafka' },
            { icon: '☁️', title: 'Cloud', desc: 'AWS EC2, AWS S3, despliegue en producción' },
            { icon: '🧪', title: 'Testing', desc: 'Pruebas unitarias en frontend' },
            { icon: '🤖', title: 'IA', desc: 'LangGraph, LangChain, Langfuse' },
          ].map((interest, i) => (
            <div key={i} className="interest-card">
              <span className="text-3xl mb-4 block">{interest.icon}</span>
              <h4 className="text-xl font-bold mb-2">{interest.title}</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">{interest.desc}</p>
            </div>
          ))}
        </div>
      </section>

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
