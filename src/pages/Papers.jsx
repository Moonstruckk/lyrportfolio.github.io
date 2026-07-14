import React from 'react';
import { Download } from 'lucide-react';
import { papers } from '../data/papers';

const PaperCard = ({ paper }) => {
  return (
    <div className="max-w-3xl mx-auto thin-border p-12 md:p-16 text-center">

      {/* Category */}
      <span className="
        inline-block
        px-3
        py-1
        mb-6
        text-xs
        border
        border-text-main
        rounded-full
        uppercase
        tracking-wider
      ">
        {paper.category}
      </span>


      {/* Title */}
      <h2 className="
        text-2xl
        md:text-4xl
        font-serif
        mb-8
        leading-tight
      ">
        {paper.title}
      </h2>


      {/* Divider */}
      <div className="
        w-16
        h-px
        bg-text-main
        mx-auto
        mb-8
      "></div>


      {/* Abstract */}
      <p className="
        text-text-muted
        text-lg
        leading-relaxed
        mb-10
        font-serif
        italic
      ">
        {paper.abstract}
      </p>


      {/* Award */}
      <div className="mb-10">

        <span className="
          text-sm
          font-bold
          text-text-main
          bg-bg-alt
          px-4
          py-2
          inline-block
        ">
          {paper.award}
        </span>

      </div>


      {/* PDF Button */}
      <a
        href={`${import.meta.env.BASE_URL}${paper.pdf.replace(/^\//, "")}`}
        target="_blank"
        rel="noreferrer"
        className="
          inline-flex
          items-center
          gap-2
          px-8
          py-3
          bg-text-main
          text-white
          text-sm
          tracking-wide
          hover:bg-text-muted
          transition-colors
        "
      >
        <Download size={16} />
        下载全文 PDF
      </a>

    </div>
  );
};

const Papers = () => {
  return (
    <div className="pt-32 pb-20 px-6">

      {
        papers.map((paper) => (
          <PaperCard
            key={paper.id}
            paper={paper}
          />
        ))
      }

    </div>
  );
};

export default Papers;
