import React from 'react';

const WorkCard = ({ type, title, desc }) => {
  return (
    <div className="thin-border p-6 flex flex-col h-full hover:bg-bg-alt transition-colors group">
      <div className="mb-4">
        <span className="text-xs font-bold text-text-muted uppercase tracking-widest border-b border-border-color pb-1">
          {type}
        </span>
      </div>
      <h3 className="text-lg font-serif mb-3 group-hover:text-text-muted transition-colors">{title}</h3>
      <p className="text-sm text-text-muted leading-relaxed mb-6 flex-grow">
        {desc}
      </p>
      <button className="mt-auto text-xs font-bold uppercase tracking-wide border-b border-transparent hover:border-text-main pb-0.5 self-start">
        在线阅读
      </button>
    </div>
  );
};

const Works = () => {
  // 模拟数据
  const works = Array.from({ length: 6 }).map((_, i) => ({
    type: i % 2 === 0 ? "书评" : "随笔",
    title: `作品标题示例 ${i + 1}`,
    desc: "这是一段简短的作品简介，概括了文章的核心观点或故事梗概。"
  }));

  return (
    <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-serif mb-16 text-center">Selected Works</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {works.map((work, idx) => (
          <WorkCard key={idx} {...work} />
        ))}
      </div>
    </div>
  );
};

export default Works;
