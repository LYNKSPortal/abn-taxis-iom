import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  dark = false,
}) => {
  const bgColor = dark ? 'bg-black' : 'bg-[#0a0a0a]';
  
  return (
    <section id={id} className={`py-20 ${bgColor} ${className}`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {children}
      </div>
    </section>
  );
};
