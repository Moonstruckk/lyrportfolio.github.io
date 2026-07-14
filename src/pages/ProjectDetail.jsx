import { useParams, Link, Navigate } from "react-router-dom";
import { projects } from "../data/projects";


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
              "
            >


              <h3 className="text-xl font-serif mb-4">
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