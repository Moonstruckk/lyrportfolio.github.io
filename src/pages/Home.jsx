import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto flex flex-col justify-center">
      {/* Part 1: Subtitle */}
      <div className="mb-12">
        <p className="text-text-muted text-sm md:text-base tracking-widest uppercase">
          2027届北京师范大学本科 · 汉语言文学专业（励耘实验班）
        </p>
      </div>

      {/* Part 2: Main Intro */}
      <div className="mb-20 space-y-8">
        <h1 className="text-3xl md:text-5xl font-serif leading-relaxed text-text-main">
          专注于人文、科技与叙事的交叉地带，主导完整内容开发流程——从知识框架搭建、书稿撰写、学术核校到成稿交付的全链路工作。
        </h1>
        <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-2xl">
          同时具备品牌文案策划、学术论文研究、AI工具链开发等多方面能力，为文化传播、教育科技、学术出版等项目提供专业内容服务。
        </p>
      </div>

      {/* Part 3: Navigation Buttons */}
      <div className="flex flex-wrap gap-4">
        {['Biography', 'Project', 'Papers', 'Works', 'Contact'].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase()}`}
            className="thin-border px-8 py-3 text-sm tracking-wide hover:bg-text-main hover:text-white transition-colors duration-300"
          >
            {item.toUpperCase()}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
