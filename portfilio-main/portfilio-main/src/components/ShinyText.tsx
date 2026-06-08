import { ReactNode } from 'react';

interface ShinyTextProps {
  children: ReactNode;
  className?: string;
  shimmerWidth?: number;
}

export default function ShinyText({
  children,
  className = '',
  shimmerWidth = 100,
}: ShinyTextProps) {
  return (
    <span
      className={`inline-block bg-clip-text text-transparent bg-[length:250%_100%] animate-shimmer ${className}`}
      style={{
        backgroundImage: `linear-gradient(
          110deg,
          #e5e5e5 0%,
          #e5e5e5 35%,
          #f97316 50%,
          #e5e5e5 65%,
          #e5e5e5 100%
        )`,
      }}
    >
      {children}
    </span>
  );
}
