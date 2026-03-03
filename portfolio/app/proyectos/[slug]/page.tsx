import { projects, getProject } from '@/app/lib/projects';

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

import ProjectPageClient from './ProjectPageClient';

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = getProject(resolvedParams.slug);
  
  return <ProjectPageClient project={project} slug={resolvedParams.slug} />;
}
