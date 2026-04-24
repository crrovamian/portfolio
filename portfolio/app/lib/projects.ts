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
];

export function getProject(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}
