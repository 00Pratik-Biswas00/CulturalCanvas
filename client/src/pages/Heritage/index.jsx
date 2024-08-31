import React from "react";
import commonImg from "../../assets/Heritage/a.png";
import cm from "../../assets/Heritage/aichat.png";

const Heritage = () => {
  return (
    <section className=" bg-background1 dark:bg-dark_background1 p-4">
      <div>
        <img src={commonImg} />
      </div>

      <div className="flex items-center justify-center py-4 text-7xl  gap-12 font-bold font-playfair uppercase text-primary_text dark:text-dark_primary_text">
        <p className=" tracking-wider">World</p>
        <p className=" tracking-wider">Heritage</p>
        <p className=" tracking-wider">Sites</p>
        <p className=" tracking-wider">in</p>
        <p className=" tracking-wider">India</p>
      </div>

      <div>buttons</div>

      <div>
        <div id="unesco_listed">
          <h1>UNESCO Listed</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="backdrop-blur-lg bg-opacity-80 p-4 rounded-lg  flex flex-col items-center shadow-custom-orange ">
              <div className="flex flex-col text-primary_text ">
                <img src={cm} alt="cc" className="w-full h-full  rounded-md" />
              </div>
              <h2 className="text-lg  font-semibold">Taj Mahal</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quidem, voluptatibus minus! Temporibus non veniam deleniti nobis
                repellendus quae architecto molestiae in, deserunt ipsam minima
                dolorum quibusdam accusamus consequuntur beatae? Fugiat? Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. Facilis,
                libero ab totam fuga, sapiente expedita facere animi dolores
                distinctio nobis quidem, excepturi odio id ducimus nihil
                explicabo quisquam vitae debitis!
              </p>
              <button className="bg-highlight hover:bg-highlight_hover text-primary_text hover:text-dark_primary_text duration-700 font-bold font-ubuntu p-16 relative flex items-center justify-center rounded-full bottom-0">
                <p className="absolute">
                  Know <br /> More
                </p>
              </button>
            </div>
          </div>
        </div>

        <div id="unesco_unlisted">UNESCO Unlisted</div>
        <div id="local_heritage">LOCAL Heritage</div>
      </div>
    </section>
  );
};

export default Heritage;
