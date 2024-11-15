// home

import homeImg from "../assets/Home/home.avif";
import heritageImg from "../assets/Home/heritage.avif";
import cultureImg from "../assets/Home/culture.avif";
import learnImg from "../assets/Home/learn.avif";
import exploreImg from "../assets/Home/exploreDiversity.avif";
import blogsImg from "../assets/Home/blogs.avif";
import virtualStoreImg from "../assets/Home/virtual.avif";

// culture

import langImg from "../assets/culture/language.avif";
import religiousImg from "../assets/culture/religious.avif";
import cuisineImg from "../assets/culture/cuisine.avif";
import festivalImg from "../assets/culture/festival.avif";
import greetingImg from "../assets/culture/greeting.avif";
import weddingImg from "../assets/culture/wedding.avif";

// states

import assamImg from "../assets/states/assam.png";
import jkImg from "../assets/states/jk.png";
import karnatakaImg from "../assets/states/karnataka.png";
import meghalayaImg from "../assets/states/meghalaya.png";
import uPradeshImg from "../assets/states/up.png";
import wbImg from "../assets/states/wb.png";

import taj from "../assets/Heritage/taj.jpeg";
import bengaliImg from "../assets/courses/bengali.png";

import unescoLogo from "../assets/Heritage/unescologo.png";

import upImg from "../assets/Heritage/up.png";

import bahomein from "../assets/Heritage/bais.mp4";

export const dummyData = {
  // updated home page
  Home: [
    {
      para: `Dive deep into India’s historical and cultural wealth by exploring its most celebrated World Heritage Sites. This section is dedicated to the architectural and natural marvels that have stood the test of time, each narrating a story of its own. From the majestic forts that once guarded kingdoms to the sacred temples that echo with ancient prayers, you’ll uncover the profound legacy embedded in these sites. Explore high-resolution images, detailed histories, and interactive elements that bring these monumental treasures to life. Through comprehensive narratives and visual splendor, gain a profound understanding of India’s past and appreciate the craftsmanship and cultural significance that make these sites globally revered.`,
      image: heritageImg,
      shadow: "shadow-custom-blue",
      buttonName: "Unveiling India’s Timeless Treasures",
      buttonLink: "/heritage",
    },
    {
      para: `India’s culture is a vibrant mosaic of traditions that reflect the country’s diverse heritage and spiritual depth. Each region, with its unique customs, festivals, and rituals, contributes to the rich tapestry that is Indian culture. This section celebrates the living traditions that have been passed down through generations, offering insight into the practices that define Indian life. From the joyous celebrations of Diwali and Holi to the solemn rituals of a Hindu wedding, every cultural expression is a reflection of the values, beliefs, and history of its people. Traditional attire like the saree, kurta-pajama, and lehenga-choli are more than just clothing; they are symbols of identity, steeped in cultural significance. As you explore this section, you will gain a deeper appreciation for the traditions that continue to thrive in India, preserving the essence of a civilization that has influenced the world for centuries.`,
      image: cultureImg,
      shadow: "shadow-custom-green",
      buttonName: "Experience the Living Tapestry of India’s Culture",
      buttonLink: "/culture-tradition",
    },
    {
      para: `Discover the essence of India’s vibrant culture with a comprehensive educational experience. This section invites you to explore various facets of Indian traditions, from culinary arts to linguistic diversity and traditional attire. Engage in interactive tutorials on authentic Indian cooking, where you can master traditional recipes from different regions. Learn about the rich tapestry of India’s languages through engaging articles and language lessons that highlight the country's linguistic heritage. Explore traditional attire, including the saree, lehenga, and kurta-pajama, with style guides and historical insights. This immersive experience allows you to not only learn about India’s culture but to live it, offering a deeper connection to its diverse traditions.`,
      image: learnImg,
      shadow: "shadow-custom-orange",
      buttonName: "Dive Deep into the Rich Tapestry of Indian Traditions",
      buttonLink: "/learn-Indian-culture",
    },
    {
      para: `Plan an unforgettable journey through India with a personalized travel guide tailored to your interests. This section helps you design a customized itinerary based on your starting point, desired destinations, and trip duration. Discover essential sites, from historic landmarks and cultural hotspots to scenic nature trails. Receive recommendations for local experiences, including culinary tours and cultural performances, as well as practical advice on accommodation and dining. This comprehensive guide ensures a well-rounded adventure, with every detail thoughtfully considered to enhance your travel experience and create lasting memories across India's diverse landscapes.`,
      image: exploreImg,
      shadow: "shadow-custom-blue",
      buttonName: "Craft Your Perfect Indian Adventure",
      buttonLink: "/explore-diversity",
    },
    {
      para: `Immerse yourself in the vibrant stories and insights of fellow travelers who have explored India’s diverse landscapes. This section features a rich collection of blogs, vlogs, and personal narratives that provide firsthand accounts of Indian adventures. Gain inspiration from detailed travel diaries, engaging video logs, and cultural reflections that showcase the country’s vibrant experiences. Share your own travel stories and connect with a community passionate about India. This interactive space allows you to gather practical advice, discover hidden gems, and enjoy a dynamic exchange of travel experiences, enriching your understanding and appreciation of India.`,
      image: blogsImg,
      shadow: "shadow-custom-green",
      buttonName: "Explore India Through the Eyes of Fellow Travelers",
      buttonLink: "/blogs-vlogs",
    },
    {
      para: `Connect with India’s artistic legacy through a curated selection of traditional arts and crafts. This section offers authentic products sourced from local artisans, including handwoven textiles, intricate jewelry, and unique crafts. Each item represents a piece of India’s rich cultural heritage, crafted with traditional techniques passed down through generations. By purchasing from this section, you support the preservation of these ancient crafts and the livelihoods of artisans. Enjoy a meaningful shopping experience that not only brings a piece of India into your home but also contributes to the ongoing celebration and preservation of its artistic traditions. `,
      image: virtualStoreImg,
      shadow: "shadow-custom-orange",
      buttonName: "Bring a Piece of India’s Heritage Home",
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
      individualPage: "/culture-tradition/id",
    },
    {
      stateImg: jkImg,
      stateName: "2. Jammu & Kashmir",
      individualPage: "/culture-tradition/id",
    },

    {
      stateImg: karnatakaImg,
      stateName: "3. Karnataka",
      individualPage: "/culture-tradition/id",
    },
    {
      stateImg: meghalayaImg,
      stateName: "4. Meghalaya",
      individualPage: "/culture-tradition/id",
    },
    {
      stateImg: uPradeshImg,
      stateName: "5. Uttar Pradesh",
      individualPage: "/culture-tradition/id",
    },
    {
      stateImg: wbImg,
      stateName: "6. West Bengal",
      individualPage: "/culture-tradition/id",
    },
    {
      stateImg: meghalayaImg,
      stateName: "4. Meghalaya",
      individualPage: "/culture-tradition/id",
    },
    {
      stateImg: uPradeshImg,
      stateName: "5. Uttar Pradesh",
      individualPage: "/culture-tradition/id",
    },
    {
      stateImg: wbImg,
      stateName: "6. West Bengal",
      individualPage: "/culture-tradition/id",
    },
    {
      stateImg: meghalayaImg,
      stateName: "4. Meghalaya",
      individualPage: "/culture-tradition/id",
    },
    {
      stateImg: uPradeshImg,
      stateName: "5. Uttar Pradesh",
      individualPage: "/culture-tradition/id",
    },
    {
      stateImg: wbImg,
      stateName: "6. West Bengal",
      individualPage: "/culture-tradition/id",
    },
    {
      stateImg: meghalayaImg,
      stateName: "4. Meghalaya",
      individualPage: "/culture-tradition/id",
    },
    {
      stateImg: uPradeshImg,
      stateName: "5. Uttar Pradesh",
      individualPage: "/culture-tradition/id",
    },
    {
      stateImg: wbImg,
      stateName: "6. West Bengal",
      individualPage: "/culture-tradition/id",
    },
    {
      stateImg: meghalayaImg,
      stateName: "4. Meghalaya",
      individualPage: "/culture-tradition/id",
    },
    {
      stateImg: uPradeshImg,
      stateName: "5. Uttar Pradesh",
      individualPage: "/culture-tradition/id",
    },
    {
      stateImg: wbImg,
      stateName: "6. West Bengal",
      individualPage: "/culture-tradition/id",
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

  dummyUser: [
    {
      userImg: taj,
      userName: "Arka Biswas",
      userEmail: "messi10.pratikbiswas@gmail.com",
      userGender: "Male",
      userPhone: "7001316356",
    },
    {
      userImg: taj,
      userName: "Chandrima Kar",
      userEmail: "chandrimakar16@gmail.com",
      userGender: "Female",
      userPhone: "9163145748",
    },
    // {
    //   userImg: taj,
    //   userName: "Rupal Paul",
    //   userEmail: "ganjakhor@gmail.com",
    //   userGender: "Male",
    //   userPhone: "986537415",
    // },
    // {
    //   userImg: taj,
    //   userName: "Sattwikee Ghosh",
    //   userEmail: "sattwikeeghosh@gmail.com",
    //   userGender: "Female",
    //   userPhone: "9387456245",
    // },
  ],
};

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
    route_name: "Blogs & Vlogs",
  },
  {
    route_link: "/virtual-store",
    route_name: "Virtual Store",
  },
];

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
