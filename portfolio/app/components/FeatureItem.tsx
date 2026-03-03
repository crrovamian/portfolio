interface FeatureItemProps {
  feature: string;
  index: number;
}

export function FeatureItem({ feature, index }: FeatureItemProps) {
  return (
    <div className="feature-item">
      <span className="feature-number">
        {String(index + 1).padStart(2, '0')}
      </span>
      <span className="text-zinc-300">{feature}</span>
    </div>
  );
}
