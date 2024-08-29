import React from "react";

import commonImg from "../../assets/Home/c.jpg";

const HomeData = [
  {
    para: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              voluptatum distinctio dolorem eveniet rerum. Obcaecati fugit
              adipisci, in sint voluptatibus odit accusantium aliquid sit
              placeat assumenda libero debitis. Consectetur, quibusdam? Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Ut cupiditate
              nulla odit, laboriosam eius nostrum! Iure eveniet aspernatur minus
              nemo, adipisci obcaecati, asperiores itaque, nam quaerat mollitia
              voluptas quibusdam atque! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quas molestiae cum neque. Suscipit laboriosam
              reprehenderit saepe dignissimos tenetur sunt ullam, exercitationem
              sit quas eligendi itaque omnis nam perspiciatis eos tempora. Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Assumenda vel
              quasi, nesciunt consequatur sit illum nemo reprehenderit quam
              ducimus at dicta. Voluptatibus hic expedita nam, sed neque totam
              autem perferendis! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Impedit maiores veritatis odit nam odio, in
              ipsam placeat dolor debitis corrupti iure, ullam, nisi ut deleniti
              molestias dolorem cupiditate alias at?`,
    image: commonImg,
    shadow: "shadow-custom-orange",
    buttonName: "cultural canvas of india",
    buttonLink: null,
  },

  {
    para: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              voluptatum distinctio dolorem eveniet rerum. Obcaecati fugit
              adipisci, in sint voluptatibus odit accusantium aliquid sit
              placeat assumenda libero debitis. Consectetur, quibusdam? Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Ut cupiditate
              nulla odit, laboriosam eius nostrum! Iure eveniet aspernatur minus
              nemo, adipisci obcaecati, asperiores itaque, nam quaerat mollitia
              voluptas quibusdam atque! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quas molestiae cum neque. Suscipit laboriosam
              reprehenderit saepe dignissimos tenetur sunt ullam, exercitationem
              sit quas eligendi itaque omnis nam perspiciatis eos tempora. Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Assumenda vel
              quasi, nesciunt consequatur sit illum nemo reprehenderit quam
              ducimus at dicta. Voluptatibus hic expedita nam, sed neque totam
              autem perferendis! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Impedit maiores veritatis odit nam odio, in
              ipsam placeat dolor debitis corrupti iure, ullam, nisi ut deleniti
              molestias dolorem cupiditate alias at?`,
    image: commonImg,
    shadow: "shadow-custom-blue",
    buttonName: "Explore Heritage",
    buttonLink: "/heritage",
  },
  {
    para: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero`,
    image: commonImg,
    shadow: "shadow-custom-green",
    buttonName: "Explore Culture & Tradition",
    buttonLink: "/culture_tradition",
  },
  {
    para: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero`,
    image: commonImg,
    shadow: "shadow-custom-orange",
    buttonName: "Learn Indian Culture",
    buttonLink: "/learn_Indian_culture",
  },
  {
    para: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero`,
    image: commonImg,
    shadow: "shadow-custom-blue",
    buttonName: "Explore Trip Recommendations",
    buttonLink: "/trip_recommendation",
  },
  {
    para: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero`,
    image: commonImg,
    shadow: "shadow-custom-green",
    buttonName: "Review Blogs & Vlogs",
    buttonLink: "/blogs_vlogs",
  },

  {
    para: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero`,
    image: commonImg,
    shadow: "shadow-custom-orange",
    buttonName: "Explore Virtual Store",
    buttonLink: "/virtual_store",
  },
];
const Home = () => {
  return (
    <section className=" bg-background1 dark:bg-dark_background1 px-4 py-10">
      <div className="w-full flex flex-col items-start  gap-16">
        {HomeData.map((content, ind) => (
          <div
            key={ind}
            className={`backdrop-blur-lg ${
              content.shadow
            } bg-opacity-80 p-4 rounded-lg h-[520px] md:h-[450px] lg:h-[500px] xl:h-[500px] w-full max-w-[94rem] relative flex items-center ${
              ind % 2 === 0 ? "justify-start" : "justify-end"
            } `}
          >
            <div className="w-[58rem] flex flex-col items-center justify-center gap-10">
              <p className="text-lg leading-8 font-medium text-primary_text dark:text-dark_primary_text">
                {content.para}
              </p>

              <a
                href={content.buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase bg-highlight hover:bg-highlight_hover text-primary_text hover:text-white px-2 py-1 rounded font-ubuntu duration-700 transition-transform hover:scale-105 transform-cpu"
              >
                {content.buttonName}
              </a>
            </div>

            <div
              className={`absolute w-[35%] ${
                ind % 2 === 0 ? "-right-0" : "-left-0"
              }`}
            >
              <img
                src={content.image}
                alt="common img"
                className="rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
