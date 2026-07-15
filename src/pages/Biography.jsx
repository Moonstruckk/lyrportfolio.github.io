import React from 'react';
 
const Biography = () => {
  return (
    <div className="pt-24 pb-16 px-6 max-w-5xl mx-auto">
      {/* Page Title */}
      <h1 className="
text-2xl
font-serif
mb-10
border-l-4
border-text-main
pl-3
-ml-16
">
  Biography
</h1>
 
      {/* ============ 纸张容器：整份简历放在一个浅色边框的长方形里 ============ */}
      <div
className="
border
border-border-color
rounded-xl
shadow-[0_8px_30px_rgba(0,0,0,0.04)]
bg-white
overflow-hidden
"
>
        <div className="grid md:grid-cols-[260px_1fr]">
 
          {/* ============ 左侧栏 ============ */}
          <aside className="p-6 md:border-r border-border-color bg-gray-50">
 
            {/* 照片 */}
<div className="
  w-[100px]
  h-[140px]
  mx-auto
  mb-6
  border
  border-border-color
  overflow-hidden
">

  <img
    src={`${import.meta.env.BASE_URL}images/profile-photo.jpg`}
    alt="梁悦然"
    className="
      w-full
      h-full
      object-cover
    "
  />

</div>

 {/* 简介 */}
<p
  className="
  text-[13px]
  font-serif
  leading-relaxed
  tracking-wide
  text-text-main
  mb-6
  "
>
  汉语言文学专业背景，兼具扎实的人文研究能力与敏锐的文字表达能力。
  擅长将复杂信息转化为具有传播力的内容叙事，具备深度内容策划、专题文案撰写经验。
  关注文化传播、品牌内容与用户沟通之间的连接，能够从选题策划到成稿交付完成完整内容流程。
</p>
            {/* 个人信息 */}
            <section className="mb-6">
              <h3 className="
text-[12px]
font-serif
font-semibold
tracking-[0.15em]
mb-3
text-text-muted
">个人信息</h3>
              <ul className="
space-y-2
text-[13px]
font-serif
leading-relaxed
text-text-main
">
                <li>
                  <span className="block text-text-muted text-[10px]">出生年月</span>
                  2005.9.8
                </li>
                <li>
                  <span className="block text-text-muted text-[10px]">政治面貌</span>
                  共青团员
                </li>
                <li>
                  <span className="block text-text-muted text-[10px]">电话</span>
                  13453423405
                </li>
                <li>
                  <span className="block text-text-muted text-[10px]">邮箱</span>
                  kazink@qq.com
                </li>
                <li>
                  <span className="block text-text-muted text-[10px]">居住地</span>
                  北京市海淀区
                </li>
              </ul>
            </section>
 
            {/* 教育背景 */}
            <section className="mb-6">
              <h3 className="
text-[12px]
font-serif
font-semibold
tracking-[0.15em]
mb-3
text-text-muted
">教育背景</h3>
              <div className="
text-[13px]
font-serif
leading-relaxed
">
                <p className="font-bold">北京师范大学</p>
                <p className="text-text-muted mt-0.5">
                  本科 · 汉语言文学（励耘实验班）(2023-2027)
                </p>
                <p className="text-text-muted mt-0.5">GPA：3.67</p>
              </div>
            </section>
 
            {/* 荣誉资质 / 技能证书 */}
            <section className="mb-6">
  <h3 className="
    text-[12px]
    font-serif
    font-semibold
    tracking-[0.15em]
    mb-3
    text-text-muted
  ">
    荣誉资质
  </h3>

  <ul className="
    space-y-2
    text-[13px]
    font-serif
    leading-relaxed
    text-text-main
  ">
    <li>多次获京师三等奖学金</li>
    <li>CET-6（大学英语六级）558分通过</li>
    <li>国家普通话水平测试一级乙等</li>
    <li>大学计算机考试免修通过</li>
  </ul>
</section>


{/* 核心标签 */}
<section>
  <h3 className="
    text-[12px]
    font-serif
    font-semibold
    tracking-[0.15em]
    mb-3
    text-text-muted
  ">
    核心标签
  </h3>

  <div className="flex flex-wrap gap-2">

    {[
'品牌内容策划',
'文化项目策划',
'文案创作',
'用户内容运营',
'跨部门协作'
].map((tag) => (

      <span
        key={tag}
        className="
          px-2
          py-1
          bg-gray-50
          text-[11px]
          font-serif
          text-text-muted
          border
          border-border-color
        "
      >
        {tag}
      </span>

    ))}

  </div>
</section>
          </aside>
 
          {/* ============ 右侧主内容 ============ */}
          <main className="p-6 md:p-8">
            <h2 className="text-xl font-bold mb-3">梁悦然</h2>
            <p className="text-sm text-text-muted mb-6">求职意向：品牌策划 / 内容策划 / 市场传播</p>
 
            <div className="border-t border-border-color pt-6">

  <h3 className="
  text-[15px]
  font-serif
  font-semibold
  mb-6
  flex
  items-center
  relative
  overflow-hidden
">

  <span 
    className="
    inline-block
    w-1
    h-4
    bg-text-main
    mr-3
    z-10
    "
  />

  <span
    className="
    relative
    z-10
    pr-8
    "
  >
    核心工作经历（均为在校期间实习）
  </span>


  <span
    className="
    absolute
    left-0
    top-1/2
    -translate-y-1/2
    h-6
    w-full
    bg-gradient-to-r
    from-gray-100
    via-gray-50
    to-transparent
    -z-0
    "
  />

</h3>

 
              {/* 工作经历 1 */}
<div className="mb-8">

  <div className="flex flex-wrap justify-between items-baseline mb-0.5">
    <h4 className="text-[15px] font-bold">
      中国现代文学馆
    </h4>

    <span className="text-[11px] text-text-muted">
      2026.03 - 2026.06
    </span>
  </div>


  <p className="text-[11px] text-text-muted uppercase tracking-wider mb-2">
    展览文案策划
  </p>


  <ul
    className="
    space-y-2
    text-sm
    font-serif
    text-text-main
    leading-loose
    list-disc
    list-outside
    pl-4
    "
  >

    <li>
      <span className="font-bold">
        展览策划：
      </span>
      独立负责《春蚕丝不尽 子夜到黎明——纪念茅盾先生诞辰130周年特展》展览文案策划，将文学研究成果转化为面向公众的展览叙事，完成主题单元、展品说明及展陈语言设计。
    </li>


    <li>
      <span className="font-bold">
        内容转化：
      </span>
      梳理文学史料与作家文本，建立文学研究、空间展示与公众传播之间的内容逻辑，并与中央戏剧学院舞台设计专业团队协作推进展览呈现。
    </li>


    <li>
      <span className="font-bold">
        公共文化传播：
      </span>
      参与红色文化主题视频脚本及微信公众号内容策划，负责文学馆活动、新展预告等传播材料撰写，推动文学内容向大众媒介转化。
    </li>

  </ul>

</div>



{/* 工作经历 2 */}
<div className="mb-8">

  <div className="flex flex-wrap justify-between items-baseline mb-0.5">
    <h4 className="text-[15px] font-bold">
      伴鱼教育科技（北京读我网络技术有限公司）
    </h4>

    <span className="text-[11px] text-text-muted">
      2024.05 - 2024.08
    </span>
  </div>


  <p className="text-[11px] text-text-muted uppercase tracking-wider mb-2">
    语文教研实习生
  </p>


  <ul
    className="
    space-y-2
    text-sm
    font-serif
    text-text-main
    leading-loose
    list-disc
    list-outside
    pl-4
    "
  >

    <li>
      <span className="font-bold">
        课程研发：
      </span>
      参与小学语文智能课程研发，围绕课程体系分析、知识点整理、故事化脚本设计与学习资源开发展开工作，协助完成线上课程内容生产。
    </li>


    <li>
      <span className="font-bold">
        内容设计：
      </span>
      将语文知识点转化为适用于数字学习场景的互动内容，参与课程脚本、练习设计及教学资源优化，提升学习内容的可理解性与趣味性。
    </li>


    <li>
      <span className="font-bold">
        协作支持：
      </span>
      配合教研、产品等团队完成课程内容审核与上线流程，参与内容校对、资源整理及交付工作。
    </li>

  </ul>

</div>



{/* 工作经历 3 */}
<div>

  <div className="flex flex-wrap justify-between items-baseline mb-0.5">
    <h4 className="text-[15px] font-bold">
      清华大学出版社
    </h4>

    <span className="text-[11px] text-text-muted">
      2026.06 - 2026.08
    </span>
  </div>


  <p className="text-[11px] text-text-muted uppercase tracking-wider mb-2">
    编辑校对
  </p>


  <ul
    className="
    space-y-2
    text-sm
    font-serif
    text-text-main
    leading-loose
    list-disc
    list-outside
    pl-4
    "
  >

    <li>
      <span className="font-bold">
        编辑流程：
      </span>
      参与学术出版物编辑流程，对稿件进行细读、文字规范审查与格式校核，协助完成从原始稿件到规范化出版文本的转化。
    </li>


    <li>
      <span className="font-bold">
        质量控制：
      </span>
      关注文字表达、术语使用、格式规范及内容一致性，通过细节修订提升出版文本质量与阅读体验。
    </li>


    <li>
      <span className="font-bold">
        能力培养：
      </span>
      在学术文本处理过程中培养专业阅读、信息分析与细节审查能力，建立系统化编辑工作方法。
    </li>

  </ul>

</div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
 
export default Biography;