import React from "react";
import hinduismImg from "../../assets/culture/hinduism.jpg";

const hinduismData = {
  name: "Hinduism",
  intro: "A Timeless Tradition of Spiritual Diversity",
  hinduism: [
    {
      section: "Overview",
      content: `Hinduism is one of the world's oldest and most diverse religions, characterized by a rich tapestry of beliefs, rituals, and philosophies. It is the predominant religion in India and Nepal and has millions of followers worldwide. Hinduism is not a monolithic religion but a complex, pluralistic tradition with numerous deities, practices, and schools of thought.`,
    },
    {
      section: "History",
      content: `Hinduism's origins trace back over 4,000 years to the ancient Indus Valley Civilization and the Vedic period (1500–500 BCE). The Vedas, a collection of sacred texts, are among the earliest religious writings in Hinduism. Over centuries, Hinduism evolved through various philosophical and devotional movements, including the Upanishads, which introduced the concepts of karma and moksha (liberation). The epics, Mahabharata and Ramayana, and the Puranas further shaped Hindu beliefs and practices. The emergence of devotional (bhakti) movements between the 7th and 12th centuries CE emphasized personal devotion to deities such as Vishnu, Shiva, and Shakti, leading to a rich tradition of temple worship and pilgrimage.`,
    },
    {
      section: "Regions",
      content: `Hinduism is primarily practiced in India, where it influences daily life, culture, and politics. It also has significant communities in Nepal, Bangladesh, Sri Lanka, and among the Indian diaspora worldwide. Temples and festivals related to Hinduism are prominent in countries with large Indian communities, including the United States, Canada, and the United Kingdom.`,
    },
    {
      section: "Core Beliefs",
      learningAspects: [
        {
          title: "Dharma",
          description:
            "The moral and ethical duties or responsibilities of an individual.",
        },
        {
          title: "Karma",
          description:
            "The principle of cause and effect, where a person's actions influence their future.",
        },
        {
          title: "Moksha",
          description:
            "The ultimate goal of liberation from the cycle of birth, death, and rebirth (samsara).",
        },
        {
          title: "Deities",
          description:
            "Hinduism encompasses a vast pantheon, including Brahma (the creator), Vishnu (the preserver), and Shiva (the destroyer), among others.",
        },
      ],
    },
    {
      section: "Practices",
      content: `Hindu practices include rituals, meditation, yoga, and pilgrimage to sacred sites. Festivals like Diwali, Holi, and Navaratri are celebrated with fervor, reflecting the vibrant and diverse nature of Hindu worship and community life.`,
    },
  ],
};

const MultipleSingleCulture = () => {
  return (
    <section className="duration-300 text-primary_text dark:text-dark_primary_text">
      <div
        style={{ backgroundImage: `url(${hinduismImg})` }}
        className="relative bg-center bg-cover bg-fixed bg-no-repeat"
      >
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

        <div className="relative z-20 flex flex-col items-center justify-center">
          <div className=" flex flex-col  items-center justify-center   px-16  h-screen   text-dark_primary_text">
            <p className="text-[7rem] font-extrabold tracking-wide">
              {hinduismData.name}
            </p>
            <p className="text-2xl font-lato ">{hinduismData.intro}</p>
          </div>

          <div className="bg-background1 dark:bg-dark_background1 py-4 px-16 text-lg flex flex-col items-start justify-center w-full h-full">
            {hinduismData.hinduism.map((item, ind) => (
              <div key={ind} className="flex flex-col gap-2">
                <h1 className="font-semibold font-montserrat text-2xl pt-3">
                  {item.section}:
                </h1>
                {item.content && <p className="text-lg">{item.content}</p>}

                {item.learningAspects && (
                  <ul className="flex flex-col gap-3">
                    {item.learningAspects.map((aspect, i) => (
                      <li key={i}>
                        <strong>{aspect.title}:</strong> {aspect.description}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultipleSingleCulture;
