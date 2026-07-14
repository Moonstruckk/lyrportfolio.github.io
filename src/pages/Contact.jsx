import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-20 px-6 min-h-screen flex flex-col justify-center max-w-2xl mx-auto text-center">
      <h2 className="text-4xl font-serif mb-8">Contact</h2>
      <p className="text-lg text-text-muted mb-16 font-serif italic">
        Open for collaboration in humanities, content creation and interdisciplinary projects.
      </p>

      <div className="flex flex-col gap-6 items-center">
        <a href="mailto:yourname@example.com" className="flex items-center gap-3 text-xl hover:text-text-muted transition-colors">
          <Mail size={20} />
          kazink@qq.com
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-xl hover:text-text-muted transition-colors">
          <Github size={20} />
          github.com/yourname
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-xl hover:text-text-muted transition-colors">
          <Linkedin size={20} />
          linkedin.com/in/yourname
        </a>
      </div>
    </div>
  );
};

export default Contact;
