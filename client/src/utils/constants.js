// culture

import langImg from "../assets/culture/language.avif";
import religiousImg from "../assets/culture/religious.avif";
import cuisineImg from "../assets/culture/cuisine.avif";
import festivalImg from "../assets/culture/festival.avif";
import greetingImg from "../assets/culture/greeting.avif";
import weddingImg from "../assets/culture/wedding.avif";

// courses

import BengaliLangImg from "../assets/courses/BengaliLang.png";

// states

import assamImg from "../assets/states/assam.png";
import jkImg from "../assets/states/jk.png";
import karnatakaImg from "../assets/states/karnataka.png";
import meghalayaImg from "../assets/states/meghalaya.png";
import uPradeshImg from "../assets/states/up.png";
import wbImg from "../assets/states/wb.png";

import bengaliImg from "../assets/courses/bengali.png";

import upImg from "../assets/Heritage/up.png";

export const dummyData = {
  // --------------------------------------- CULTURE & TRADITION ---------------------------------------

  AllCulturesData: [
    {
      cultureImg: religiousImg,
      cultureIntro: `Planning a heritage tour in India can be exciting, but the cost can sometimes be a mystery. With our easy-to-use tool, you can quickly estimate the potential`,
      cultureName: "Religion",
      individualPage: "/culture-tradition/multiple-pages",
    },

    {
      cultureImg: langImg,
      cultureIntro: `Planning a heritage tour in India can be exciting, but the cost can sometimes be a mystery. With our easy-to-use tool, you can quickly estimate the potential.`,
      cultureName: "Languages",
      individualPage: "/culture-tradition/single-page",
    },
    {
      cultureImg: cuisineImg,
      cultureIntro: `Planning a heritage tour in India can be exciting, but the cost can sometimes be a mystery. With our easy-to-use tool, you can quickly estimate the potential.`,
      cultureName: "Cuisines",
      individualPage: "/culture-tradition/id",
    },
    {
      cultureImg: festivalImg,
      cultureIntro: `Planning a heritage tour in India can be exciting, but the cost can sometimes be a mystery. With our easy-to-use tool, you can quickly estimate the potential.`,
      cultureName: "Festivals",
      individualPage: "/culture-tradition/id",
    },
    {
      cultureImg: greetingImg,
      cultureIntro: `Planning a heritage tour in India can be exciting, but the cost can sometimes be a mystery. With our easy-to-use tool, you can quickly estimate the potential.`,
      cultureName: "Greetings",
      individualPage: "/culture-tradition/id",
    },
    {
      cultureImg: weddingImg,
      cultureIntro: `Planning a heritage tour in India can be exciting, but the cost can sometimes be a mystery. With our easy-to-use tool, you can quickly estimate the potential.`,
      cultureName: "Family Structures & Weddings",
      individualPage: "/culture-tradition/id",
    },
    {
      cultureImg: weddingImg,
      cultureIntro: `Planning a heritage tour in India can be exciting, but the cost can sometimes be a mystery. With our easy-to-use tool, you can quickly estimate the potential.`,
      cultureName: "Clothing",
      individualPage: "/culture-tradition/id",
    },
    {
      cultureImg: weddingImg,
      cultureIntro: `Planning a heritage tour in India can be exciting, but the cost can sometimes be a mystery. With our easy-to-use tool, you can quickly estimate the potential.`,
      cultureName: "Arts",
      individualPage: "/culture-tradition/id",
    },
    {
      cultureImg: weddingImg,
      cultureIntro: `Planning a heritage tour in India can be exciting, but the cost can sometimes be a mystery. With our easy-to-use tool, you can quickly estimate the potential.`,
      cultureName: "Sports",
      individualPage: "/culture-tradition/id",
    },
  ],

  StateCulturesData: [
    {
      stateImg: assamImg,
      stateName: "1. Assam",
      individualPage: "/culture-tradition/assam-state",
    },
    {
      stateImg: jkImg,
      stateName: "2. Jammu & Kashmir",
      individualPage: "/culture-tradition/jammu-kashmir-state",
    },

    {
      stateImg: karnatakaImg,
      stateName: "3. Karnataka",
      individualPage: "/culture-tradition/karnataka-state",
    },
    {
      stateImg: meghalayaImg,
      stateName: "4. Meghalaya",
      individualPage: "/culture-tradition/meghalaya-state",
    },
    {
      stateImg: uPradeshImg,
      stateName: "5. Uttar Pradesh",
      individualPage: "/culture-tradition/uttar-pradesh-state",
    },
    {
      stateImg: wbImg,
      stateName: "6. West Bengal",
      individualPage: "/culture-tradition/west-bengal-state",
    },
  ],

  SingleState: {
    stateHistory: [
      {
        stateName: "West Bengal",
        stateHistory: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              minima? Cumque ducimus magnam, illum voluptatibus enim ratione
              recusandae, in est officiis veritatis doloremque! Quasi ducimus
              hic ea recusandae eius perspiciatis. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Repellat sapiente ratione sit
              adipisci veritatis explicabo, facere est nam aliquam ab aliquid
              odit architecto recusandae asperiores natus eius molestiae?
              Ratione, tenetur? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Officiis, minima? Cumque ducimus magnam, illum
              voluptatibus enim ratione recusandae, in est officiis veritatis
              doloremque! Quasi ducimus hic ea recusandae eius perspiciatis.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              sapiente ratione sit adipisci veritatis explicabo, facere est nam
              aliquam ab aliquid odit architecto recusandae asperiores natus
              eius molestiae? Ratione, tenetur?`,
        stateImg: upImg,
      },
    ],
    languageModel: [
      {
        heading: "Language & Architecture",
        courseHistory:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        image: bengaliImg,
      },
    ],
    cuisineModel: [
      {
        heading: "Famous Cuisines",

        cuisineDescription:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        image: bengaliImg,
      },
    ],
  },

  // ---------------------------------------------- COURSES ----------------------------------------------
  LanguagesTypes: [
    {
      image: BengaliLangImg,
      description: "Want to learn more about Bengali? Check Below",
      name: "BENGALI (বাংলা)",
      buttonLink: "/learn-Indian-culture/bengali-course",
    },
    {
      image: BengaliLangImg,
      description: "Want to learn more about this Language? Check Below",
      name: "ENGLISH",
      buttonLink: "/learn-Indian-culture/english-course",
    },
    {
      image: BengaliLangImg,
      description: "Want to learn more about this Language? Check Below",
      name: "HINDI (हिंदी)",
      buttonLink: "/learn-Indian-culture/hindi-course",
    },
    {
      image: BengaliLangImg,
      description: "Want to learn more about this Language? Check Below",
      name: "GUJARATI (ગુજરાતી)",
      buttonLink: "/learn-Indian-culture/gujarati-course",
    },
    {
      image: BengaliLangImg,
      description: "Want to learn more about this Language? Check Below",
      name: "URDU (اردو)",
      buttonLink: "/learn-Indian-culture/urdu-course",
    },
  ],

  CuisinesTypes: [
    {
      image: greetingImg,
      description: "Want to learn more about Bengali? Check Below",
      name: "Bengali Cuisines",
      buttonLink: "/learn-Indian-culture/bengali-cuisine-course",
    },
    {
      image: greetingImg,
      description: "Want to learn more about this Language? Check Below",
      name: "Pahari Cuisines",
      buttonLink: "/learn-Indian-culture/pahari-cuisine-course",
    },
    {
      image: greetingImg,
      description: "Want to learn more about this Language? Check Below",
      name: "Punjabi Cuisines",
      buttonLink: "/learn-Indian-culture/punjabi-cuisine-course",
    },
    {
      image: greetingImg,
      description: "Want to learn more about this Language? Check Below",
      name: "Parsi Cuisines",
      buttonLink: "/learn-Indian-culture/parsi-cuisine-course",
    },
    {
      image: greetingImg,
      description: "Want to learn more about this Language? Check Below",
      name: "Himachali Cuisines",
      buttonLink: "/learn-Indian-culture/himachali-cuisine-course",
    },
  ],

  ArtsCraftsTypes: [
    {
      image: greetingImg,
      description: "Want to learn more about Bengali? Check Below",
      name: "Music",
      buttonLink: "/learn-Indian-culture/music-course",
    },
    {
      image: greetingImg,
      description: "Want to learn more about this Language? Check Below",
      name: "Dance",
      buttonLink: "/learn-Indian-culture/dance-course",
    },
    {
      image: greetingImg,
      description: "Want to learn more about this Language? Check Below",
      name: "Drama",
      buttonLink: "/learn-Indian-culture/drama-course",
    },
    {
      image: greetingImg,
      description: "Want to learn more about this Language? Check Below",
      name: "Puppetry",
      buttonLink: "/learn-Indian-culture/puppetry-course",
    },
    {
      image: greetingImg,
      description: "Want to learn more about this Language? Check Below",
      name: "Martial Art",
      buttonLink: "/learn-Indian-culture/martial-art-course",
    },
  ],

  SportsTypes: [
    {
      image: greetingImg,
      description: "Want to learn more about Bengali? Check Below",
      name: "Cricket",
      buttonLink: "/learn-Indian-culture/bengali-course",
    },
    {
      image: greetingImg,
      description: "Want to learn more about this Language? Check Below",
      name: "Football",
      buttonLink: "/learn-Indian-culture/pahari-cuisine-course",
    },
    {
      image: greetingImg,
      description: "Want to learn more about this Language? Check Below",
      name: "Hockey",
      buttonLink: "/learn-Indian-culture/punjabi-cuisine-course",
    },
    {
      image: greetingImg,
      description: "Want to learn more about this Language? Check Below",
      name: "Chess",
      buttonLink: "/learn-Indian-culture/parsi-cuisine-course",
    },
    {
      image: greetingImg,
      description: "Want to learn more about this Language? Check Below",
      name: "Long Tenis",
      buttonLink: "/learn-Indian-culture/himachali-cuisine-course",
    },
  ],
};

// ***************************  USER NAVIGATION  ***************************

export const RoutesNames = [
  {
    route_link: "/",
    route_name: "Home",
  },
  {
    route_link: "/heritage",
    route_name: "Heritage",
  },
  {
    route_link: "/culture-tradition",
    route_name: "Culture & Tradition",
  },
  {
    route_link: "/learn-Indian-culture",
    route_name: "Learn Indian Culture",
  },
  {
    route_link: "/explore-diversity",
    route_name: "Explore Diversity",
  },
  {
    route_link: "/blogs-vlogs",
    route_name: "Contents",
  },
  {
    route_link: "/career",
    route_name: "Career",
  },
  {
    route_link: "/virtual-store",
    route_name: "Store",
  },
];

// ***************************  ADMIN NAVIGATION  ***************************

export const adminNavData = [
  {
    name: "Dashboard",
    path: "/",
  },
  {
    name: "Manage Admins",
    path: "/admins-acdprsIndia24",
  },
  {
    name: "Manage Sellers",
    path: "/sellers-acdprsIndia24",
  },
  {
    name: "Manage Users",
    path: "/users-acdprsIndia24",
  },
  // {
  //   name: "Manage States",
  //   path: "/states-acdprsIndia24",
  // },
  {
    name: "Manage Courses",
    path: "/courses-acdprsIndia24",
  },
  {
    name: "Manage Heritage",
    path: "/heritage-acdprsIndia24",
  },
  // {
  //   name: "Manage Culture",
  //   path: "/culture-acdprsIndia24",
  // },

  {
    name: "Manage Market ",
    path: "/market-place-acdprsIndia24",
  },

  {
    name: "Manage Contents ",
    path: "/contents-acdprsIndia24",
  },
];
