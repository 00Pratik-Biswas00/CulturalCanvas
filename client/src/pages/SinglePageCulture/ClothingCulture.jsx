import React from "react";
import img1 from "../../assets/culture/c1.png";

import img2 from "../../assets/footer/fb.png";

const ClothingCulture = () => {
  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text   ">
      <div className="relative flex items-center justify-center">
        <img src={img1} alt="culture-bg" />
        <div className=" absolute pb-20 font-montserrat font-extrabold text-7xl">
          Traditional Cloths of India
        </div>
        <div className="h-20 w-[93%] bg-background1 dark:bg-dark_background1 rounded-t-[3rem] absolute bottom-0 "></div>
      </div>
      <div className="px-16 pb-5 flex flex-col items-center justify-center">
        {/* saree */}
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="text-3xl font-montserrat">Saree</h1>
          <p className="text-center text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            eligendi possimus veritatis asperiores iste maiores ducimus. Animi
            dolor atque recusandae ipsum, sequi nobis? Cum eos quo non. Iste,
            explicabo ducimus. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Nostrum culpa omnis enim, dolor temporibus sequi
            quae iste praesentium odio ex possimus consectetur debitis
            distinctio similique atque aliquam. Culpa, iure quaerat? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Ipsum eligendi possimus
            veritatis asperiores iste maiores ducimus. Animi dolor atque
            recusandae ipsum, sequi nobis? Cum eos quo non. Iste, explicabo
            ducimus. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Nostrum culpa omnis enim, dolor temporibus sequi quae iste
            praesentium odio ex possimus consectetur debitis distinctio
            similique atque aliquam. Culpa, iure quaerat?
          </p>
          <div className="grid grid-cols-4 gap-5">
            <div className="flex items-center justify-center gap-5 shadow-custom-blue dark:shadow-custom-orange p-3 rounded-xl transition-transform hover:scale-105 duration-700 transform-cpu cursor-pointer">
              <img src={img2} className="w-28 h-28 rounded-xl" />
              <div className="flex flex-col items-center justify-center gap-2">
                <h2>Benarasi Saree</h2>
                <p>
                  Lorem ipsum dolor sit amet sit amet consectetursit amet ▶️
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-5 shadow-custom-blue dark:shadow-custom-orange p-3 rounded-xl">
              <img src={img2} className="w-28 h-28 rounded-xl" />
              <div className="flex flex-col items-center justify-center gap-2">
                <h2>Benarasi Saree</h2>
                <p>
                  Lorem ipsum dolor sit amet sit amet consectetursit amet ▶️
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClothingCulture;
