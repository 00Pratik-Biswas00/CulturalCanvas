import React, { useRef } from "react";
import {
  FaSearch,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { RiEditFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

const LayoutHeritage = ({
  setModalOpen,
  heritages,
  onEditHeritage,
  onDeleteHeritage,
}) => {
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startPosition = useRef(0);
  const scrollLeftValue = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startPosition.current = e.clientX;
    scrollLeftValue.current = scrollRef.current?.scrollLeft || 0;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const distance = e.clientX - startPosition.current;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeftValue.current - distance;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -500, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 500, behavior: "smooth" });
  };

  return (
    <div>
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-y-3">
        <h1 className="text-[1.8rem] rounded-r-xl font-semibold text-center font-playfair bg-highlight text-dark_primary_text py-1 px-4">
          Heritages
        </h1>

        {/* Search Box */}
        <div className="relative w-full sm:w-1/2 flex items-center">
          <input
            type="text"
            placeholder="Search for a heritage..."
            className="w-full bg-background2 dark:bg-shadow rounded-lg focus:outline-none focus:border focus:border-highlight text-base pl-10 sm:pl-10 py-2 sm:px-4"
          />
          <FaSearch className="absolute left-3 w-4 h-4" />
        </div>

        {/* Add New Button */}
        <button
          onClick={() => setModalOpen(true)}
          className="bg-highlight_hover hover:bg-highlight_hover_dark text-dark_primary_text font-medium font-ubuntu sm:text-base py-1 px-4 rounded transition-transform hover:scale-110 duration-1000 transform-cpu"
        >
          Add a New Heritage
        </button>
      </div>

      {/* Scrollable Section */}
      <div className="relative w-full mt-10 px-10">
        {/* Scroll Left Button */}
        <button
          onClick={scrollLeft}
          className="absolute -left-2 top-1/2 transform -translate-y-1/2 bg-background1 dark:bg-dark_background1 hover:text-dark_primary_text border p-2 duration-300 rounded-full"
        >
          <FaLongArrowAltLeft className="w-5 h-5" />
        </button>

        {/* Scrollable Content */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="flex gap-7 overflow-x-hidden w-full outline-none"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {/* Cards for Heritages */}
          {heritages.map((heritage) => (
            <div
              key={heritage.slug}
              className="flex flex-col items-center justify-start gap-3 p-4 min-w-[32%]"
            >
              <img
                src={heritage.image.url}
                className="rounded-xl w-80 h-80 object-cover"
                alt={heritage.name}
              />
              <div className="flex items-center justify-center pt-5 gap-x-3">
                <RiEditFill
                  className="w-7 h-7 cursor-pointer text-highlight_hover hover:text-highlight_hover_dark"
                  onClick={() => onEditHeritage(heritage._id)}
                />
                <p className="text-xl font-bold">{heritage.name}</p>
                <MdDelete
                  className="w-7 h-7 cursor-pointer text-red-600 hover:text-red-800"
                  onClick={() => onDeleteHeritage(heritage._id)}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Right Button */}
        <button
          onClick={scrollRight}
          className="absolute -right-2 top-1/2 transform -translate-y-1/2 bg-background1 dark:bg-dark_background1 hover:text-dark_primary_text border p-2 duration-300 rounded-full"
        >
          <FaLongArrowAltRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default LayoutHeritage;
