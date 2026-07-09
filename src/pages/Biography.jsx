import React from 'react';

const BioItem = ({ year, title, desc, type }) => (
  <div className="flex gap-6 md:gap-12 mb-12 group">
    <div className="w-24 flex-shrink-0">
      <span className="text-xs font-bold text-text-muted tracking-wider">{year}</span>
    </div>
    <div className="flex-grow border-l border-border-color pl-8 relative">
      <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-bg-main border border-text-main group-hover:bg-text-main transition-colors"></div>
      <h3 className="text-lg font-bold mb-1">{title}</h3>
      <p className="text-sm text-text-muted mb-2 uppercase tracking-wide">{type}</p>
      <p className="text-text-main leading-relaxed">{desc}</p>
    </div>
  </div>
);

const Biography = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-serif mb-16 border-b border-border-color pb-4">About Me</h2>
      
      <div className="grid md:grid-cols-2 gap-16">
        {/* Left Column: Education & Experience */}
        <div>
          <h3 className="text-xs font-bold text-text-muted mb-8 uppercase tracking-widest">Education & Experience</h3>
          
          <BioItem 
            year="2023-2027"
            title="北京师范大学"
            type="本科 · 汉语言文学 (励耘实验班)"
            desc="主修文学理论与创意写作，辅修数字人文。"
          />
          
          <BioItem 
            year="2025"
            title="伴鱼教育科技"
            type="内容策划"
            desc="负责小学智能学习App的内容开发，设计知识图谱与互动脚本。"
          />

          <BioItem 
            year="2024"
            title="清华大学出版社"
            type="学术编辑"
            desc="参与学术专著的校对与编辑工作，确保出版内容的严谨性。"
          />
        </div>

        {/* Right Column: Skills */}
        <div>
          <h3 className="text-xs font-bold text-text-muted mb-8 uppercase tracking-widest">Skills</h3>
          <div className="space-y-6">
            {[
              "Content Writing & Strategy",
              "Academic Research & Citation",
              "Editorial Workflow Management",
              "Cultural Communication",
              "AI-assisted Workflow (Python/LLMs)"
            ].map((skill, idx) => (
              <div key={idx} className="thin-border p-4 flex justify-between items-center hover:bg-bg-alt transition-colors">
                <span className="font-serif">{skill}</span>
                <span className="w-2 h-2 bg-text-main rounded-full"></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;
