import React from "react";
import SingleBlogVlog from "../../pages/SingleBlogVlog";

const AdminSingleBlogHeritage = () => {
  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-3 sm:py-6 px-4 duration-300 min-h-screen">
      <div className="flex flex-col gap-10">
        <h1 className="text-5xl tracking-widest font-montserrat">
          Check Local Heritage Contents
        </h1>
        <SingleBlogVlog />
      </div>
    </section>
  );
};

export default AdminSingleBlogHeritage;
