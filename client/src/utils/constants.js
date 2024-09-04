import taj from "../assets/Heritage/taj.jpeg";
import bengaliImg from "../assets/courses/bengali.png";
import pratikImg from "../assets/courses/pratik.jpg";

import unescoLogo from "../assets/Heritage/unescologo.png";

import upImg from "../assets/Heritage/up.png";
import commonImg from "../assets/Home/c.png";

import bahomein from "../assets/Heritage/bais.mp4";

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
      buttonLink: "/culture-tradition",
    },
    {
      para: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero`,
      image: commonImg,
      shadow: "shadow-custom-orange",
      buttonName: "Learn Indian Culture",
      buttonLink: "/learn-Indian-culture",
    },
    {
      para: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero`,
      image: commonImg,
      shadow: "shadow-custom-blue",
      buttonName: "Explore Trip Recommendations",
      buttonLink: "/explore-diversity",
    },
    {
      para: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero`,
      image: commonImg,
      shadow: "shadow-custom-green",
      buttonName: "Review Blogs & Vlogs",
      buttonLink: "/blogs-vlogs",
    },

    {
      para: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero`,
      image: commonImg,
      shadow: "shadow-custom-orange",
      buttonName: "Explore Virtual Store",
      buttonLink: "/virtual-store",
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
        endlessDigitalArt: bahomein,

        // before video blog
        part1: [
          {
            heading1: "loremdsfdssfd",
            description1: "sdffffffffffffffffsdgsgvesvgerfergveveggerger",
          },
          {
            heading1: "dfffef",
            description1:
              "sdccccccccccccccccccccccffffffffffffffffsdgsgvesvgerfergveveggerger",
          },
        ],
        // animated video
        animatedVideo: bahomein,
        // after video blog
        part2: [
          {
            heading2: "vrefwefw",
            description2: "svrwfweweerfwefwfwfwvvvwfwefwfw",
          },
          {
            heading2: "vrevvvvvvfwefw",
            description2: "svvvvvvvvvvvvvvvvvvvvrwfweweerfwefwfwfwvvvwfwefwfw",
          },
        ],

        vlogVideo: bahomein,
        police_helpline: "+0000000",
        women_helpline: "+111111",
        child_helpline: "+222222",
        fire_emergency: "+333333",
        medical_emergency: "+444444",
        state_culture_name: "Bengal",
        state_culture_introduction: "efbuevbhevh v hevebvrhebv",
        state_culture_link: "/bengal",
        nearest_attraction: [
          {
            name: "Agra Fort",
            link: "/",
            image: taj,
            entryFee: "Rs.10",
          },
          {
            name: "Rupal r sosur bari",
            link: "/norok",
            image: taj,
            entryFee: "Rs.10",
          },
        ],
      },
      {
        image: taj,
        name: "Taj Mahal",
        introduction:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem",
        category: "UNESCO Listed",

        categoryImg: unescoLogo,
        type: "cultural",
        endlessDigitalArt: bahomein,

        // before video blog
        part1: [
          {
            heading1: "loremdsfdssfd",
            description1: "sdffffffffffffffffsdgsgvesvgerfergveveggerger",
          },
          {
            heading1: "dfffef",
            description1:
              "sdccccccccccccccccccccccffffffffffffffffsdgsgvesvgerfergveveggerger",
          },
        ],
        // animated video
        animatedVideo: bahomein,
        // after video blog
        part2: [
          {
            heading2: "vrefwefw",
            description2: "svrwfweweerfwefwfwfwvvvwfwefwfw",
          },
          {
            heading2: "vrevvvvvvfwefw",
            description2: "svvvvvvvvvvvvvvvvvvvvrwfweweerfwefwfwfwvvvwfwefwfw",
          },
        ],

        vlogVideo: bahomein,
        police_helpline: "+0000000",
        women_helpline: "+111111",
        child_helpline: "+222222",
        fire_emergency: "+333333",
        medical_emergency: "+444444",
        state_culture_name: "Bengal",
        state_culture_introduction: "efbuevbhevh v hevebvrhebv",
        state_culture_link: "/bengal",
        nearest_attraction: [
          {
            name: "Agra Fort",
            link: "/",
            image: taj,
            entryFee: "Rs.10",
          },
          {
            name: "Rupal r sosur bari",
            link: "/norok",
            image: taj,
            entryFee: "Rs.10",
          },
        ],
      },
    ],
    unesco_unlisted: [
      {
        image: taj,
        name: "Taj Mahal",
        introduction:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem",
        category: "UNESCO Unisted",

        categoryImg: unescoLogo,
        type: "cultural",
        endlessDigitalArt: bahomein,

        // before video blog
        part1: [
          {
            heading1: "loremdsfdssfd",
            description1: "sdffffffffffffffffsdgsgvesvgerfergveveggerger",
          },
          {
            heading1: "dfffef",
            description1:
              "sdccccccccccccccccccccccffffffffffffffffsdgsgvesvgerfergveveggerger",
          },
        ],
        // animated video
        animatedVideo: bahomein,
        // after video blog
        part2: [
          {
            heading2: "vrefwefw",
            description2: "svrwfweweerfwefwfwfwvvvwfwefwfw",
          },
          {
            heading2: "vrevvvvvvfwefw",
            description2: "svvvvvvvvvvvvvvvvvvvvrwfweweerfwefwfwfwvvvwfwefwfw",
          },
        ],

        vlogVideo: bahomein,
        police_helpline: "+0000000",
        women_helpline: "+111111",
        child_helpline: "+222222",
        fire_emergency: "+333333",
        medical_emergency: "+444444",
        state_culture_name: "Bengal",
        state_culture_introduction: "efbuevbhevh v hevebvrhebv",
        state_culture_link: "/bengal",
        nearest_attraction: [
          {
            name: "Agra Fort",
            link: "/",
            image: taj,
            entryFee: "Rs.10",
          },
          {
            name: "Rupal r sosur bari",
            link: "/norok",
            image: taj,
            entryFee: "Rs.10",
          },
        ],
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
        endlessDigitalArt: bahomein,

        // before video blog
        part1: [
          {
            heading1: "loremdsfdssfd",
            description1: "sdffffffffffffffffsdgsgvesvgerfergveveggerger",
          },
          {
            heading1: "dfffef",
            description1:
              "sdccccccccccccccccccccccffffffffffffffffsdgsgvesvgerfergveveggerger",
          },
        ],
        // animated video
        animatedVideo: bahomein,
        // after video blog
        part2: [
          {
            heading2: "vrefwefw",
            description2: "svrwfweweerfwefwfwfwvvvwfwefwfw",
          },
          {
            heading2: "vrevvvvvvfwefw",
            description2: "svvvvvvvvvvvvvvvvvvvvrwfweweerfwefwfwfwvvvwfwefwfw",
          },
        ],

        vlogVideo: bahomein,
        police_helpline: "+0000000",
        women_helpline: "+111111",
        child_helpline: "+222222",
        fire_emergency: "+333333",
        medical_emergency: "+444444",
        state_culture_name: "Bengal",
        state_culture_introduction: "efbuevbhevh v hevebvrhebv",
        state_culture_link: "/bengal",
        nearest_attraction: [
          {
            name: "Agra Fort",
            link: "/",
            image: taj,
            entryFee: "Rs.10",
          },
          {
            name: "Rupal r sosur bari",
            link: "/norok",
            image: taj,
            entryFee: "Rs.10",
          },
        ],
      },
    ],
  },

  LearningDetails: {
    languages: [
      {
        image: bengaliImg,
        name: "Bengali",
        introduction:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem",
        courseCategory: "Learn Different Languages of India",
        courseDetails: {
          courseName: "Bengali",
          courseHistory: "sdfegrbrbrb",
          courseIntro: "Introduction",
          videoDetails: [
            {
              videoVideo: bahomein,
              videoImage: bengaliImg,
              videoName: "1. Introduction",
              videoDescription: "Introduction to Bengali Language",
            },
          ],
          teacher: {
            teacherImg: bengaliImg,
            teacherName: "Dr. Pratik Biswas",
            teacherOccupation: "Professor of Jadavpur University",
            teacherData: [
              {
                link: "mailto:04biswaspratik@gmail.com",
                text: "04biswaspratik@gmail.com",
              },
              {
                link: "/",
                text: "Pratik Biswas",
              },
            ],
          },
        },
      },
      {
        image: bengaliImg,
        name: "Bengali",
        introduction:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem",
        courseCategory: "Learn Different Languages of India",
        courseDetails: {
          courseName: "Bengali",
          courseHistory: "sdfegrbrbrb",
          courseIntro: "Introduction",
          videoDetails: [
            {
              videoVideo: bahomein,
              videoImage: bengaliImg,
              videoName: "1. Introduction",
              videoDescription: "Introduction to Bengali Language",
            },
          ],
          teacher: {
            teacherImg: bengaliImg,
            teacherName: "Dr. Pratik Biswas",
            teacherOccupation: "Professor of Jadavpur University",
            teacherData: [
              {
                link: "mailto:04biswaspratik@gmail.com",
                text: "04biswaspratik@gmail.com",
              },
              {
                link: "/",
                text: "Pratik Biswas",
              },
            ],
          },
        },
      },
      {
        image: bengaliImg,
        name: "Bengali",
        introduction:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem",
        courseCategory: "Learn Different Languages of India",
        courseDetails: {
          courseName: "Bengali",
          courseHistory: "sdfegrbrbrb",
          courseIntro: "Introduction",
          videoDetails: [
            {
              videoVideo: bahomein,
              videoImage: bengaliImg,
              videoName: "1. Introduction",
              videoDescription: "Introduction to Bengali Language",
            },
          ],
          teacher: {
            teacherImg: bengaliImg,
            teacherName: "Dr. Pratik Biswas",
            teacherOccupation: "Professor of Jadavpur University",
            teacherData: [
              {
                link: "mailto:04biswaspratik@gmail.com",
                text: "04biswaspratik@gmail.com",
              },
              {
                link: "/",
                text: "Pratik Biswas",
              },
            ],
          },
        },
      },
      {
        image: bengaliImg,
        name: "Bengali",
        introduction:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem",
        courseCategory: "Learn Different Languages of India",
        courseDetails: {
          courseName: "Bengali",
          courseHistory: "sdfegrbrbrb",
          courseIntro: "Introduction",
          videoDetails: [
            {
              videoVideo: bahomein,
              videoImage: bengaliImg,
              videoName: "1. Introduction",
              videoDescription: "Introduction to Bengali Language",
            },
          ],
          teacher: {
            teacherImg: bengaliImg,
            teacherName: "Dr. Pratik Biswas",
            teacherOccupation: "Professor of Jadavpur University",
            teacherData: [
              {
                link: "mailto:04biswaspratik@gmail.com",
                text: "04biswaspratik@gmail.com",
              },
              {
                link: "/",
                text: "Pratik Biswas",
              },
            ],
          },
        },
      },
    ],

    cuisines: [
      {
        image: taj,
        name: "Bengali",
        introduction:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem",
        courseCategory: "Try Different Cuisines of India",
        courseLink: "/",
      },
      {
        image: taj,
        name: "English",
        introduction:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem",
        courseCategory: "Try Different Cuisines of India",
        courseLink: "/",
      },
      {
        image: taj,
        name: "Hindi",
        introduction:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem",
        courseCategory: "Try Different Cuisines of India",
        courseLink: "/",
      },
    ],

    clothing: [
      {
        image: taj,
        name: "Bengali",
        introduction:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem",
        courseCategory: "Try Different Cloths of India",
        courseLink: "/",
      },
      {
        image: taj,
        name: "English",
        introduction:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem",
        courseCategory: "Try Different Cloths of India",
        courseLink: "/",
      },
      {
        image: taj,
        name: "Bengali",
        introduction:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem",
        courseCategory: "Learn Different Languages of India",
        courseLink: "/",
      },
      {
        image: taj,
        name: "Hindi",
        introduction:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem",
        courseCategory: "Try Different Cloths of India",
        courseLink: "/",
      },
    ],
    artCrafts: [
      {
        image: taj,
        name: "Bengali",
        introduction:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem",
        courseCategory: "Try Different Arts & Crafts of India",
        courseLink: "/",
      },
      {
        image: taj,
        name: "English",
        introduction:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem",
        courseCategory: "Try Different Arts & Crafts of India",
        courseLink: "/",
      },
      {
        image: taj,
        name: "Bengali",
        introduction:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem",
        courseCategory: "Learn Different Languages of India",
        courseLink: "/",
      },
      {
        image: taj,
        name: "Hindi",
        introduction:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem",
        courseCategory: "Try Different Arts & Crafts of India",
        courseLink: "/",
      },
    ],
  },

  AllCulturesData: [
    {
      cultureImg: taj,
      cultureIntro: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis accusamus, fugiat perferendis esse libero hic deserunt dolores oditplaceat veniam, deleniti ullam sed voluptates ab alias, unde debitisofficia soluta. Lorem ipsum dolor sit amet consectetur adipisicingelit. Ex sit similique eos necessitatibus repellendus vel quosrepellat sunt fuga obcaecati officiis quaerat saepe, animi sintipsam porro quibusdam suscipit fugiat!`,
      cultureName: "Religious",
      individualPage: "/culture-tradition/id",
    },

    {
      cultureImg: taj,
      cultureIntro: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis accusamus, fugiat perferendis esse libero hic deserunt dolores oditplaceat veniam, deleniti ullam sed voluptates ab alias, unde debitisofficia soluta. Lorem ipsum dolor sit amet consectetur adipisicingelit. Ex sit similique eos necessitatibus repellendus vel quosrepellat sunt fuga obcaecati officiis quaerat saepe, animi sintipsam porro quibusdam suscipit fugiat!`,
      cultureName: "Philosophy",
      individualPage: "/culture-tradition/id",
    },
    {
      cultureImg: taj,
      cultureIntro: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis accusamus, fugiat perferendis esse libero hic deserunt dolores oditplaceat veniam, deleniti ullam sed voluptates ab alias, unde debitisofficia soluta. Lorem ipsum dolor sit amet consectetur adipisicingelit. Ex sit similique eos necessitatibus repellendus vel quosrepellat sunt fuga obcaecati officiis quaerat saepe, animi sintipsam porro quibusdam suscipit fugiat!`,
      cultureName: "Arts & Crafts",
      individualPage: "/culture-tradition/id",
    },
    {
      cultureImg: taj,
      cultureIntro: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis accusamus, fugiat perferendis esse libero hic deserunt dolores oditplaceat veniam, deleniti ullam sed voluptates ab alias, unde debitisofficia soluta. Lorem ipsum dolor sit amet consectetur adipisicingelit. Ex sit similique eos necessitatibus repellendus vel quosrepellat sunt fuga obcaecati officiis quaerat saepe, animi sintipsam porro quibusdam suscipit fugiat!`,
      cultureName: "Family Structures & Weddings",
      individualPage: "/culture-tradition/id",
    },
  ],

  StateCulturesData: [
    {
      stateImg: upImg,
      stateName: "1. Assam",
      individualPage: "/culture-tradition/id",
    },
    {
      stateImg: upImg,
      stateName: "1. Assam",
      individualPage: "/culture-tradition/id",
    },

    {
      stateImg: upImg,
      stateName: "1. Assam",
      individualPage: "/culture-tradition/id",
    },
    {
      stateImg: upImg,
      stateName: "1. Assam",
      individualPage: "/culture-tradition/id",
    },
    {
      stateImg: upImg,
      stateName: "1. Assam",
      individualPage: "/culture-tradition/id",
    },
  ],
};
