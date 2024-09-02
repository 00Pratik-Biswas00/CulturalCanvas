import React from "react";

import { AiOutlineClose } from "react-icons/ai";
import taj from "../../assets/Heritage/taj.jpeg";

const ChatBotPopUp = ({ onClose }) => {
  return (
    <div
      style={{ backgroundImage: `url(${taj})` }}
      className="absolute bottom-8 -right-10 z-50 flex items-center justify-end bg-center bg-cover bg-fixed bg-no-repeat rounded-xl duration-500"
    >
      <div className="absolute inset-0 bg-black opacity-40 z-10 rounded-xl"></div>

      <div className="relative z-20">
        <div className="flex justify-between items-center w-full text-2xl">
          <h1>Cultural Canvas ChatBot</h1>
          <button onClick={onClose} className="  text-primary_text">
            <AiOutlineClose />
          </button>
        </div>

        <div className="flex items-center   rounded-lg max-w-[20rem] md:max-w-full">
          <div className="flex flex-col md:flex-row w-full items-start justify-between gap-x-5 p-5">
            <div className="flex w-full flex-col">
              <div className="flex flex-col items-center">
                <div
                  className="flex items-center justify-center bg-background rounded-lg overflow-auto
                  w-[270px] h-[240px]
                  min-[360px]:w-[280px] min-[360px]:h-[250px]
                  sm:w-[280px] sm:h-[250px]
                  md:w-[350px] md:h-[420px]
                  lg:w-[450px] lg:h-[420px]
                  xl:w-[550px] xl:h-[550px]
                  2xl:w-[400px] 2xl:h-[450px]"
                >
                  hello hello Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Illum quos architecto sit voluptas dolores cum
                  accusamus, sapiente esse fuga dignissimos unde excepturi in
                  distinctio eaque maxime, dolor officia illo! Incidunt! Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit. Officiis
                  at ea cumque ipsum quas, voluptatum, atque commodi eum nostrum
                  obcaecati laborum. Quis quasi nihil rerum unde cupiditate
                  veritatis excepturi numquam. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Modi aut vel quod reiciendis
                  asperiores eius ipsa architecto veritatis voluptates, quis,
                  itaque obcaecati at excepturi distinctio ut, velit esse
                  impedit perferendis.lore Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Consectetur ipsum expedita est,
                  cupiditate distinctio sit labore vitae quam mollitia non
                  impedit praesentium officiis, totam odio consequuntur unde
                  quaerat accusamus laudantium. ello Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Illum quos architecto sit
                  voluptas dolores cum accusamus, sapiente esse fuga dignissimos
                  unde excepturi in distinctio eaque maxime, dolor officia illo!
                  Incidunt! Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Officiis at ea cumque ipsum quas, voluptatum, atque
                  commodi eum nostrum obcaecati laborum. Quis quasi nihil rerum
                  unde cupiditate veritatis excepturi numquam. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Modi aut vel quod
                  reiciendis asperiores eius ipsa architecto veritatis
                  voluptates, quis, itaque obcaecati at excepturi distinctio ut,
                  velit esse impedit perferendis.lore Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Consectetur ipsum expedita est,
                  cupiditate distinctio sit labore vitae quam mollitia non
                  impedit praesentium officiis, totam odio consequuntur unde
                  quaerat accusamus laudantium.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBotPopUp;
