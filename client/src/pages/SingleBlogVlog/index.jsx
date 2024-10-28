import React from "react";
import { CiEdit, CiLocationOn } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

import MyButton4 from "../../components/Buttons/MyButton4";
import img1 from "../../assets/blogs/pic3.png";
import ReactPlayer from "react-player";
import demovid from "../../assets/Heritage/bais.mp4";
import SquareAnimation from "../../components/Blobs/SquareAnimation";
import MyButton2 from "../../components/Buttons/MyButton2";
import MyButton1 from "../../components/Buttons/MyButton1";

const SingleBlogVlog = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-4 px-16 duration-300 min-h-screen flex flex-col items-center gap-5">
      <div className="flex flex-col justify-center items-center gap-4 ">
        <h1 className=" text-5xl  font-pangaia">
          Unraveling Hawa Mahal's Historical Treasures
        </h1>
        <div>
          <p className=" italic font-medium font-pangaia">by Pratik Biswas</p>
        </div>

        <MyButton4
          buttonName={"Edit Post"}
          buttonIcon={<CiEdit className="w-6 h-6" />}
          classDesign={
            "before:bg-highlight_hover_dark bg-highlight_hover text-dark_primary_text z-10"
          }
        />
      </div>

      {/* blog image */}
      <div className=" z-10">
        <img
          src={img1}
          alt="blog cover image"
          className=" outline-double outline-8 -outline-offset-[20px] outline-white rounded-xl "
        />
      </div>

      {/* state details */}
      <div className="flex items-center w-full justify-evenly">
        <h1 className=" font-pangaia text-xl font-bold">State: West Bengal</h1>
        <h1 className=" font-pangaia text-xl font-bold">City: Kolkata</h1>
        <a
          href="https://maps.app.goo.gl/Vu6YMT5cNhP39wkT9"
          target="_blank"
          className={`hollowBorder blogCards font-searchBars  text-lg p-2 rounded-full bg-transparent text-primary_text dark:text-dark_primary_text `}
        >
          <CiLocationOn className=" w-6 h-6" />
        </a>
      </div>

      {/* blog content / vlog caption */}
      <div className="bg-background1 dark:bg-dark_background1 z-10">
        Ekhane React Quill Editor er output ta display korabi <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        minima, nemo error sequi accusantium consequuntur cum sint ullam
        incidunt nisi minus vitae quis debitis, repudiandae exercitationem,
        eaque iusto aperiam voluptas? Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Ullam alias quisquam natus. Similique nam est eveniet!
        Ad expedita harum accusamus error reprehenderit dolorem, cumque atque
        maxime adipisci, quisquam, possimus dolores? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Deleniti magni natus incidunt vero
        perferendis inventore delectus possimus eaque maxime eveniet eligendi
        fugiat provident, illo, quo maiores quasi libero iure rem! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Ad nostrum quo eligendi
        beatae, totam perspiciatis et cum molestiae consequuntur rerum fugit.
        Consequuntur odit, velit culpa quisquam dolor illo eius! Et? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Inventore minima, nemo
        error sequi accusantium consequuntur cum sint ullam incidunt nisi minus
        vitae quis debitis, repudiandae exercitationem, eaque iusto aperiam
        voluptas? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Ullam alias quisquam natus. Similique nam est eveniet! Ad expedita harum
        accusamus error reprehenderit dolorem, cumque atque maxime adipisci,
        quisquam, possimus dolores? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Deleniti magni natus incidunt vero perferendis
        inventore delectus possimus eaque maxime eveniet eligendi fugiat
        provident, illo, quo maiores quasi libero iure rem! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Ad nostrum quo eligendi beatae,
        totam perspiciatis et cum molestiae consequuntur rerum fugit.
        Consequuntur odit, velit culpa quisquam dolor illo eius! Et? ipsum dolor
        sit amet consectetur adipisicing elit. Inventore minima, nemo error
        sequi accusantium consequuntur cum sint ullam incidunt nisi minus vitae
        quis debitis, repudiandae exercitationem, eaque iusto aperiam voluptas?
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam alias
        quisquam natus. Similique nam est eveniet! Ad expedita harum accusamus
        error reprehenderit dolorem, cumque atque maxime adipisci, quisquam,
        possimus dolores? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Deleniti magni natus incidunt vero perferendis inventore delectus
        possimus eaque maxime eveniet eligendi fugiat provident, illo, quo
        maiores quasi libero iure rem! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ad nostrum quo eligendi beatae, totam perspiciatis et
        cum molestiae consequuntur rerum fugit. Consequuntur odit, velit culpa
        quisquam dolor illo eius! Et? Lorem ipsum dolor sit amet con ipsum dolor
        sit amet consectetur adipisicing elit. Inventore minima, nemo error
        sequi accusantium consequuntur cum sint ullam incidunt nisi minus vitae
        quis debitis, repudiandae exercitationem, eaque iusto aperiam voluptas?
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam alias
        quisquam natus. Similique nam est eveniet! Ad expedita harum accusamus
        error reprehenderit dolorem, cumque atque maxime adipisci, quisquam,
        possimus dolores? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Deleniti magni natus incidunt vero perferendis inventore delectus
        possimus eaque maxime eveniet eligendi fugiat provident, illo, quo
        maiores quasi libero iure rem! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ad nostrum quo eligendi beatae, totam perspiciatis et
        cum molestiae consequuntur rerum fugit. Consequuntur odit, velit culpa
        quisquam dolor illo eius! Et? Lorem ipsum dolor sit amet con
      </div>

      {/* vlog content (if available) */}

      <div className=" z-10">
        <ReactPlayer
          url={demovid}
          width="100%"
          height="100%"
          className="max-w-full max-h-full m-auto"
          playing={false}
          controls
          config={{
            file: {
              attributes: { controlsList: "nodownload" },
            },
          }}
        />
      </div>

      <SquareAnimation />
    </section>
  );
};

export default SingleBlogVlog;
