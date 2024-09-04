import React from "react";

import { dummyData } from "../../utils/constants";

// const HomeData = [
//   {
//     para: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
//               voluptatum distinctio dolorem eveniet rerum. Obcaecati fugit
//               adipisci, in sint voluptatibus odit accusantium aliquid sit
//               placeat assumenda libero debitis. Consectetur, quibusdam? Lorem
//               ipsum dolor sit amet consectetur adipisicing elit. Ut cupiditate
//               nulla odit, laboriosam eius nostrum! Iure eveniet aspernatur minus
//               nemo, adipisci obcaecati, asperiores itaque, nam quaerat mollitia
//               voluptas quibusdam atque! Lorem ipsum dolor sit amet consectetur
//               adipisicing elit. Quas molestiae cum neque. Suscipit laboriosam
//               reprehenderit saepe dignissimos tenetur sunt ullam, exercitationem
//               sit quas eligendi itaque omnis nam perspiciatis eos tempora. Lorem
//               ipsum dolor, sit amet consectetur adipisicing elit. Assumenda vel
//               quasi, nesciunt consequatur sit illum nemo reprehenderit quam
//               ducimus at dicta. Voluptatibus hic expedita nam, sed neque totam
//               autem perferendis! Lorem, ipsum dolor sit amet consectetur
//               adipisicing elit. Impedit maiores veritatis odit nam odio, in
//               ipsam placeat dolor debitis corrupti iure, ullam, nisi ut deleniti
//               molestias dolorem cupiditate alias at?`,
//     image: commonImg,
//     shadow: "shadow-custom-orange",
//     buttonName: "cultural canvas of india",
//     buttonLink: null,
//   },

//   {
//     para: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
//               voluptatum distinctio dolorem eveniet rerum. Obcaecati fugit
//               adipisci, in sint voluptatibus odit accusantium aliquid sit
//               placeat assumenda libero debitis. Consectetur, quibusdam? Lorem
//               ipsum dolor sit amet consectetur adipisicing elit. Ut cupiditate
//               nulla odit, laboriosam eius nostrum! Iure eveniet aspernatur minus
//               nemo, adipisci obcaecati, asperiores itaque, nam quaerat mollitia
//               voluptas quibusdam atque! Lorem ipsum dolor sit amet consectetur
//               adipisicing elit. Quas molestiae cum neque. Suscipit laboriosam
//               reprehenderit saepe dignissimos tenetur sunt ullam, exercitationem
//               sit quas eligendi itaque omnis nam perspiciatis eos tempora. Lorem
//               ipsum dolor, sit amet consectetur adipisicing elit. Assumenda vel
//               quasi, nesciunt consequatur sit illum nemo reprehenderit quam
//               ducimus at dicta. Voluptatibus hic expedita nam, sed neque totam
//               autem perferendis! Lorem, ipsum dolor sit amet consectetur
//               adipisicing elit. Impedit maiores veritatis odit nam odio, in
//               ipsam placeat dolor debitis corrupti iure, ullam, nisi ut deleniti
//               molestias dolorem cupiditate alias at?`,
//     image: commonImg,
//     shadow: "shadow-custom-blue",
//     buttonName: "Explore Heritage",
//     buttonLink: "/heritage",
//   },
//   {
//     para: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero`,
//     image: commonImg,
//     shadow: "shadow-custom-green",
//     buttonName: "Explore Culture & Tradition",
//     buttonLink: "/culture-tradition",
//   },
//   {
//     para: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero`,
//     image: commonImg,
//     shadow: "shadow-custom-orange",
//     buttonName: "Learn Indian Culture",
//     buttonLink: "/learn-Indian-culture",
//   },
//   {
//     para: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero`,
//     image: commonImg,
//     shadow: "shadow-custom-blue",
//     buttonName: "Explore Trip Recommendations",
//     buttonLink: "/explore-diversity",
//   },
//   {
//     para: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero`,
//     image: commonImg,
//     shadow: "shadow-custom-green",
//     buttonName: "Review Blogs & Vlogs",
//     buttonLink: "/blogs-vlogs",
//   },

//   {
//     para: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero`,
//     image: commonImg,
//     shadow: "shadow-custom-orange",
//     buttonName: "Explore Virtual Store",
//     buttonLink: "/virtual-store",
//   },
// ];
const Home = () => {
  const { Home } = dummyData;

  return (
    <section className=" bg-background1 dark:bg-dark_background1 px-16 py-10  duration-300">
      <div className="w-full flex flex-col items-center justify-center  gap-16">
        {Home.map((content, ind) => (
          <div
            key={ind}
            className={`backdrop-blur-lg ${content.shadow} bg-opacity-80 p-4 rounded-lg h-[520px] md:h-[450px] lg:h-[500px] xl:h-[500px] max-w-full relative flex items-center justify-between gap-10 w-full`}
          >
            {ind % 2 === 0 ? (
              <>
                {/* Text on the left, image on the right */}
                <div className="flex flex-col items-center justify-center gap-10 w-[180%]">
                  <p className="text-lg leading-8 font-medium text-primary_text dark:text-dark_primary_text">
                    {content.para}
                  </p>

                  <a
                    href={content.buttonLink}
                    className="uppercase bg-highlight hover:bg-highlight_hover text-primary_text hover:text-white px-2 py-1 rounded font-ubuntu duration-300 transition-transform hover:scale-105 transform-cpu"
                  >
                    {content.buttonName}
                  </a>
                </div>

                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={content.image}
                    alt="common img"
                    className="rounded-lg w-full h-full object-cover"
                  />
                </div>
              </>
            ) : (
              <>
                {/* Image on the left, text on the right */}
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={content.image}
                    alt="common img"
                    className="rounded-lg w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col items-center justify-center gap-10 w-[180%]">
                  <p className="text-lg leading-8 font-medium text-primary_text dark:text-dark_primary_text">
                    {content.para}
                  </p>

                  <a
                    href={content.buttonLink}
                    className="uppercase bg-highlight hover:bg-highlight_hover text-primary_text hover:text-white px-2 py-1 rounded font-ubuntu duration-300 transition-transform hover:scale-105 transform-cpu"
                  >
                    {content.buttonName}
                  </a>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
