import taj from "../assets/Heritage/taj.jpeg";
import unescoLogo from "../assets/Heritage/unescologo.png";
import commonImg from "../assets/Home/c.jpg";

export const dummyData = {
  Home: [
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
  ],

  HeritageDetails: {
    unesco_listed: [
      {
        image: taj,
        name: "Taj Mahal",
        introduction:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem",
        category: "UNESCO Listed",
        categoryImg: unescoLogo,
        type: "cultural",
      },
      {
        image: taj,
        name: "Taj Mahal",
        introduction:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem",
        category: "UNESCO Listed",
        categoryImg: unescoLogo,
        type: "cultural",
      },
      {
        image: taj,
        name: "Taj Mahal",
        introduction:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem",
        category: "UNESCO Listed",
        categoryImg: unescoLogo,
        type: "cultural",
      },
      {
        image: taj,
        name: "Taj Mahal",
        introduction:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem",
        category: "UNESCO Listed",
        categoryImg: unescoLogo,
        type: "cultural",
      },
      {
        image: taj,
        name: "Taj Mahal",
        introduction:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem",
        category: "UNESCO Listed",
        categoryImg: unescoLogo,
        type: "cultural",
      },
    ],
    unesco_unlisted: [
      {
        image: unescoLogo,
        name: "Taj Mahal",
        introduction:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem",
        category: "UNESCO Unlisted",
        categoryImg: unescoLogo,
        type: "cultural",
      },
    ],
    local_heritage: [
      {
        image: taj,
        name: "Taj Mahal",
        introduction:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem",
        category: "Local Heritage",
        categoryImg: unescoLogo,
        type: "cultural",
      },
    ],
  },
};
