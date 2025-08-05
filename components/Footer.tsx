import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-black border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-6 lg:px-8 py-6 text-center text-slate-500 dark:text-slate-400">
        <p>&copy; {new Date().getFullYear()} Mohammed Rifad. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;