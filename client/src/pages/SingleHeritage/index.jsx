import React from "react";
import ReactPlayer from "react-player";
import bahoMein from "../../assets/Heritage/bais.mp4";
import { NavLink } from "react-router-dom";

import taj from "../../assets/Heritage/taj.jpeg";

const SingleHeritage = () => {
  return (
    <section className="   duration-300 text-primary_text dark:text-dark_primary_text">
      <div
        style={{ backgroundImage: `url(${taj})` }}
        className=" bg-center bg-cover bg-fixed bg-no-repeat flex flex-col items-center justify-center"
      >
        {/* digital art */}
        <div className="bg-background1 dark:bg-dark_background1 p-4  flex flex-col  gap-4 items-center justify-center w-full h-full">
          <h1 className="font-bold font-playfair text-5xl tracking-wider">
            Exploring the Taj Mahal in the Digital Realm
          </h1>
          <ReactPlayer
            url={bahoMein}
            width="100%"
            height="100%"
            className="max-w-full max-h-full m-auto"
            playing
            controls
            config={{
              file: {
                attributes: { controlsList: "nodownload" },
              },
            }}
          />
        </div>

        {/* name */}
        <div className=" flex items-center justify-center p-4 py-32 text-[7rem] h-screen leading-9  text-dark_primary_text">
          <p>TAJ MAHAL</p>
        </div>

        {/* description and animated intro */}
        <div className="bg-background1 dark:bg-dark_background1 p-4 text-lg flex flex-col items-center justify-center w-full h-full">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            eum neque eius sed veritatis libero velit placeat perferendis minima
            accusamus, iure, debitis ducimus est sapiente molestias rem omnis
            enim ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
            impedit deleniti unde perspiciatis ad nostrum ipsa mollitia sunt
            architecto accusantium enim, fugiat, maiores dolor magni saepe quos
            id neque voluptas? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aspernatur unde aliquid mollitia similique
            voluptatibus voluptatem sequi dolores id dolorum labore a sunt hic,
            blanditiis in velit! Totam quia itaque quam. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Temporibus dolorum animi
            veritatis adipisci saepe qui possimus eligendi atque ab iste! Facere
            corporis ipsa quia earum accusantium officiis maiores, mollitia
            excepturi! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reiciendis eum neque eius sed veritatis libero velit placeat
            perferendis minima accusamus, iure, debitis ducimus est sapiente
            molestias rem omnis enim ad. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ab impedit deleniti unde perspiciatis ad nostrum
            ipsa mollitia sunt architecto accusantium enim, fugiat, maiores
            dolor magni saepe quos id neque voluptas? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Aspernatur unde aliquid mollitia
            similique voluptatibus voluptatem sequi dolores id dolorum labore a
            sunt hic, blanditiis in velit! Totam quia itaque quam. Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Temporibus dolorum
            animi veritatis adipisci saepe qui possimus eligendi atque ab iste!
            Facere corporis ipsa quia earum accusantium officiis maiores,
            mollitia excepturi! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Reiciendis eum neque eius sed veritatis libero
            velit placeat perferendis minima accusamus, iure, debitis ducimus
            est sapiente molestias rem omnis enim ad. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ab impedit deleniti unde perspiciatis
            ad nostrum ipsa mollitia sunt architecto accusantium enim, fugiat,
            maiores dolor magni saepe quos id neque voluptas? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Aspernatur unde aliquid
            mollitia similique voluptatibus voluptatem sequi dolores id dolorum
            labore a sunt hic, blanditiis in velit! Totam quia itaque quam.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            dolorum animi veritatis adipisci saepe qui possimus eligendi atque
            ab iste! Facere corporis ipsa quia earum accusantium officiis
            maiores, mollitia excepturi!
          </p>

          <div className="my-4 w-full flex flex-col gap-4 justify-center">
            <h1 className=" font-bold font-playfair text-2xl tracking-wider ">
              From Love to Legacy: The Story of the Taj Mahal
            </h1>
            <ReactPlayer
              url={bahoMein}
              width="100%"
              height="100%"
              className="max-w-full max-h-full m-auto"
              playing
              controls
              config={{
                file: {
                  attributes: { controlsList: "nodownload" },
                },
              }}
            />
          </div>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
            adipisci dignissimos fugit dolor porro suscipit similique quod
            delectus quam assumenda id veniam recusandae dicta facere officia
            sequi culpa, officiis laborum! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Dicta, voluptatum totam? Quis
            aspernatur magnam doloremque ex ab, iusto similique neque
            consequuntur est quasi, repellat, id animi repellendus sequi aut
            placeat? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Fuga animi, repellat vitae corrupti et voluptas pariatur illo
            molestiae reprehenderit sequi quas rerum libero, quaerat aliquid
            impedit! Explicabo consequuntur reprehenderit ratione. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Assumenda illum magnam
            magni eaque est mollitia praesentium corrupti culpa dignissimos
            laboriosam rem perferendis esse delectus error, voluptate harum
            temporibus. Sunt, obcaecati? Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Reiciendis eum neque eius sed veritatis libero
            velit placeat perferendis minima accusamus, iure, debitis ducimus
            est sapiente molestias rem omnis enim ad. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ab impedit deleniti unde perspiciatis
            ad nostrum ipsa mollitia sunt architecto accusantium enim, fugiat,
            maiores dolor magni saepe quos id neque voluptas? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Aspernatur unde aliquid
            mollitia similique voluptatibus voluptatem sequi dolores id dolorum
            labore a sunt hic, blanditiis in velit! Totam quia itaque quam.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            dolorum animi veritatis adipisci saepe qui possimus eligendi atque
            ab iste! Facere corporis ipsa quia earum accusantium officiis
            maiores, mollitia excepturi! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Reiciendis eum neque eius sed veritatis libero
            velit placeat perferendis minima accusamus, iure, debitis ducimus
            est sapiente molestias rem omnis enim ad. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ab impedit deleniti unde perspiciatis
            ad nostrum ipsa mollitia sunt architecto accusantium enim, fugiat,
            maiores dolor magni saepe quos id neque voluptas? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Aspernatur unde aliquid
            mollitia similique voluptatibus voluptatem sequi dolores id dolorum
            labore a sunt hic, blanditiis in velit! Totam quia itaque quam.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            dolorum animi veritatis adipisci saepe qui possimus eligendi atque
            ab iste! Facere corporis ipsa quia earum accusantium officiis
            maiores, mollitia excepturi! corporis ipsa quia earum accusantium
            officiis maiores, mollitia excepturi!iciis maiores, mollitia
            excepturi! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reiciendis eum neque eius sed veritatis libero velit placeat
            perferendis minima accusamus, iure, debitis ducimus est sapiente
            molestias rem omnis enim ad. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ab impedit deleniti unde perspiciatis ad nostrum
            ipsa mollitia sunt architecto accusantium enim, fugiat, maiores
            dolor magni saepe quos id neque voluptas? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Aspernatur unde aliquid mollitia
            similique voluptatibus voluptatem sequi dolores id dolorum labore a
            sunt hic, blanditiis in velit! Toticiis maiores, mollitia excepturi!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            eum neque eius sed veritatis libero velit placeat perferendis minima
            accusamus, iure, debitis ducimus est sapiente molestias rem omnis
            enim ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
            impedit deleniti unde perspiciatis ad nostrum ipsa mollitia sunt
            architecto accusantium enim, fugiat, maiores dolor magni saepe quos
            id neque voluptas? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aspernatur unde aliquid mollitia similique
            voluptatibus voluptatem sequi dolores id dolorum labore a sunt hic,
            blanditiis in velit! Tot
          </p>
        </div>

        {/* vlog */}
        <div className="bg-background1 dark:bg-dark_background1 p-4 pt-0  flex flex-col gap-4 items-center justify-center w-full h-full">
          <h1 className="font-bold font-playfair text-5xl tracking-wider">
            Sensory Experience of Taj Mahal
          </h1>
          <ReactPlayer
            url={bahoMein}
            width="100%"
            height="100%"
            className="max-w-full max-h-full m-auto"
            playing
            controls
            config={{
              file: {
                attributes: { controlsList: "nodownload" },
              },
            }}
          />
        </div>

        {/* nearest attractions */}
        <div className="bg-background1 dark:bg-dark_background1 p-4 pt-0  flex flex-col gap-4 items-center justify-center w-full h-full">
          <h1 className="font-bold font-playfair text-5xl tracking-wider">
            Nearest Attractions
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
            <NavLink
              to="/"
              className="flex items-center justify-start gap-3 p-3  border-2 rounded-xl shadow-md shadow-primary_text dark:shadow-dark_primary_text  duration-500 transition-transform hover:scale-105 transform-cpu"
            >
              <img src={taj} className="w-32 rounded-xl" />
              <div className="flex flex-col items-start">
                <h1 className=" font-semibold text-2xl tracking-wide">
                  Agra Fort
                </h1>
                <div className="flex flex-wrap w-full items-center justify-center gap-5">
                  <p>
                    <b> Distance:</b> 50km
                  </p>
                  <p>
                    <b>Entry Fee:</b> Rs.10
                  </p>
                </div>
              </div>
            </NavLink>
          </div>
        </div>

        {/* state culture */}
        <div></div>
      </div>
    </section>
  );
};

export default SingleHeritage;
