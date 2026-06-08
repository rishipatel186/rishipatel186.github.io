import { useEffect, useState, useRef } from 'react';

interface ShuffleTextProps {
  text: string;
  className?: string;
  duration?: number;
  characterSet?: string;
}

export default function ShuffleText({
  text,
  className = '',
  duration = 1000,
  characterSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*',
}: ShuffleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;
    
    setIsAnimating(true);
    let iteration = 0;
    const totalIterations = text.length;
    const intervalDuration = duration / (totalIterations * 3);

    intervalRef.current = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split('')
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            if (char === ' ') return ' ';
            return characterSet[Math.floor(Math.random() * characterSet.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        setDisplayText(text);
        setIsAnimating(false);
      }

      iteration += 1 / 3;
    }, intervalDuration);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [text, duration, characterSet]);

  const triggerAnimation = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    let iteration = 0;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            if (char === ' ') return ' ';
            return characterSet[Math.floor(Math.random() * characterSet.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        setDisplayText(text);
        setIsAnimating(false);
      }

      iteration += 1 / 3;
    }, duration / (text.length * 3));
  };

  return (
    <span
      className={`inline-block font-mono ${className}`}
      onMouseEnter={triggerAnimation}
    >
      {displayText}
    </span>
  );
}
