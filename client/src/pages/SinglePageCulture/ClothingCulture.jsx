import React from "react";
import img1 from "../../assets/culture/c1.png";

import img2 from "../../assets/footer/fb.png";

const DiffSarees = [
  {
    sImg: img2,
    sName: "Bandhani Saree",
    sIntro: "Lorem ipsum dolor sit amet sit amet consectetursit amet ▶️",
  },

  {
    sImg: img2,
    sName: "Banarasi Silk Saree",
    sIntro: "Lorem ipsum dolor sit amet sit amet consectetursit amet ▶️",
  },

  {
    sImg: img2,
    sName: "Silk Saree",
    sIntro: "Lorem ipsum dolor sit amet sit amet consectetursit amet ▶️",
  },

  {
    sImg: img2,
    sName: "Dola Silk Saree",
    sIntro: "Lorem ipsum dolor sit amet sit amet consectetursit amet ▶️",
  },

  {
    sImg: img2,
    sName: "Georgette Saree",
    sIntro: "Lorem ipsum dolor sit amet sit amet consectetursit amet ▶️",
  },
];

const DiffDhotis = [
  {
    dImg: img2,
    dName: " Tamil Veshti Dhoti",
    dIntro: "Lorem ipsum dolor sit amet sit amet consectetursit amet ▶️",
  },

  {
    dImg: img2,
    dName: "Kannada Kache Panche Dhoti",
    dIntro: "Lorem ipsum dolor sit amet sit amet consectetursit amet ▶️",
  },

  {
    dImg: img2,
    dName: "Telugu Pancha Dhoti",
    dIntro: "Lorem ipsum dolor sit amet sit amet consectetursit amet ▶️",
  },

  {
    dImg: img2,
    dName: "Punjabi Chadra",
    dIntro: "Lorem ipsum dolor sit amet sit amet consectetursit amet ▶️",
  },

  {
    dImg: img2,
    dName: "Maharashtrian Dhotar",
    dIntro: "Lorem ipsum dolor sit amet sit amet consectetursit amet ▶️",
  },

  {
    dImg: img2,
    dName: "Rajasthani Dulangi Dhoti",
    dIntro: "Lorem ipsum dolor sit amet sit amet consectetursit amet ▶️",
  },

  {
    dImg: img2,
    dName: "The Bengali Kochano or Pleated Dhoti",
    dIntro: "Lorem ipsum dolor sit amet sit amet consectetursit amet ▶️",
  },

  {
    dImg: img2,
    dName: "Readymade Velcro Dhoti",
    dIntro: "Lorem ipsum dolor sit amet sit amet consectetursit amet ▶️",
  },
];
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
      <div className="px-16 pb-5 gap-16 flex flex-col items-center justify-center">
        {/* saree */}
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="text-3xl font-montserrat">Saree</h1>
          <p className=" text-base">
            The saree, an iconic symbol of Indian culture, is renowned for its
            grace and versatility. Spanning over 5-6 yards of fabric, it is
            draped elegantly around the body, showcasing the wearer’s poise and
            sophistication. Worn across India, the saree embodies both tradition
            and style, making it a cherished garment for various occasions.{" "}
            <br />A saree consists of three primary components: the saree
            itself, a blouse (choli), and a petticoat. The petticoat is worn
            underneath and acts as a foundation, while the blouse complements
            the saree with a fitted, often embellished, top. The saree is
            wrapped around the waist, with one end draped over the shoulder,
            known as the pallu. The draping style varies by region, with
            different patterns and techniques that highlight the saree’s rich
            cultural significance.
            <br />
            The saree is a preferred choice for a variety of occasions,
            including weddings, festivals, and formal events. Its adaptability
            allows it to be dressed up with elaborate jewelry and accessories or
            worn casually for everyday wear. The saree's timeless appeal
            continues to captivate and inspire fashion trends both in India and
            around the world. <br />
            The saree is not merely a piece of clothing; it represents a
            deep-rooted cultural heritage. Each region of India has its unique
            style of draping and fabric, reflecting local traditions and
            artistry. From the Banarasi silk sarees of Varanasi to the
            Kanjeevaram silks of Tamil Nadu, each saree tells a story of its
            origin, weaving history into its fabric.
          </p>
          <div className="grid grid-cols-4 gap-5">
            {DiffSarees.map((content, ind) => (
              <div
                key={ind}
                className="flex items-center justify-center gap-5 shadow-custom-blue dark:shadow-custom-orange p-3 rounded-xl transition-transform hover:scale-105 duration-700 transform-cpu cursor-pointer"
              >
                <img src={content.sImg} className="w-28 h-28 rounded-xl" />
                <div className="flex flex-col items-center justify-center gap-2">
                  <h2>{content.sName}</h2>
                  <p>{content.sIntro}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* dhoti */}
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="text-3xl font-montserrat">Dhoti</h1>
          <p className=" text-base">
            The dhoti is a traditional garment worn predominantly in South India
            and Bengal. It is known for its simplicity and elegance,
            representing a blend of cultural heritage and comfort. Typically
            worn by men, the dhoti is a versatile piece of clothing that
            connects wearers to their roots. <br />A dhoti is a rectangular
            piece of fabric, often 5-6 yards long, that is wrapped around the
            waist and tied in place. Traditionally made from cotton or silk, it
            provides a comfortable and breathable option for daily wear and
            formal occasions. The dhoti is paired with a kurta or shirt,
            creating a classic and refined look.
            <br />
            The dhoti is more than just clothing; it is a symbol of cultural
            identity and tradition. Its origins trace back to ancient India,
            where it was worn by men across various regions. The garment’s
            simplicity and practicality reflect the values of modesty and
            respect prevalent in Indian culture.
            <br />
            The dhoti is often worn during religious ceremonies, festivals, and
            formal events. It is favored for its comfort and ease of movement,
            making it suitable for traditional rituals and cultural gatherings.
            The dhoti’s enduring legacy continues to celebrate Indian heritage
            and tradition.
          </p>
          <div className="grid grid-cols-4 gap-5">
            {DiffDhotis.map((content, ind) => (
              <div
                key={ind}
                className="flex items-center justify-center gap-5 shadow-custom-blue dark:shadow-custom-orange p-3 rounded-xl transition-transform hover:scale-105 duration-700 transform-cpu cursor-pointer"
              >
                <img src={content.dImg} className="w-28 h-28 rounded-xl" />
                <div className="flex flex-col items-center justify-center gap-2">
                  <h2>{content.dName}</h2>
                  <p>{content.dIntro}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClothingCulture;
