import { ReactNode } from 'react';

interface GlowingBorderProps {
  children: ReactNode;
  className?: string;
}

export default function GlowingBorder({ children, className = '' }: GlowingBorderProps) {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-orange-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
      <div className="relative">{children}</div>
    </div>
  );
}
