import React, { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";

const Hinduism = () => {
  const { t } = useTranslation();
  const hinduismContent = t("HinduismData", { returnObjects: true });

  return (
    <section className="duration-300 text-primary_text dark:text-dark_primary_text">
      <div
        style={{ backgroundImage: `url(${hinduismContent.image})` }}
        className="relative bg-center bg-cover bg-fixed bg-no-repeat"
      >
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

        <div className="relative z-20 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center px-16 h-screen text-dark_primary_text">
            <p className="text-[7rem] font-extrabold tracking-wide">
              {hinduismContent.name}
            </p>
            <p className="text-2xl font-lato ">
              {hinduismContent.introduction}
            </p>
          </div>

          <div className="bg-background1 dark:bg-dark_background1 py-4 px-16 text-lg flex flex-col items-start justify-center w-full h-full ">
            <div className="flex flex-col gap-4 relative">
              <button
                aria-label="Speak Text"
                className="text-2xl  absolute -left-12 top-3 "
              >
                🔊
              </button>
              <h1 className="font-semibold font-montserrat text-2xl pt-3">
                Overview:
              </h1>
              <p className="text-lg">{hinduismContent.overview}</p>

              <h1 className="font-semibold font-montserrat text-2xl pt-3">
                History:
              </h1>
              <p className="text-lg">{hinduismContent.history}</p>

              <h1 className="font-semibold font-montserrat text-2xl pt-3">
                Regions:
              </h1>
              <p className="text-lg">{hinduismContent.regions}</p>

              <h1 className="font-semibold font-montserrat text-2xl pt-3">
                Core Beliefs:
              </h1>
              {hinduismContent.core_beliefs && (
                <ul className="flex flex-col gap-3">
                  {hinduismContent.core_beliefs.map((belief, i) => (
                    <li key={i}>
                      <strong>{belief.title}:</strong> {belief.description}
                    </li>
                  ))}
                </ul>
              )}

              <h1 className="font-semibold font-montserrat text-2xl pt-3">
                Practices:
              </h1>
              <p className="text-lg">{hinduismContent.practices}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hinduism;
