import React from "react";
import logo from "../../assets/logo/logo.png";

const MyProfile = () => {
  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-4 px-16 duration-300 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        name email password photo gender role phone rewards vlogs blogs log out
      </div>
    </section>
  );
};

export default MyProfile;
