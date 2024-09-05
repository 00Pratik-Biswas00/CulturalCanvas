import React from "react";
import langImg from "../../assets/culture/lang.jpg";
import sanskritImg from "../../assets/courses/sanskrit.png";

const languagesContent = [
  {
    name: "Sanskrit {संस्कृत}",
    imgSrc: sanskritImg,
    imgAlt: "Sanskrit",
    historicalOverview: `
      Sanskrit, one of the oldest languages in the world, has been a crucial part of South Asian culture and spirituality for thousands of years. 
      It originated around 1500 BCE with the composition of the Vedas, the earliest sacred texts of Hinduism. Over time, it evolved through 
      various stages, including the Upanishads, the Mahabharata, and Ramayana. These texts narrate epic tales and convey moral and philosophical teachings.
    `,
    learningAspects: [
      {
        title: "Vedas (वेद)",
        description:
          "Study the foundational texts of Hinduism, which include hymns, rituals, and philosophical discussions.",
      },
      {
        title: "Upanishads (उपनिषद)",
        description:
          "Explore philosophical texts on the self (Atman) and ultimate reality (Brahman).",
      },
      {
        title: "Mahabharata (महाभारत)",
        description:
          "Engage with one of the longest epic narratives, including the Bhagavad Gita.",
      },
      {
        title: "Ramayana (रामायण)",
        description:
          "Discover the epic story of Rama, focusing on virtue, duty, and heroism.",
      },
    ],
  },
  {
    name: "Tamil {தமிழ்}",
    imgSrc: sanskritImg,
    imgAlt: "Tamil",
    historicalOverview: `
      Tamil, a Dravidian language with a history spanning over two millennia, boasts a rich literary tradition. 
      The Sangam period (300 BCE - 300 CE) marks the beginning of its classical literature. The Sangam texts provide insights into ancient Tamil society.
    `,
    learningAspects: [
      {
        title: "Sangam Literature (சங்கம Literature)",
        description:
          "Study the early Tamil poetry reflecting ancient Tamil society.",
      },
      {
        title: "Thirukkural (திருக்குறள்)",
        description:
          "Explore this classic text, providing moral and ethical teachings in couplets.",
      },
    ],
  },
  {
    name: "Hindi {हिन्दी}",
    imgSrc: sanskritImg,
    imgAlt: "Hindi",
    historicalOverview: `
      Hindi, an Indo-Aryan language, evolved over centuries. Tulsidas’ Ramcharitmanas and Premchand’s works reflect the rich cultural and literary heritage of Hindi-speaking regions.
    `,
    learningAspects: [
      {
        title: "Ramcharitmanas (रामचरितमानस)",
        description:
          "Tulsidas’ poetic rendition of the Ramayana explores themes of devotion and righteousness.",
      },
      {
        title: "Premchand’s Works (प्रेमचंद)",
        description:
          "Examine Premchand's realistic fiction addressing social issues in modern India.",
      },
    ],
  },
];

const SinglePageCulture = () => {
  return (
    <section className="duration-300 text-primary_text dark:text-dark_primary_text">
      <div
        style={{ backgroundImage: `url(${langImg})` }}
        className="relative bg-center bg-cover bg-fixed bg-no-repeat"
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-background1 dark:bg-dark_background1 opacity-80 z-10"></div>

        <div className="relative z-20 flex flex-col items-center justify-center">
          {languagesContent.map((language, index) => (
            <div
              key={index}
              className={`flex flex-col items-start justify-center px-16 py-5 ${
                index % 2 === 1 ? "bg-background1 dark:bg-dark_background1" : ""
              }`}
            >
              <p className="text-[5rem] font-extrabold tracking-wide pb-8">
                {language.name}
              </p>
              <div className="flex items-center justify-center gap-10 pb-7">
                <img
                  src={language.imgSrc}
                  alt={language.imgAlt}
                  className="h-[20rem] rounded-xl"
                />
                <div className="flex flex-col items-start gap-7 font-medium text-lg">
                  <h1 className="text-[3rem] font-bold font-playfair">
                    Historical Overview:
                  </h1>
                  <p>{language.historicalOverview}</p>
                  <a
                    href="http://localhost:5173/learn-Indian-culture/english-tccd5e1q7uunlfee0qsce"
                    className="duration-500 py-1 px-3 rounded-xl bg-highlight hover:bg-[#FF671F]"
                  >
                    Want to learn {language.name}?
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-7 text-lg">
                <h1 className="text-[3rem] font-bold font-playfair">
                  Learning Aspects:
                </h1>
                <ul className="flex flex-col gap-3">
                  {language.learningAspects.map((aspect, i) => (
                    <li key={i}>
                      <strong>{aspect.title}:</strong> {aspect.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SinglePageCulture;
