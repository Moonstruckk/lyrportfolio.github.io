import { useParams, Link, Navigate } from "react-router-dom";
import { projects } from "../data/projects";
const base = import.meta.env.BASE_URL;


const ProjectDetail = () => {

  const { id } = useParams();


  const project = projects.find(
    (p) => p.id === id
  );


  if (!project) {
    return <Navigate to="/project" replace />;
  }



  return (

    <div className="pt-32 pb-24 px-6 max-w-5xl mx-auto">


      {/* Back */}
      <Link
        to="/project"
        className="text-sm text-text-muted hover:text-text-main"
      >
        ← 返回项目列表
      </Link>



      {/* Header */}

      <div className="mt-10 mb-20">
        {
project.cover && (
  <div className="mb-12">
    <img
      src={`${import.meta.env.BASE_URL}${project.cover.replace(/^\//, '')}`}
      alt={project.company}
      className="
        w-full
        h-80
        object-cover
        border
      "
    />
  </div>
)
}


        <h1 className="text-5xl font-serif mb-4">
          {project.company}
        </h1>


        <p className="text-sm uppercase tracking-widest text-text-muted">
          {project.role}
        </p>


        <p className="mt-8 max-w-3xl text-lg leading-relaxed">
          {project.overview}
        </p>


        <div className="flex flex-wrap gap-2 mt-8">

          {project.tags.map(tag=>(
            <span
              key={tag}
              className="
              px-3 py-1
              border
              text-xs
              text-text-muted
              "
            >
              {tag}
            </span>
          ))}

        </div>


      </div>





      {/* Sections */}

      


      <div className="space-y-20">


      {
      project.sections.map((section,index)=>(


        <section
          key={index}
          className="border-t pt-10"
        >



        <h2 className="text-2xl font-serif mb-6">
          {section.title}
        </h2>



        {
        section.subtitle &&
        (
          <h3 className="text-lg mb-6 text-text-muted">
            {section.subtitle}
          </h3>
        )
        }
        
        {section.timeline && (
  <div className="mt-16">
    {section.timeline.map((item, index) => (
      <div
        key={index}
        className="
          grid grid-cols-[56px_1fr] md:grid-cols-[140px_1fr]
          gap-x-6 md:gap-x-12
          py-10
          border-t border-border-color
          first:border-t-0 first:pt-0
        "
      >
        {/* 左栏：序号 + 分类标签 */}
        <div className="pt-1">
          <div className="font-serif font-light text-4xl md:text-5xl text-border-color leading-none mb-3">
            {String(index + 1).padStart(2, '0')}
          </div>
          <div className="text-[10px] tracking-[0.3em] text-text-muted uppercase">
            {item.tag}
          </div>
        </div>

        {/* 右栏：内容 */}
        <div className="max-w-3xl">
          {/* 只有存在 title 时才渲染标题（第一项没有 title） */}
          {item.title && (
            <h3 className="text-xl md:text-2xl font-serif mb-5 text-text-main">
              {item.title}
            </h3>
          )}

          {/* 普通文字内容 —— 第一行作为身份声明，字号更大更重；其余作为支撑例子，更小更浅 */}
{item.content && (
  <div className="space-y-3 mb-6">
    {item.content.map((text, i) =>
      i === 0 ? (
        <p
          key={i}
          className="text-base md:text-lg font-serif text-text-main leading-snug"
        >
          {text}
        </p>
      ) : (
        <p
          key={i}
          className="text-sm text-text-muted leading-relaxed"
        >
          {text}
        </p>
      )
    )}
  </div>
)}

{/* 可选：多张配图（illustrations），在 timeline 某一项数据里加 illustrations 字段即可显示，一行两张，按 1444×783 比例适配 */}
{item.illustrations && (
  <div className="mb-6 grid grid-cols-2 gap-4 max-w-2xl">
    {item.illustrations.map((src, i) => (
      <div
        key={i}
        className="aspect-[1444/783] border border-border-color overflow-hidden"
      >
        <img
          src={`${base}${src}`}
          alt={`${item.title || item.tag} ${i + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
    ))}
  </div>
)}

          {/* 五张窄竖图 —— 策划思路板块专用，同一行排列 */}
{item.images && (
  <div className="flex gap-3">
    {item.images.map((img, i) => (
      <div
        key={i}
        className="flex-1 aspect-[2.5/5] bg-bg-alt border border-border-color flex items-center justify-center overflow-hidden"
      >
        {img.src ? (
          <img
            src={img.src}
            alt={img.alt || ''}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-[10px] text-text-muted">图 {i + 1}</span>
        )}
      </div>
    ))}
  </div>
)}

          {/* 工作流程 —— 数字序号 + 每项下方可自由添加图片/说明文字/卡片/图集 */}
          {item.steps && (
            <div className="space-y-10">
              {item.steps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="text-sm text-text-muted font-serif shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm md:text-base text-text-main">
                      {step.label}
                    </p>

                    {/* 可选：说明文字，在 steps 数据里给某一项加 note 字段即可显示 */}
                    {step.note && (
                      <p className="text-sm text-text-muted mt-2 leading-relaxed max-w-xl">
                        {step.note}
                      </p>
                    )}

                    {/* 可选：单张配图（如脚本目录图），在 steps 数据里给某一项加 image 字段即可显示 */}
                    {step.image && (
                      <div className="mt-3 w-full max-w-md border border-border-color overflow-hidden">
                        <img
                          src={`${base}${step.image}`}
                          alt={step.label}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    )}

                    {/* 可选：展品说明词卡片，在 steps 数据里给某一项加 cards: [{ badge, text }, ...] 字段即可显示，支持并排两张 */}
                    {step.cards && (
                      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {step.cards.map((card, ci) => (
                          <div
                            key={ci}
                            className="border border-border-color p-5 bg-bg-alt"
                          >
                            <span className="inline-block text-xs tracking-[0.15em] text-text-muted uppercase border border-border-color px-2.5 py-1 mb-3">
                              {card.badge}
                            </span>
                            <p className="text-sm text-text-main leading-relaxed">
                              {card.text.map((segment, si) =>
                                segment.bold ? (
                                  <strong key={si} className="font-bold text-text-main">
                                    {segment.t}
                                  </strong>
                                ) : (
                                  <span key={si}>{segment.t}</span>
                                )
                              )}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* 可选：多图图集（如布展成果），在 steps 数据里给某一项加 gallery: [] 字段即可显示 */}
                    {step.gallery && (
                      <div className="mt-4 grid grid-cols-2 gap-4 max-w-2xl">
                        {step.gallery.map((src, gi) => (
                          <div
                            key={gi}
                            className="aspect-[4/3] border border-border-color overflow-hidden"
                          >
                            <img
                              src={`${base}${src}`}
                              alt={`${step.label} ${gi + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
)}




        {
        section.content &&
        (
          <p className="leading-relaxed max-w-4xl">
            {section.content}
          </p>
        )
        }
        {
section.type === "workflow" &&
section.steps && (

  <div className="grid md:grid-cols-3 gap-6 mt-10">

    {section.steps.map((step) => (

      <div
        key={step.number}
        className="border p-6 bg-bg-alt"
      >

        <div className="text-sm text-text-muted mb-4">
          {step.number}
        </div>

        <h3 className="text-lg font-serif mb-3">
          {step.title}
        </h3>

        <p className="text-sm leading-relaxed">
          {step.desc}
        </p>

        {step.file && (

         <a
  href={`${import.meta.env.BASE_URL}${step.file.url.replace(/^\//, "")}`}
  target="_blank"
  rel="noreferrer"
  className="
    mt-6
    block
    border
    border-gray-200
    bg-gray-50
    px-5
    py-4
    transition-all
    duration-300
    hover:border-gray-400
    hover:bg-white
    hover:shadow-sm
  "
>

  <div className="text-[10px] uppercase tracking-[0.25em] text-gray-500 mb-2">
    DOCUMENT
  </div>

  <div className="text-sm font-medium text-text-main">
    {step.file.name}
  </div>

  <div className="mt-2 text-[11px] text-text-muted">
    Open PDF ↗
  </div>

</a>

        )}

      </div>

    ))}

  </div>

)
}
{
section.type === "cards" &&
section.cards &&
(
  <div className="grid md:grid-cols-3 gap-6 mt-10">

    {
    section.cards.map(card=>(

      <div
        key={card.title}
        className="
        border
        p-6
        flex
        flex-col
        "
      >

        <span
          className="
          text-xs
          text-text-muted
          uppercase
          tracking-widest
          mb-4
          "
        >
          {card.tag}
        </span>


        <h3 className="text-xl font-serif mb-4">
          {card.title}
        </h3>


        <p className="text-sm leading-relaxed">
          {card.content}
        </p>


      </div>

    ))
    }

  </div>
)
}
{
section.type === "highlight" &&
section.highlightss &&
(
  <div className="grid md:grid-cols-2 gap-4 mt-10">

    {
    section.highlightss.map(item=>(

      <div
        key={item}
        className="
        border
        p-5
        text-sm
        "
      >
        {item}
      </div>

    ))
    }

  </div>
)
}



        {
        section.highlights &&
        (
          <div className="grid md:grid-cols-3 gap-4 mt-8">

          {
          section.highlights.map(item=>(

            <div
              key={item}
              className="
              bg-bg-alt
              border
              p-5
              text-sm
              "
            >
              {item}
            </div>

          ))
          }

          </div>
        )
        }





        {
        section.collaboration &&
        (
          <div className="mt-8 p-6 border bg-bg-alt">

            <p className="text-sm leading-relaxed">
              {section.collaboration}
            </p>

          </div>
        )
        }






        {
        section.items &&
        (

          <div className="space-y-8 mt-10">


          {
          section.items.map(item=>(


            <div
key={item.title}
className="
border
p-8
bg-bg-alt
"
>


              <h3 className="
text-xl
font-serif
mb-4
tracking-wide
">
                {item.title}
              </h3>



              <div className="flex flex-wrap gap-2 mb-6">

              {
              item.tags?.map(tag=>(

                <span
                  key={tag}
                  className="text-xs border px-2 py-1"
                >
                  {tag}
                </span>

              ))
              }

              </div>



              <p className="leading-relaxed">
                {item.content}
              </p>




              {
              item.stats &&
              (
                <div className="
                mt-8
                text-3xl
                font-serif
                "
                >
                  {item.stats}
                </div>
              )
              }





              {
              item.files &&
              (
                <div className="mt-8 flex flex-wrap gap-3">

                {
                item.files.map(file=>(

                  <a
                    key={file.name}
                    href={`${import.meta.env.BASE_URL}${file.url.replace(/^\//, "")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="
                    border
                    px-5
                    py-3
                    text-sm
                    hover:bg-text-main
                    hover:text-white
                    transition
                    "
                  >
                    {file.name}
                  </a>

                ))
                }

                </div>
              )
              }




              {
              item.links &&
              (
                <div className="mt-4 flex flex-wrap gap-3">

                {
                item.links.map(link=>(

                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="
                    text-sm
                    underline
                    "
                  >
                    {link.name}
                  </a>

                ))
                }

                </div>
              )
              }


            </div>


          ))
          }


          </div>

        )
        }







        {
        section.files &&
        (
          <div className="mt-8">

          {
          section.files.map(file=>(

            <a
              key={file.name}
              href={`${import.meta.env.BASE_URL}${file.url.replace(/^\//,"")}`}
              target="_blank"
              rel="noreferrer"
              className="
              inline-block
              border
              px-5
              py-3
              text-sm
              hover:bg-text-main
              hover:text-white
              transition
              "
            >
              {file.name}
            </a>

          ))
          }

          </div>
        )
        }







        {
        section.links &&
        (
          
          <div className="mt-8 space-y-3">

  {section.links.map(link => (

    <a
      key={link.name}
      href={link.url}
      target="_blank"
      rel="noreferrer"
      className="
        block
        underline
        text-sm
        leading-relaxed
        hover:text-text-main
        transition-colors
      "
    >
      {link.name}
    </a>

  ))}

</div>
        )
        }



        </section>


      ))
      }


      </div>


    </div>

  );
};


export default ProjectDetail;