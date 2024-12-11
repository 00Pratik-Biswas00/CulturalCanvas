import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { GET_ALL_HERITAGES_QUERY } from "../../graphql/HeritageQuery";
import listed_pic from "../../assets/Heritage/ZListed(avif).avif";
import unlisted_pic from "../../assets/Heritage/ZUnlisted(avif).avif";
import local_pic from "../../assets/Heritage/ZLocal(avif).avif";
import { FaAnglesRight } from "react-icons/fa6";
import LinkButtons from "../../components/Buttons/LinkButtons";

const Heritage = () => {
  const [heritages, setHeritages] = useState([]);

  const { loading, error, data } = useQuery(GET_ALL_HERITAGES_QUERY);
  const navigate = useNavigate();

  useEffect(() => {
    if (data && data.getHeritages) {
      setHeritages(data.getHeritages);
    }
  }, [data]);

  // Group heritages by their categories: unesco_listed, unesco_unlisted, and local
  const groupedHeritages = heritages.reduce(
    (acc, heritage) => {
      const { type_of_heritage } = heritage;

      if (type_of_heritage === "unesco_listed") {
        acc.unesco_listed.push(heritage);
      } else if (type_of_heritage === "unesco_unlisted") {
        acc.unesco_unlisted.push(heritage);
      } else {
        acc.local.push(heritage);
      }
      return acc;
    },
    { unesco_listed: [], unesco_unlisted: [], local: [] } // Initialize grouped categories
  );

  const openSingleHeritage = (slug) => {
    navigate(`${slug}`);
  };

  const renderHeritageGroup = (group, groupName, categoryImg) => (
    <div
      id={groupName}
      className="text-primary_text dark:text-dark_primary_text flex flex-col py-10 pb-20  "
    >
      <div className="flex flex-col gap-10 ">
        <div className="flex items-center gap-3">
          <img
            src={categoryImg}
            alt={groupName}
            className="rounded-full w-14 h-14"
          />
          <h1 className="text-5xl leading-7 font-medium font-open_sans">
            {groupName.replace("_", " ")}
          </h1>
          <FaAnglesRight className="w-8 h-8" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-16">
          {group.map((content, index) => {
            let shadowClass;
            let hoverClass;
            if (index % 3 === 0) {
              shadowClass = "shadow-custom-orange ";
              hoverClass = "hover:bg-highlight dark:hover:bg-highlight";
            } else if (index % 3 === 1) {
              shadowClass = "shadow-custom-blue";
              hoverClass =
                "hover:bg-secondary_text dark:hover:bg-background1 dark:hover:text-secondary_text ";
            } else {
              shadowClass = "shadow-custom-green";
              hoverClass =
                "hover:bg-highlight_hover dark:hover:bg-highlight_hover";
            }

            return (
              <div
                key={index}
                className={`backdrop-blur-lg bg-opacity-80  dark:bg-shadow py-4 px-10 rounded-lg flex flex-col items-center ${shadowClass} gap-4`}
              >
                <div className="flex flex-col">
                  <img
                    src={content.image.url}
                    alt={content.name}
                    className="w-full h-full rounded-md"
                  />
                </div>
                <h2 className="text-3xl tracking-wider font-bold text-center font-montserrat">
                  {content.name}
                </h2>
                {/* <p className="mb-12">{content.introduction}</p> */}
                <p className=" text-center pb-14 font-bold font-pangaia text-xl">
                  {/* Ekhane {content.introduction} e dibi but choto dibi and try koris related kono emoji text tar ses e add korar */}
                  {content.introduction}
                </p>
                <div className="absolute bottom-0">
                  <button
                    className={` ${shadowClass} bg-background1 dark:bg-dark_background1  hover:text-dark_primary_text duration-500 font-bold font-ubuntu p-12 relative flex items-center justify-center rounded-full -bottom-10 ${hoverClass}`}
                    onClick={() => openSingleHeritage(content.slug)}
                  >
                    <p className="absolute text-xl">
                      Know <br /> More
                    </p>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error fetching Heritages!</p>;
  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-4 px-16 duration-300 flex flex-col items-center justify-center gap-5">
      <h1 className="text-7xl tracking-widest font-extrabold font-gallient py-3 text-center ">
        World Heritage Sites in India
      </h1>

      <div className="flex items-center  justify-center gap-10 sticky top-3 z-20 bg-background2 shadow-custom-black dark:bg-shadow dark:shadow-custom-white px-5 py-3 rounded-3xl ">
        <LinkButtons
          toWhere={"LOCAL_Heritage"}
          LinkName={"Local Heritage"}
          classDesign={" before:bg-highlight_hover_dark bg-highlight_hover "}
        />

        <LinkButtons
          toWhere={"UNESCO_Unlisted"}
          LinkName={"UNESCO Unlisted"}
          classDesign={" before:bg-highlight_hover_dark bg-highlight_hover "}
        />

        <LinkButtons
          toWhere={"UNESCO_Listed"}
          LinkName={"UNESCO Listed"}
          classDesign={" before:bg-highlight_hover_dark bg-highlight_hover "}
        />
      </div>

      {/* Conditionally render local heritages if available */}
      {groupedHeritages.local.length > 0 &&
        renderHeritageGroup(
          groupedHeritages.local,
          "LOCAL_Heritage",
          local_pic
        )}

      {/* Render UNESCO Unlisted heritages */}
      {renderHeritageGroup(
        groupedHeritages.unesco_unlisted,
        "UNESCO_Unlisted",
        unlisted_pic
      )}

      {/* Render UNESCO Listed heritages */}
      {renderHeritageGroup(
        groupedHeritages.unesco_listed,
        "UNESCO_Listed",
        listed_pic
      )}
    </section>
  );
};

export default Heritage;
