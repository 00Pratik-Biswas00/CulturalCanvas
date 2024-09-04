import React from "react";
import { Button } from "../../components/ExplorePlacesComponents/ui/button";
const CreateTrip = () => {
  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-4 px-16 duration-300">
      <div className="flex flex-col items-center mx-57 gap-9">
        <h1 className="font-extrabold text-[50px] text-center mt-16">
          <span className="text-[#f56551]">
            Unveil the World's Rich Heritage:
          </span>{" "}
          <br></br> Personalized Cultural Journeys Crafted Just for You
        </h1>
        <p className="text-xl text-gray-500 text-center">
          Embark on a journey through time with custom itineraries that immerse
          you in the rich traditions, history, and culture of your destinations.
        </p>
        <a href="/explore-diversity/create-trip/own-trip">
          <Button>Start Your Cultural Adventure, It's Free.</Button>
        </a>
      </div>
    </section>
  );
};

export default CreateTrip;
