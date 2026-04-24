export interface Project {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  tech: string[];
  year: string;
  features: string[];
  private?: boolean;
  repos?: { name: string; url: string }[];
  images?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'management-system',
    title: 'Management System',
    subtitle: 'Sistema de Gestión Integral para Centros Turísticos',
    description: 'Sistema integral de gestión para centros turísticos con venta de tickets, control de acceso y reportes en tiempo real.',
    fullDescription: 'Plataforma integral para la gestión de centros turísticos. Permite autenticación con múltiples roles, toma de órdenes y gestión de mesas, administración de productos con múltiples unidades de medida, registro de gastos, categorización flexible, gestión de cajas, entradas y anulaciones. Incluye módulo de compras, control de inventario y reportes estratégicos en tiempo real. Este proyecto fue clave para obtener una nueva inversión destinada a la modernización del centro turístico.',
    tech: ['Angular', 'Nest', 'PostgreSQL', 'JWT', 'Testing', 'TypeScript', 'Docker', 'Jenkins', 'Hexagonal'],
    year: '2026',
    features: [
      'Sistema de autenticación con múltiples roles',
      'Gestión de órdenes y mesas',
      'Administración de productos con múltiples unidades de medida',
      'Registro de gastos y categorización flexible',
      'Gestión de cajas, entradas y anulaciones',
      'Módulo de compras y control de inventario',
      'Reportes estratégicos en tiempo real',
    ],
    images: [
      '/projects/managementsystem01.jpg',
      '/projects/managementsystem02.jpg',
      '/projects/managementsystem03.jpg',
      '/projects/managementsystem04.jpg',
      '/projects/managementsystem05.jpg',
      '/projects/managementsystem06.jpg',
      '/projects/managementsystem07.jpg',
      '/projects/managementsystem08.jpg',
      '/projects/managementsystem09.jpg',
    ],
  },
  {
    id: 2,
    slug: 'citas-medicas',
    title: 'Citas Médicas',
    subtitle: 'Plataforma de Gestión Médica',
    description: 'Plataforma de gestión de citas médicas con agenda digital, recordatorios automáticos y historial de pacientes.',
    fullDescription: 'Sistema para clínicas y consultorios médicos. Permite el registro de médicos y pacientes, con lista de médicos por especialidad y disponibilidad horaria. Los doctores pueden gestionar su agenda del día, mientras que los pacientes visualizan sus propias citas. Incluye autenticación con roles diferenciados (doctor/paciente) y agenda digital en tiempo real.',
    tech: ['Angular', 'Nest', 'PostgreSQL', 'JWT', 'SpringBoot', 'SpringSecurity', 'Java', 'Testing', 'TypeScript', 'Docker', 'Jenkins', 'Hexagonal'],
    year: '2025',
    features: [
      'Registro de médicos y pacientes',
      'Lista de médicos por especialidad con horario disponible',
      'Agenda diaria para doctores',
      'Visualización de citas para pacientes',
      'Autenticación con roles (doctor/paciente)',
    ],
    repos: [
      { name: 'FRONTEND', url: 'https://github.com/efbsplexusteam/plexsalud-frontend-angular' },
      { name: 'BACKEND', url: 'https://github.com/crrovamian/plexsalud-backend' },
    ],
  },
  {
    id: 3,
    slug: 'video-streaming',
    title: 'Plataforma de Streaming de Video',
    subtitle: 'Plataforma de Streaming de Video',
    description: 'Plataforma completa de streaming de video con funcionalidades de gestión de canales, comentarios y recomendaciones.',
    fullDescription: 'Plataforma completa de streaming de video que permite la subida de archivos con generación automática de miniaturas, sistema de comentarios en tiempo real con likes y dislikes, suscripciones a canales, gestión de playlists (privadas para suscriptores y públicas), detección automática de aspect ratio para optimizar la visualización de videos verticales u horizontales, y almacenamiento flexible en la nube o local. Incluye transcodificación de video, sistema de recomendaciones personalizadas y comentarios anidados.',
    tech: ['Nest', 'Angular', 'AWS S3', 'JWT', 'OpenApi'],
    year: '2024',
    features: [
      'Subida de archivos con generación de miniaturas',
      'Listas de reproducción públicas y privadas para suscriptores',
      'Sistema de comentarios en tiempo real',
      'Likes y dislikes con contadores',
      'Detección automática de aspect ratio para video vertical/horizontal',
      'Almacenamiento en nube (AWS S3) o local',
      'Suscripciones a canales',
      'Sistema de recomendaciones personalizadas',
    ],
    repos: [
      { name: 'FRONTEND', url: 'https://github.com/crrovamian/youtube-frontend-clone' },
      { name: 'BACKEND', url: 'https://github.com/crrovamian/youtube-backend-clone' },
    ],
  },
  {
    id: 4,
    slug: 'paddy-management',
    title: 'Paddy Management',
    subtitle: 'Sistema de Gestión Agrícola Integral',
    description: 'Sistema de gestión agrícola para el cultivo de arroz, seguimiento de cosechas, inventario y ventas.',
    fullDescription: 'Aplicación especializada para la gestión integral de cultivos de arroz (paddy). Permite el seguimiento completo desde el campo hasta el producto terminado, incluyendo parámetros de campo, planta, procesadora y destino. Incluye módulo de parámetros de laboratorio para análisis de calidad, sistema de agrupación por lotes para comparaciones detalladas entre análisis de laboratorio y producción real. Gestiona arroz terminado en diferentes calidades y subproductos. El repositorio se perdió, pero el proyecto sigue en producción.',
    tech: ['Node', 'Angular', 'PostgreSQL'],
    year: '2023',
    features: [
      'Seguimiento integral desde el campo',
      'Parámetros de campo, planta, procesadora y destino',
      'Módulo de parámetros de laboratorio',
      'Agrupación por lotes para comparaciones',
      'Análisis comparativo laboratorio vs producción real',
      'Gestión de arroz terminado por calidades',
      'Control de subproductos',
      'Reportes financieros y control de gastos por parcela',
      'Pronóstico de producción',
    ],
  },
  {
    id: 5,
    slug: 'portfolio',
    title: 'Portfolio Personal',
    subtitle: 'Sitio Web Personal',
    description: 'Mi portfolio personal desarrollado con Next.js, GSAP y Tailwind CSS. Muestra mis proyectos, habilidades y experiencia profesional.',
    fullDescription: 'Portfolio personal interactivo desarrollado con Next.js 14, utilizando GSAP para animaciones suaves y Tailwind CSS para styling. Incluye carrusel de imágenes para proyectos, diseño responsive y optimizado para SEO.',
    tech: ['Next.js', 'TypeScript', 'GSAP', 'Tailwind CSS'],
    year: '2026',
    features: [
      'Diseño responsive y moderno',
      'Animaciones con GSAP',
      'Carrusel de imágenes interactivo',
      'Optimizado para SEO',
      'Desplegado en GitHub Pages',
      'Código abierto en GitHub',
    ],
    repos: [
      { name: 'GITHUB', url: 'https://github.com/crrovamian/portfolio' },
    ],
  },
  {
    id: 6,
    slug: 'springboot-kafka-saga',
    title: 'SpringBoot Kafka Saga',
    subtitle: 'Patrón SAGA con Spring Boot y Kafka',
    description: 'Implementación del patrón SAGA para gestión de transacciones distribuidas.',
    fullDescription: 'Implementación del patrón SAGA utilizando Spring Boot y Apache Kafka para gestión de transacciones distribuidas. Showcase técnico con Docker y OpenApi.',
    tech: ['SpringBoot', 'Apache Kafka', 'Docker', 'OpenApi'],
    year: '2026',
    features: [
      'Patrón SAGA implementado',
      'Transacciones distribuidas',
      'Docker-compose para desarrollo',
      'OpenApi documentation',
    ],
    repos: [
      { name: 'GITHUB', url: 'https://github.com/crrovamian/springboot-kafka-saga' },
    ],
  },
  {
    id: 7,
    slug: 'argocd-deployment',
    title: 'ArgoCD Deployment',
    subtitle: 'Despliegue con ArgoCD y GitOps',
    description: 'Guía completa de instalación de ArgoCD y despliegue con GitOps',
    fullDescription: 'Repositorio que contiene una guía completa para instalar y configurar ArgoCD en un cluster Kubernetes. Incluye instrucciones paso a paso para el despliegue inicial, configuración de credenciales y acceso a la UI. El proyecto implementa un flujo práctico de GitOps desplegando una aplicación Nginx con HTML dinámico que muestra información del pod (hostname e IP). Soporta Ingress con Traefik y Nginx, y está preparado para funcionar con Minikube en entorno local.',
    tech: ['ArgoCD', 'Kubernetes', 'GitOps', 'Nginx', 'Traefik', 'Minikube'],
    year: '2026',
    features: [
      'Guía de instalación de ArgoCD paso a paso',
      'Configuración de credenciales iniciales',
      'Acceso a UI mediante port-forward',
      'Aplicación con HTML dinámico',
      'Soporte para Ingress con Traefik y Nginx',
      'Flujo completo de GitOps',
      'Compatible con Minikube para desarrollo local',
    ],
    repos: [
      { name: 'GITHUB', url: 'https://github.com/crrovamian/argocd-deployment' },
    ],
  },
  {
    id: 8,
    slug: 'sistema-atencion-cliente-ia',
    title: 'Sistema de Atención al Cliente con IA',
    subtitle: 'Asistente Virtual con IA para Atención al Cliente',
    description: 'Sistema de atención al cliente basado en IA para automatizar procesos operativos (pedidos, reclamos, citas).',
    fullDescription: 'Sistema de atención al cliente basado en IA para automatizar procesos operativos como pedidos, reclamos y citas. Incluye flujos conversacionales con integración de voz (STT/TTS) para mejorar accesibilidad y experiencia de usuario. Aplica enfoque RAG para mejorar la precisión de respuestas y reducir errores de información. Diseño arquitectura backend escalable con control de acceso y gestión eficiente de datos.',
    tech: ['LangChain', 'LangGraph', 'Langfuse', 'ChromaDB', 'Next.js', 'FastAPI', 'Python'],
    year: '2026',
    features: [
      'Diseño e implementación de sistema de atención al cliente basado en IA',
      'Automatización de procesos operativos (pedidos, reclamos, citas)',
      'Flujos conversacionales con integración de voz (STT/TTS)',
      'Enfoque RAG para mejorar precisión de respuestas',
      'Arquitectura backend escalable con control de acceso',
      'Gestión eficiente de datos',
    ],
  },
  {
    id: 9,
    slug: 'sistema-ajustes-inventario',
    title: 'Sistema de Ajustes de Inventario',
    subtitle: 'Integración con Software Legacy',
    description: 'Aplicación web integrada con sistema legacy en SQL Server sin acceso a código fuente para gestión de inventario.',
    fullDescription: 'Aplicación web integrada con un sistema legacy en SQL Server sin acceso a código fuente. Detecté y corregí inconsistencias en inventario que provocaban la anulación de ~7.5% de las operaciones diarias. Implementé reportes operativos que mejoraron la visibilidad del inventario y redujeron errores en la toma de decisiones en ~30%.',
    tech: ['Spring Boot', 'Spring Security', 'Thymeleaf', 'SQL Server', 'Docker'],
    year: '2025',
    features: [
      'Integración con sistema legacy sin acceso a código fuente',
      'Detección y corrección de inconsistencias (~7.5% operaciones diarias anuladas)',
      'Reportes operativos (~30% reducción de errores en decisiones)',
    ],
    private: true,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}