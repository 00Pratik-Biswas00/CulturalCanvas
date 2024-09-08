import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_LANGUAGES_QUERY } from "../../graphql/languageQuery.js";
import langImg from "../../assets/culture/lang.jpg";

const SinglePageCulture = () => {
  const [languages, setLanguages] = useState([]);
  const { loading, error, data } = useQuery(GET_ALL_LANGUAGES_QUERY);

  useEffect(() => {
    if (data && data.getLanguages) {
      setLanguages(data.getLanguages);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching languages: {error.message}</p>;

  return (
    <section className="duration-300 text-primary_text dark:text-dark_primary_text">
      <div
        style={{ backgroundImage: `url(${langImg})` }}
        className="relative bg-center bg-cover bg-fixed bg-no-repeat"
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-background1 dark:bg-dark_background1 opacity-60 z-10"></div>

        <div className="relative z-20 flex flex-col items-center justify-center">
          {languages.map((language, index) => (
            <div
              key={language._id}
              className={`flex backdrop-blur-md flex-col items-start justify-center px-16 py-5 ${
                index % 2 === 1 ? "bg-background1 dark:bg-dark_background1" : ""
              }`}
            >
              <p className="text-[4rem] font-extrabold tracking-wide pb-8">
                {language.name}
              </p>
              <div className="flex items-center justify-center gap-10 pb-7">
                <img
                  src={language.image.url}
                  alt={language.name}
                  className="h-[20rem] rounded-xl"
                />
                <div className="flex flex-col items-start gap-7 font-medium text-lg">
                  <h1 className="text-[2.5rem] font-bold font-playfair">
                    Historical Overview:
                  </h1>
                  <p>{language.description}</p>
                  <a
                    href={`/learn-Indian-culture/${language.slug}`} // Assuming this route is dynamic
                    className="hover:text-dark_primary_text py-1 px-3 rounded-xl bg-highlight hover:bg-highlight_hover"
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
                  {language.content.map((aspect, i) => (
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
