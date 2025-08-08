import React from 'react';

const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center -mt-20 py-10 md:py-0">
      <div className="container mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
        
        {/* Image container - Appears first on mobile */}
        <div className="order-1 md:order-2 flex-shrink-0">
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full blur-2xl opacity-50 dark:opacity-40"></div>
            <img
              src="/rifaddoc-removebg-preview (1).png"
              alt="Mohammed Rifad"
              className="relative w-full h-full object-cover rounded-full border-4 border-slate-200 dark:border-slate-700 shadow-2xl"
            />
          </div>
        </div>

        {/* Text content - Appears second on mobile */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
            Hi, I'm <span className="text-blue-500 dark:text-blue-400">Mohammed Rifad</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto md:mx-0">
            A Flutter App Developer with hands-on experience in Dart and Flutter for cross-platform mobile app development. Passionate about building efficient, user-friendly apps with clean UI and solid functionality.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="bg-blue-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30 dark:shadow-blue-400/20 w-full sm:w-auto cursor-pointer"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, '#projects')}
              className="bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-white font-semibold px-8 py-3 rounded-full hover:bg-slate-300 dark:hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto cursor-pointer"
            >
              View My Work
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
