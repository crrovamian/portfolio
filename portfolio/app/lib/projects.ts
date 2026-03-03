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
  unavailable?: boolean;
  repoUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'erp-tickets',
    title: 'ERP Tickets',
    subtitle: 'Centro Turístico & Venta de Tickets',
    description: 'Sistema integral de gestión para centros turísticos con venta de tickets, control de acceso y reportes en tiempo real.',
    fullDescription: 'Plataforma integral para la gestión de centros turísticos que combina venta de tickets, control de acceso mediante códigos QR, inventario de productos y análisis de datos en tiempo real. Diseñado para escalar y manejar alto volumen de transacciones.',
    tech: ['Next.js', 'PostgreSQL', 'Stripe', 'QR Scanner', 'Redis'],
    year: '2025',
    features: [
      'Sistema de venta de tickets online y presencial',
      'Control de acceso con scanner QR',
      'Dashboard en tiempo real con métricas',
      'Gestión de inventario de productos',
      'Reportes y analíticas avanzadas',
      'Integración con pasarelas de pago',
    ],
  },
  {
    id: 2,
    slug: 'citas-medicas',
    title: 'Citas Médicas',
    subtitle: 'Software de Citas Médicas',
    description: 'Plataforma de gestión de citas médicas con agenda digital, recordatorios automáticos y historial de pacientes.',
    fullDescription: 'Sistema completo para clínicas y consultorios médicos que permite gestionar citas, historiales clínicos, recetas y comunicaciones con pacientes. Optimiza la agenda de los profesionales de la salud y reduce no-shows.',
    tech: ['React', 'Node.js', 'MongoDB', 'WebSockets', 'Twilio'],
    year: '2024',
    features: [
      'Agenda digital con disponibilidad en tiempo real',
      'Recordatorios automáticos por SMS/email',
      'Historial clínico digital',
      'Gestión de recetas médicas',
      'Panel para doctores y pacientes',
      'Video-consultas integradas',
    ],
  },
  {
    id: 3,
    slug: 'youtube-clone',
    title: 'YouTube Clone',
    subtitle: 'Clon de YouTube',
    description: 'Réplica funcional de YouTube con streaming de video, comentarios en tiempo real, sistema de likes y suscripciones.',
    fullDescription: 'Plataforma de streaming de video completa con todas las funcionalidades principales de YouTube. Incluye transcodificación de video, sistema de comentarios, likes/dislikes, suscripciones a canales y recomendaciones personalizadas.',
    tech: ['Next.js', 'FFmpeg', 'AWS S3', 'Clerk Auth', 'Prisma'],
    year: '2024',
    features: [
      'Subida y transcodificación de videos',
      'Sistema de comentarios en tiempo real',
      'Likes, dislikes y suscripciones',
      'Canal de usuario con playlists',
      'Sistema de recomendaciones',
      'Comentarios anidados y replies',
    ],
  },
  {
    id: 4,
    slug: 'paddy-management',
    title: 'Paddy Management',
    subtitle: 'Software de Gestión de Arroz',
    description: 'Sistema de gestión agrícola para el cultivo de arroz, seguimiento de cosechas, inventario y ventas.',
    fullDescription: 'Aplicación especializada para la gestión de cultivos de arroz (paddy). Permite trackear sembrados, cosechas, inventario de grano, ventas y finanzas de la finca agrícola.lost el repositorio pero el proyecto sigue en producción.',
    tech: ['Vue.js', 'Firebase', 'Charts.js', 'Tailwind'],
    year: '2023',
    features: [
      'Control de sembrados y cosechas',
      'Gestión de inventario de grano',
      'Seguimiento de ventas y clientes',
      'Reportes financieros',
      'Control de gastos por parcela',
      'Pronóstico de producción',
    ],
    unavailable: true,
  },
  {
    id: 5,
    slug: 'proyecto-privado',
    title: 'Proyecto Privado',
    subtitle: 'Proyecto Empresarial',
    description: 'Software personalizado para empresa privada. No disponible públicamente por acuerdo de confidencialidad.',
    fullDescription: 'Desarrollo a medida para empresa del sector industrial. Incluye módulos de gestión de pedidos, inventario, facturación y CRM. Proyecto bajo acuerdo de confidencialidad, no disponible para visualización pública.',
    tech: ['TypeScript', 'React', 'Node.js', 'PostgreSQL'],
    year: '2022',
    features: [
      'Gestión de pedidos y clientes',
      'Sistema de facturación',
      'CRM empresarial',
      'Dashboard de métricas',
      'Control de inventario',
      'Reportes personalizados',
    ],
    private: true,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}
