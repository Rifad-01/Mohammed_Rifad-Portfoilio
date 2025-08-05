import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-20 md:py-28 scroll-mt-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{title}</h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
      </div>
      {children}
    </section>
  );
};

export default Section;