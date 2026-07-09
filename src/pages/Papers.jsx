import React from 'react';
import { Download } from 'lucide-react';

const PaperCard = () => {
  return (
    <div className="max-w-3xl mx-auto thin-border p-12 md:p-16 text-center">
      <span className="inline-block px-3 py-1 mb-6 text-xs border border-text-main rounded-full uppercase tracking-wider">Academic Paper</span>
      
      <h2 className="text-2xl md:text-4xl font-serif mb-8 leading-tight">
        论文标题：在此处填入你的优秀学年论文题目
      </h2>
      
      <div className="w-16 h-px bg-text-main mx-auto mb-8"></div>
      
      <p className="text-text-muted text-lg leading-relaxed mb-10 font-serif italic">
        此处填入论文摘要。简要概括研究背景、方法论以及核心结论。保持文字优雅、学术性强。
      </p>
      
      <div className="mb-10">
        <span className="text-sm font-bold text-text-main bg-bg-alt px-4 py-2 inline-block">
          获 2025 年度优秀学年论文
        </span>
      </div>
      
      <button className="inline-flex items-center gap-2 px-8 py-3 bg-text-main text-white text-sm tracking-wide hover:bg-text-muted transition-colors">
        <Download size={16} />
        下载全文 PDF
      </button>
    </div>
  );
};

const Papers = () => {
  return (
    <div className="pt-32 pb-20 px-6">
      <PaperCard />
    </div>
  );
};

export default Papers;
