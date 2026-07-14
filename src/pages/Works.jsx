import React from "react";
import { works } from "../data/works";


const WorkCard = ({work}) => {

  const isSocial = 
work.type === "小红书" ||
work.platform === "小红书";


  return (

    <div
  className="
  thin-border
  bg-white
  p-6
  flex
  flex-col
  h-full
  shadow-sm
  hover:shadow-md
  transition-all
  group
  "
>


      <div className="mb-4 flex justify-between">

        <span
          className="
          text-xs
          font-bold
          text-text-muted
          uppercase
          tracking-widest
          border-b
          border-border-color
          pb-1
          "
        >
          {work.type}
        </span>


        {
        isSocial &&
        (
          <span className="
          text-xs
          text-text-muted
          ">
            {work.views}
          </span>
        )
        }


      </div>



      <h3
        className="
        text-lg
        font-serif
        mb-3
        group-hover:text-text-muted
        transition-colors
        "
      >
        {work.title}
      </h3>



      <p
        className="
        text-sm
        text-text-muted
        leading-relaxed
        mb-6
        flex-grow
        "
      >
        {work.desc}
      </p>



      <a
        href={work.link || work.url}
        target="_blank"
        rel="noreferrer"
        className="
        mt-auto
        text-xs
        font-bold
        uppercase
        tracking-wide
        border-b
        border-transparent
        hover:border-text-main
        pb-0.5
        self-start
        "
      >
        {
          isSocial
          ? "查看笔记"
          : "在线阅读"
        }
      </a>


    </div>

  );
};



const Works = () => {


return (

<div className="pt-32 pb-20 px-6 max-w-6xl mx-auto">


<h2 className="text-3xl font-serif mb-16 text-center">
Selected Works
</h2>


<div className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-6
">


{
works.map(work=>(
<WorkCard
key={work.title}
work={work}
/>
))
}


</div>


</div>

);

};


export default Works;