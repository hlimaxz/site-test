import React, { useState } from 'react';
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
  const [isHovered, setIsHovered] = useState(false);

  const baseClasses = 'rounded-2xl p-6 shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:-translate-y-1 cursor-default';
  const variantClasses = variant === 'white' ? 'bg-white' : 'bg-gradient-to-br';

  return <div
      className={`${baseClasses} ${variantClasses} ${className} ${isHovered ? 'ring-2 ring-white/50' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon && (
        <div className={`mb-4 transition-all duration-300 ${isHovered ? 'scale-110 rotate-3' : ''}`}>
          {icon}
        </div>
      )}
      {title && (
        <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${isHovered ? 'text-blue-600' : ''}`}>
          {title}
        </h3>
      )}
      {description && (
        <p className="text-gray-700 text-sm leading-relaxed">
          {description}
        </p>
      )}
      {children}
    </div>;
}