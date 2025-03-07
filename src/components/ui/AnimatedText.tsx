
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className,
  delay = 0 
}) => {
  return (
    <div className={cn("overflow-hidden relative", className)}>
      <span 
        className="opacity-0 animate-text-reveal inline-block"
        style={{ animationDelay: `${delay}ms` }}
      >
        {text}
      </span>
    </div>
  );
};

export const AnimatedTitle: React.FC<AnimatedTextProps> = ({ 
  text, 
  className,
  delay = 0 
}) => {
  const words = text.split(' ');
  
  return (
    <h2 className={cn("flex flex-wrap", className)}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="overflow-hidden mr-2 relative">
          <span 
            className="opacity-0 animate-text-reveal inline-block"
            style={{ animationDelay: `${delay + wordIndex * 100}ms` }}
          >
            {word}
          </span>
        </span>
      ))}
    </h2>
  );
};

export const RevealText: React.FC<AnimatedTextProps & { tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' }> = ({ 
  text,
  tag = 'p',
  className 
}) => {
  const words = text.split(' ');
  const Component = tag;
  
  return (
    <Component className={cn("reveal-text", className)}>
      {words.map((word, index) => (
        <span
          key={index}
          className="inline-block overflow-hidden mx-1"
        >
          <span
            className="inline-block"
            style={{ '--index': index } as React.CSSProperties}
          >
            {word}
          </span>
        </span>
      ))}
    </Component>
  );
};

