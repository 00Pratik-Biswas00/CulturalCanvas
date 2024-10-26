import React, { useRef, useEffect } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaSearch, FaFilter, FaTimes } from "react-icons/fa";
import stateImg from "../../assets/courses/pratik.jpg";
import MyButton4 from "../../components/Buttons/MyButton4";
import VanillaTilt from "vanilla-tilt";

const blogsVlogs = [
  {
    blogImage: stateImg,
    nblogName: "Unraveling Hawa Mahal's Historical Treasures",
  },
  {
    blogImage: stateImg,
    nblogName: "Unraveling Hawa Mahal's Historical Treasures",
  },
  {
    blogImage: stateImg,
    nblogName: "Unraveling Hawa Mahal's Historical Treasures",
  },
  {
    blogImage: stateImg,
    nblogName: "Unraveling Hawa Mahal's Historical Treasures",
  },
];

// vanilla-tilt
function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

const BlogsVlogs = () => {
  /* 
  {
    reverse:           false,  // reverse the tilt direction
    max:               35,     // max tilt rotation (degrees)
    perspective:       1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:             1,      // 2 = 200%, 1.5 = 150%, etc..
    speed:             300,    // Speed of the enter/exit transition
    transition:        true,   // Set a transition on enter/exit.
    axis:              null,   // What axis should be disabled. Can be X or Y.
    reset:             true,   // If the tilt effect has to be reset on exit.
    easing:            "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    glare:             false,   // if it should have a "glare" effect
    "max-glare":       1,      // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
    "glare-prerender": false   // false = VanillaTilt creates the glare elements for you, otherwise
                               // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
} */
  const options = {
    scale: 1.2,
    speed: 1000,
    max: 30,
    glare: true,
    "max-glare": 1,
  };

  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-4 px-16 duration-300 min-h-screen">
      <div className="flex items-center tracking-wide justify-center pb-4 text-[2.5rem] font-bold font-playfair uppercase [word-spacing:5px] ">
        India's Cultural Tapestry: Through the Eyes of Creators
      </div>

      <div className="flex flex-col sm:flex-row justify-between  w-full items-center sm:items-center gap-y-3 ">
        <MyButton4 buttonName={"Upload Your Blog"} buttonIcon={<FaPlus />} />

        <div className="flex items-center justify-center gap-3">
          <FaFilter className=" cursor-pointer w-4 h-4 sm:w-5 sm:h-5" />

          <div className="relative w-full  flex items-center">
            <input
              type="text"
              placeholder="Search for Users..."
              className=" w-full  bg-background2 dark:bg-shadow rounded-lg focus:outline-none focus:border focus:border-highlight 
            
                  text-base sm:text-base 
                  pl-10 sm:pl-10  
                  py-2
                  sm:px-4"
            />

            <FaSearch className="absolute left-3  w-4 h-4" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 py-10">
        {blogsVlogs.map((content, i) => (
          <Tilt
            className="flex items-center justify-center relative w-[420px] h-[420px] rounded-2xl overflow-hidden
            shadow-cyan-400

            blogCards"
          >
            <img
              src={content.blogImage}
              className="w-full h-full rounded-2xl "
            />

            <div
              className=" text-dark_primary_text flex flex-col items-center justify-end gap-10  overflow-hidden left-0 bottom-0 absolute h-[350px] w-full rounded-2xl p-5 

                blogCardsContents
              "
            >
              <h3 className=" text-center font-bold text-3xl">
                {content.nblogName}
              </h3>

              <button className=" bg-background2 hover:bg-lime-200 duration-500 text-primary_text px-5 py-2 text-base  rounded-3xl mb-5  font-open_sans ">
                Read More
              </button>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default BlogsVlogs;
