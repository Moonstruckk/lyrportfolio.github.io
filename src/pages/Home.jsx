import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-5xl mx-auto flex flex-col justify-center">

      {/* Title */}
      <div className="mb-14">
        <h1 className="text-4xl md:text-5xl font-serif tracking-wide text-text-main">
          ABOUT ME
        </h1>
      </div>


      {/* Subtitle */}
      <div className="mb-16">
        <p className="text-text-muted text-sm md:text-base">
          2027届北京师范大学本科 · 汉语言文学专业（励耘实验班），拥有内容行业经验。
        </p>
      </div>


      {/* Main Intro */}
      <div className="mb-16 max-w-4xl">
        <p className="text-base md:text-lg leading-relaxed text-text-main">
          专注于人文、科技与叙事的交叉地带，主导完整内容开发流程——从知识框架搭建、书稿撰写、学术核校到成稿交付的全链路工作。
        </p>

        <p className="mt-6 text-base md:text-lg leading-relaxed text-text-main">
          同时具备品牌文案策划、学术论文研究、AI工具链开发等多方面能力，为文化传播、教育科技、学术出版等项目提供专业内容服务。
        </p>
      </div>


      {/* Navigation */}
      <div className="flex flex-wrap gap-5">
        {['Biography', 'Project', 'Papers', 'Works', 'Contact'].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase()}`}
            className="
              border border-gray-300
              px-7 py-3
              text-xs
              tracking-wide
              text-text-muted
              hover:border-text-main
              hover:text-text-main
              transition-all
              duration-300
            "
          >
            {item.toUpperCase()}
          </Link>
        ))}
      </div>

    </div>
  );
};

export default Home;