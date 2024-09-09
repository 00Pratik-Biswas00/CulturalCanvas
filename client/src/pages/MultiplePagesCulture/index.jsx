import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { GET__ALL_RELIGIONS_QUERY } from "../../graphql/religionQuery";
import hinduismImg from "../../assets/culture/hinduism.jpg";
import religiousImg from "../../assets/culture/religious.png";

const ReligiousData = [
  {
    name: "Hinduism",
    intro:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, vel fugit. Veniam odio quas expedita, omnis ipsa autem reiciendis officiis ullam quasi dolore, possimus laborum fuga in totam consectetur rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, vel fugit. Veniam odio quas expedita, omnis ipsa autem reiciendis officiis ullam quasi dolore, possimus laborum fuga in totam consectetur rem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, vel fugit. Veniam odio quas expedita, omnis ipsa autem reiciendis officiis ullam quasi dolore, possimus laborum fuga in totam consectetur rem.",
    image: hinduismImg,
  },
  {
    name: "Buddhism",
    intro:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, vel fugit. Veniam odio quas expedita, omnis ipsa autem reiciendis officiis ullam quasi dolore, possimus laborum fuga in totam consectetur rem.",
    image: religiousImg,
  },
];

const MultiplePagesCulture = () => {
  const [religions, setReligions] = useState([]);
  const { loading, error, data } = useQuery(GET__ALL_RELIGIONS_QUERY);
  const navigate = useNavigate();

  useEffect(() => {
    if (data && data.getReligions) {
      setReligions(data.getReligions);
    }
  }, [data]);
  //console.log(religions);
  const openSingleReligion = (slug) => {
    navigate(`${slug}`);
  };
  return (
    <section className="duration-300 text-primary_text dark:text-dark_primary_text">
      <div
        style={{ backgroundImage: `url(${religiousImg})` }}
        className="relative bg-center bg-cover bg-fixed bg-no-repeat"
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-background1 dark:bg-dark_background1 opacity-80 z-10"></div>

        <div className="relative z-20 flex flex-col items-center justify-center">
          <div className="flex flex-col px-16 py-5 gap-10">
            {religions.map((content, index) => {
              let shadowClass;
              let hoverClass;
              let borderClass;

              if (index % 3 === 0) {
                shadowClass = "shadow-custom-orange ";
                hoverClass = "hover:bg-highlight dark:hover:bg-highlight";
                borderClass = "border-highlight";
              } else if (index % 3 === 1) {
                shadowClass = "shadow-custom-blue";
                hoverClass =
                  "hover:bg-secondary_text dark:hover:bg-background1 dark:hover:text-secondary_text ";
                borderClass = "border-secondary_text dark:border-background1";
              } else if (index % 3 === 2) {
                shadowClass = "shadow-custom-green";
                hoverClass =
                  "hover:bg-highlight_hover dark:hover:bg-highlight_hover";
                borderClass = "border-highlight_hover ";
              }

              return (
                <div
                  key={index}
                  className={`backdrop-blur-lg bg-opacity-80 p-5 rounded-lg flex items-center justify-center gap-5 ${shadowClass}`}
                >
                  <img
                    src={content.image.url}
                    alt=".."
                    className=" h-[20rem] rounded-xl"
                  />

                  <div className="flex flex-col items-center  gap-5">
                    <h1 className="text-[3rem] font-extrabold tracking-wide ">
                      {content.name}{" "}
                    </h1>
                    <p>{content.description}</p>
                    <button
                      onClick={() => openSingleReligion(content.slug)}
                      className={` duration-500 py-1 px-3 rounded-xl bg-highlight hover:bg-[#FF671F] `}
                    >
                      <p>Want to know more about {content.name}? </p>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiplePagesCulture;
