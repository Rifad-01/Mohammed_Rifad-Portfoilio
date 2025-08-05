import React, { useState } from 'react';
import Section from './Section';
import { MailIcon } from './icons/MailIcon';
import { PhoneIcon } from './icons/PhoneIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { GitHubIcon } from './icons/GitHubIcon';

// A type for the popup state
type PopupInfo = {
  title: string;
  message: string;
};

const Contact: React.FC = () => {
  const [popupInfo, setPopupInfo] = useState<PopupInfo | null>(null);

  // This function now just shows a popup instead of trying to send an email.
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPopupInfo({
      title: 'Demonstration Only',
      message: 'This contact form is for UI demonstration purposes. The submission feature is currently inactive.',
    });
  };
  
  const contactLinks = [
    { Icon: PhoneIcon, text: '+91 9947420929', href: 'tel:+919947420929' },
    { Icon: MailIcon, text: 'rifadferoke01@gmail.com', href: 'mailto:rifadferoke01@gmail.com' },
    { Icon: LinkedInIcon, text: 'LinkedIn', href: 'https://www.linkedin.com/in/mohammed-rifad-p-464977253/' },
    { Icon: GitHubIcon, text: 'GitHub', href: 'https://github.com/rifad-p' },
  ];

  const closePopup = () => setPopupInfo(null);

  return (
    <Section id="contact" title="Get In Touch">
      {popupInfo && (
        <div 
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-[999] px-4 transition-opacity duration-300"
          aria-modal="true"
          role="dialog"
          onClick={closePopup}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-2xl text-center max-w-sm w-full transform transition-all duration-300 scale-100 opacity-100"
          >
            <p className="text-4xl mb-4">
              {'ℹ️'}
            </p>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white">{popupInfo.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 mt-2">
              {popupInfo.message}
            </p>
            <button
              onClick={closePopup}
              className="mt-6 bg-blue-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Contact Info</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Feel free to reach out to me for any inquiries or opportunities. I'm always open to discussing new projects and creative ideas.
          </p>
          <div className="space-y-4">
             {contactLinks.map(({Icon, text, href}) => (
                 <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 group">
                    <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-full border border-slate-200 dark:border-slate-700 group-hover:border-blue-500 dark:group-hover:border-blue-400">
                        <Icon className="w-5 h-5"/>
                    </div>
                    <span>{text}</span>
                 </a>
             ))}
          </div>
        </div>
        <div className="bg-slate-100/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 rounded-lg p-8 shadow-lg">
          
          <form onSubmit={handleFormSubmit}>
              <div className="mb-5">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">Your Name</label>
                <input type="text" id="name" name="from_name" className="bg-slate-200 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John Doe" required />
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">Your Email</label>
                <input type="email" id="email" name="from_email" className="bg-slate-200 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@example.com" required />
              </div>
              <div className="mb-5">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                <textarea id="message" name="message" rows={4} className="bg-slate-200 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Your message..." required></textarea>
              </div>
            <button type="submit" className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-3 text-center transition-all duration-300 transform hover:scale-105">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;