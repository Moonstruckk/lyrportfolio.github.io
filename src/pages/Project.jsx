import React from 'react';

const ProjectCard = ({ company, role, desc, tags, logoText }) => {
  return (
    <div className="thin-border flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
      {/* Logo Placeholder */}
      <div className="h-40 bg-bg-alt flex items-center justify-center border-b border-border-color">
        <span className="text-2xl font-bold text-text-muted opacity-50">{logoText}</span>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">{company}</h3>
          <p className="text-sm text-text-muted uppercase tracking-wider mb-4">{role}</p>
          <p className="text-text-main leading-relaxed mb-6 flex-grow">{desc}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag, i) => (
            <span key={i} className="px-2 py-1 bg-bg-alt text-xs text-text-muted border border-border-color">
              {tag}
            </span>
          ))}
        </div>

        <button className="mt-auto w-full py-3 thin-border text-sm tracking-wide hover:bg-text-main hover:text-white transition-colors">
          查看详情
        </button>
      </div>
    </div>
  );
};

const Project = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-serif mb-16 text-center">Selected Projects</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard 
          company="伴鱼教育科技"
          role="内容策划"
          desc="负责小学智能学习App的内容开发，设计知识图谱与互动脚本，提升用户学习粘性。"
          tags={["EdTech", "Content Strategy", "Scripting"]}
          logoText="Logo"
        />
        <ProjectCard 
          company="清华大学出版社"
          role="编辑校对"
          desc="参与多部学术专著的校对与编辑工作，确保出版内容的严谨性与规范性。"
          tags={["Academic", "Editing", "Publishing"]}
          logoText="Logo"
        />
        <ProjectCard 
          company="中国现代文学馆"
          role="展览文案"
          desc="策划文学展览文案，撰写新媒体推广内容，连接传统文学与年轻受众。"
          tags={["Curation", "Copywriting", "Culture"]}
          logoText="Logo"
        />
      </div>
    </div>
  );
};

export default Project;
