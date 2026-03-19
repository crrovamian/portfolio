interface FeatureItemProps {
  feature: string;
}

export function FeatureItem({ feature }: FeatureItemProps) {
  return (
    <div className="feature-item">
      <span className="text-zinc-300">{feature}</span>
    </div>
  );
}
