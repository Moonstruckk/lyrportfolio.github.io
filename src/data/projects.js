const base = import.meta.env.BASE_URL;
export const projects = [
 {
  id: "modern-literature-museum",

  company: "中国现代文学馆",

  logo: "/images/logos/文学馆logo.jpg",

  role: "展览文案策划",

   cardDesc:
    "参与文学展览策划、视频脚本创作及新媒体内容生产，探索文学研究成果的公共传播。",

  overview:
    "中国现代文学馆是国内重要的现代文学研究与公共文化机构。实习期间，围绕文学展览、新媒体传播与公众文化推广展开内容策划工作，将文学研究成果转化为适用于展览空间、视频传播与数字媒介的叙事内容。",

  tags: [
  "展览叙事",
  "文案策划",
  "文化传播",
  "文学研究"
],


  cover:
    "/images/projects/literature-museum.png",



  sections: [

    

  {
  type: "timeline",

  title: "01 / 展览文案策划",

  subtitle:
    "《春蚕丝不尽 子夜到黎明——纪念茅盾先生诞辰130周年特展》文案独立策划人",

  timeline: [
  {
  tag: "INNOVATION",
  title: "创新展览形式",
  content: [
    "Example -  为方便观众理解小说《子夜》里错综复杂的资本博弈，与团队共同设计一套基于自然语言处理的NLP知识图谱触摸屏：提取小说文本中的人物、工厂、资本流向等实体关系，将《子夜》里的人物关系、资本流向做成可交互网络图。"
  ],
  illustrations: [
    "images/projects/maodun-nlp-graph1.png",
    "images/projects/maodun-nlp-graph2.png"
  ]
},
  {
    title: '策划思路：从“作家介绍”到“时代叙事”',
    tag: "STRATEGY",
    content: [
      "传统人物展览容易停留于生平罗列。本项目以文学作品与时代经验为线索，将个人创作历程置于20世纪中国文学发展脉络中。"
    ],
    images: [
  { src: `${base}images/projects/maoduntitle00.png`, alt: "引子" },
  { src: `${base}images/projects/maoduntitle01.png`, alt: "第一章" },
  { src: `${base}images/projects/maoduntitle02.png`, alt: "第二章" },
  { src: `${base}images/projects/maoduntitle03.png`, alt: "第三章" },
  { src: `${base}images/projects/maoduntitle04.png`, alt: "第四章" }
]
    
  },
  {
    title: "工作流程",
    tag: "PROCESS",
    steps: [
      {
        label: "资料搜集",
        note: "整理展览相关的公开出版物、研究资料与既有陈列内容，作为文案撰写的信息基础。"
      },
      {
        label: "文学史研究与文本分析",
        note: "梳理茅盾各阶段代表作品与所处时代背景的关联，提炼可用于公众叙事的核心线索。"
      },
      {
        label: "展览主题拆解",
        note: "将研究成果拆解为可视化的展览单元与分区逻辑，形成叙事框架雏形。"
      },
      {
        label: "文案框架搭建",
        image: "images/projects/茅盾目录.png"
      },
      {
  label: "文字撰写与修改",
  cards: [
    {
      badge: "《立报·言林》连载《你往哪里跑？》的原版报纸",
      text: [
        { t: "说明词：", bold: true },
        { t: "茅盾的《你往哪里跑》直击抗战初期每个中国人的灵魂拷问——你往哪里跑？是逃避苟安，还是挺身救国？" }
      ]
    },
    {
      badge: "茅盾晚年写的《可爱的故乡》",
      text: [
        { t: "说明词：", bold: true },
        { t: "吴越文化兼具海纳百川的包容性、勇于创新的进取性以及崇文重教的人文性特质，王国维、章太炎、蔡元培、鲁迅为其近代杰出代表。茅盾深得这一传统文化的滋养，内敛外张，将这份浸入血脉的乡愁与精神底色，凝结成这篇情真意切的《可爱的故乡》。" }
      ]
    }
  ]
},
      {
        label: "配合展陈呈现",
        note: "与中央戏剧学院舞台设计专业张华翔教授对接文学内容逻辑与空间视觉呈现需求。",
        gallery: [
          "images/projects/展陈1.jpg",
          "images/projects/展陈2.jpg",
          "images/projects/展陈3.jpg",
          "images/projects/展陈4.jpg"
        ]
      }
    ]
  }
],

},



    {
      type:"items",

      title:"02 / 视频脚本",


      items:[

        {
          title:"《喧嚣归世界，静留给文学》",

          tags:[
            "Brand Video",
            "Scriptwriting"
          ],


          content:
            "创作五四青年节主题红色场馆开屏宣推短视频脚本，通过文学馆空间、作家手稿与阅读体验构建视频叙事。该视频于2026年5月4日至5日在滴滴北京地区网约车车载屏播放。",


          stats:
            "1,308,314 播放量",


          files:[
            {
              name:"视频脚本 PDF",
              url:"/files/喧嚣归世界开屏宣推视频脚本_梁悦然.pdf"
            }
          ],


          links:[
            {
              name:"视频链接",
              url:"https://weixin.qq.com/sph/AIQYWYoqvG"
            }
          ]
        },



        {
          title:"《扬动红色文化》",

          tags:[
            "Cultural Communication",
            "Video Script"
          ],


          content:
            "参与红色文化主题宣传视频脚本创作，通过影像叙事方式呈现文学馆公共文化传播价值。",


          files:[
            {
              name:"视频脚本 PDF",
              url:"/files/扬动红色文化开屏宣推视频脚本_梁悦然.pdf"
            }
          ],


          links:[
            {
              name:"视频链接",
              url:"https://mp.weixin.qq.com/s/lE_8MgWZxKAGaczmBzx6_Q"
            }
          ]
        }

      ]
    },



    {
      type:"links",

      title:"03 / 推文撰写",

      content:
        "负责微信公众号内容撰写与排版，参与世界读书周、长征主题展览等活动资料整理、宣传材料撰写与公众传播。",


      links:[
        {
          name:"新展预告 | 春蚕丝不尽 子夜到黎明——纪念茅盾先生诞辰130周年特展",
          url:"https://mp.weixin.qq.com/s/3DZxP36byZbCrpccOJMBmw"
        },
        {
          name:"【e企“京”彩】|“e企共读 京彩同行”北京市互联网企业“全民阅读活动周”主场活动成功举办",
          url:"https://mp.weixin.qq.com/s/IprgJO3i5Ko5FKtM4-EQ8w"
        }
      ]
    }

  ]
},

 {
  id: "banyu",

  company: "伴鱼教育科技",

  logo: "/images/logos/伴鱼logo.jpg",

  role: "语文教研实习生",

  cardDesc:
    "参与小学语文智能学习产品内容研发，协助课程内容制作、资源整合与教学材料优化，了解互联网教育产品的内容生产流程。",

  overview:
    "伴鱼教育科技是一家专注于数字教育与智能学习产品研发的互联网企业。实习期间参与小学语文课程内容研发工作，围绕课程资料整理、内容审核、教研支持与产品上线协作等环节，理解教育产品从教学设计到内容交付的完整流程。",

  tags: [
  "教育科技",
  "课程开发",
  "内容编辑",
  "教材研发"
],
   cover:
    "/images/projects/banyu.png",

  sections: [

    {

      type: "workflow",

  title: "01 / Content Production Workflow",

  content:
    "参与小学语文智能课程研发流程，围绕课程体系分析、内容结构整理、故事化脚本设计与资源上线支持等环节展开工作，探索传统语文教学内容向数字化学习产品的转化方式。",

  steps: [

    {
      number: "01",

      title: "课程体系梳理",

      desc:
        "基于语文课程标准及学校课程体系，整理不同阶段学习目标、核心知识点与能力要求，协助分析校内学习内容与智能课程体系之间的对应关系。",

      file: {
        name: "示例：课程内容整理",
        url: "/files/伴鱼课程内容整理_梁悦然.pdf"
      }
    },


    {
      number: "02",

      title: "智能课程脚本设计",

      desc:
        "参与课程脚本内容开发，将语文知识点融入角色冒险、情境任务与互动练习，通过故事化叙事提升线上学习体验。",

      file: {
        name: "示例：课程脚本",
        url: "/files/伴鱼课程脚本_梁悦然.pdf"
      }
    },


    {
      number: "03",

      title: "教学资源优化",

      desc:
        "协助完成课程内容审核、题目设计与资源整理工作，关注知识准确性、表达规范性以及用户学习路径的连贯性。"
    }

      ]

    },

    {

      type: "cards",

      title: "02 / What I Learned",

      cards: [

        {

          title: "Curriculum Development",

          tag: "Education",

          content:
            "理解小学语文课程内容研发流程，学习如何将教学目标转化为数字化学习资源。"

        },

        {

          title: "Content Quality",

          tag: "Editing",

          content:
            "参与课程内容审核与校对，在教学场景下关注知识准确性、语言表达与内容规范。"

        },

        {

          title: "Cross-team Collaboration",

          tag: "Workflow",

          content:
            "与教研及产品团队协作完成课程内容交付，了解教育产品研发中的跨岗位合作机制。"

        }

      ]

    },

    {

      type: "highlight",

      title: "03 / Capability Development",

      highlights: [

        "课程内容研发流程认知",

        "教育产品内容生产",

        "教学资源整理与整合",

        "内容审核与文字校对",

        "互联网团队协作",

        "数字教育产品"

      ]

    }

  ]

},



 {
  id: "tsinghua-press",

  company: "清华大学出版社",

  role: "编辑校对",

  logo: "/images/logos/出版社logo.jpg",

  cardDesc:
    "参与学术出版物编辑与校对流程，关注文本规范、学术表达与出版质量控制。",


  overview:
    "参与清华大学出版社学术出版项目，围绕稿件校对、文字规范审查与文本质量控制展开工作。在出版流程中学习学术内容从原始稿件到规范化出版文本的转化过程。",


  tags: [
  "学术编辑",
  "校对审稿",
  "出版流程",
  "文字质量控制"
],



  sections: [

    {

      type:"workflow",


      title:"01 / Editorial Workflow",


      content:
        "参与学术出版物编辑流程，对稿件进行细读与规范检查，关注文字表达、格式规范与内容一致性，协助提升出版文本质量。",


      steps:[

        {
          number:"01",
          title:"文本审阅",
          desc:
            "通读稿件内容，关注语言表达、格式规范及文本逻辑。"
        },


        {
          number:"02",
          title:"规范校核",
          desc:
            "依据出版规范检查标点、术语、格式等细节问题。"
        },


        {
          number:"03",
          title:"质量优化",
          desc:
            "通过细节修订提升文本准确性与阅读体验。"
        }

      ]

    },



    {

      type:"cards",


      title:"02 / Editing Skills",


      cards:[

        {
          title:"Academic Text Processing",

          content:
            "面对学术性较强的文本，培养对专业术语、论述逻辑与表达准确性的敏感度。",

          tag:"Academic Reading"
        },


        {
          title:"Detail-oriented Review",

          content:
            "在校对过程中关注文字、格式与信息一致性，建立系统化文本检查习惯。",

          tag:"Quality Control"
        },


        {
          title:"Publishing Process",

          content:
            "了解学术出版从稿件处理到成稿输出的基本流程，理解编辑工作在知识传播中的作用。",

          tag:"Publishing"
        }

      ]

    },



    {

      type:"highlight",


      title:"03 / Capability Development",


      highlightss:[

        "学术文本阅读与分析能力",

        "出版规范意识",

        "细节审查与质量控制能力",

        "复杂信息处理能力"

      ]

    }

  ]

}

  

];