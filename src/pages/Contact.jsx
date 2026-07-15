import React from 'react';
import { Mail, Github, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="
      pt-32
      pb-20
      px-6
      min-h-screen
      flex
      flex-col
      justify-center
      max-w-2xl
      mx-auto
      text-center
    ">

      <h2 className="text-4xl font-serif mb-8">
        Contact
      </h2>


      <p className="
        text-lg
        text-text-muted
        mb-16
        font-serif
        italic
      ">
        Open for collaboration in brand strategy and content creation.
      </p>


      <div className="
        flex
        flex-col
        gap-8
        items-center
      ">


        {/* Email */}
        <div className="
          flex
          items-center
          border border-border-color px-8 py-3 w-80
          gap-3
          text-base
        ">
          <Mail size={22} />
          <span>
            kazink@qq.com
          </span>
        </div>


        {/* Phone */}
        <div className="
          flex
          items-center
          border border-border-color px-8 py-3 w-80
          gap-3
          text-base
        ">
          <Phone size={22} />
          <span>
            13453423405
          </span>
        </div>


        {/* Github */}
<a
  href="https://github.com/moonstruckk"
  target="_blank"
  rel="noreferrer"
  className="
    flex
    items-center
    border border-border-color px-8 py-3 w-80
    gap-3
    text-base
    hover:text-text-muted
    transition-colors
  "
>
  <Github size={22} />
  <span>
    Github主页
  </span>
</a>


      </div>

    </div>
  );
};

export default Contact;