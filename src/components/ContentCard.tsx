import React from 'react';
interface ContentCardProps {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  variant?: 'white' | 'gradient';
}
export function ContentCard({
  icon,
  title,
  description,
  children,
  className = '',
  variant = 'white'
}: ContentCardProps) {
  const baseClasses = 'rounded-2xl p-6 shadow-lg';
  const variantClasses = variant === 'white' ? 'bg-white' : 'bg-gradient-to-br';
  return <div className={`${baseClasses} ${variantClasses} ${className}`}>
      {icon && <div className="mb-4">{icon}</div>}
      {title && <h3 className="text-lg font-bold mb-2">{title}</h3>}
      {description && <p className="text-gray-700 text-sm leading-relaxed">{description}</p>}
      {children}
    </div>;
}